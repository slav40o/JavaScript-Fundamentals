function Solve2(args) {
    var fieldSize = args[0].split(' ');
    var fieldHeight = parseInt(fieldSize[0]);
    var fieldWodth = parseInt(fieldSize[1]);

    var startPosition = args[1].split(' ');
    var row = parseInt(startPosition[0]);
    var col = parseInt(startPosition[1]);

    var field = new Array(fieldHeight);

    for (var i = 2, j = 0; i < args.length; i += 1, j += 1) {
        field[j] = args[i].split("");
    }

    var sum = 0;
    var passedCells = 0;

    while (true) {
        var currentCell = field[row][col];
        sum += row * fieldWodth + col + 1;
        passedCells += 1;
        field[row][col] = true;

        switch (currentCell) {
            case 'l': col -= 1; break;
            case 'r': col += 1; break;
            case 'u': row -= 1; break;
            case 'd': row += 1; break;
            default:
        }

        if (row < 0 || row >= fieldHeight || col < 0 || col >=fieldWodth) {
            return 'out ' + sum.toString();
        }
        else if (field[row][col] === true) {
            return 'lost ' + passedCells.toString();
        }
    }
}

function LabyrinthTest() {
    document.write(Solve2(['3 4', '1 3', 'lrrd', 'dlll', 'rddd']));
}