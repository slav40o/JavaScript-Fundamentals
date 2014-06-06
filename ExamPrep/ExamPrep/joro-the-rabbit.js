function Solve(args) {
    var fieldSizeAndJumps = args[0].split(" ");
    var fieldRows = parseInt(fieldSizeAndJumps[0]);
    var fieldCols = parseInt(fieldSizeAndJumps[1]);
    var numberOfJumps = parseInt(fieldSizeAndJumps[2]);

    var startingPosition = args[1].split(" ");
    var row = parseInt(startingPosition[0]);
    var col = parseInt(startingPosition[1]);

    var jumpsPerformed = 0;
    var sum = 0;
    var jumpIndex = 0;

    var field = generateField(fieldRows, fieldCols);
    var jumps = new Array(numberOfJumps);

    for (var i = 0; i < numberOfJumps; i+=1) {
        var jumpCoords = args[i + 2].split(" ");
        jumps[i] = [parseInt(jumpCoords[0]), parseInt(jumpCoords[1])];
    }

    while (true) {
        sum += field[row][col];
        field[row][col] = true;
        //Possibly not on the right place
        jumpsPerformed += 1;

        row += jumps[jumpIndex][0];
        col += jumps[jumpIndex][1];
        jumpIndex += 1;
        jumpIndex %= numberOfJumps;

        if (row < 0 || row >= fieldRows || col < 0 || col >= fieldCols) {
            return 'escape ' + sum.toString();
        }

        if (field[row][col] === true) {
            return 'caught ' + jumpsPerformed.toString();
        }
    }
}

function generateField(fieldRows, fieldCols) {
    var field = new Array(fieldRows);
    var num = 1;

    for (var row = 0; row < fieldRows; row += 1) {
        field[row] = new Array(fieldCols);

        for (var col = 0; col < fieldCols; col += 1) {
            field[row][col] = num;
            num++;
        }
    }

    return field;
}

function TestJoro() {
    
    document.write(Solve(["6 7 3", "0 0", "2 2", "-2 2", "3 -1"]));
}