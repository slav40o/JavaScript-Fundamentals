function Solve2(args) {
    var matrixSize = args[0].split(' ');
    var rows = parseInt(matrixSize[0]);
    var cols = parseInt(matrixSize[1]);
    var matrix = [];

    for (var i = 1; i < args.length; i++) {
        var rowAsStrig = args[i].split('');

        for (var j = 0; j < rowAsStrig.length; j++) {
            rowAsStrig[j] = parseInt(rowAsStrig[j]);
        }
        matrix.push(rowAsStrig);
    }

    var currentRow = rows - 1;
    var currenCol = cols - 1;
    var sum = 0;
    var jumps = 0;

    while (true) {
        var currentDirection = matrix[currentRow][currenCol];
        matrix[currentRow][currenCol] = true;
        jumps += 1;
        sum += Math.pow(2,currentRow) - currenCol;

        switch (currentDirection) {
            case 1:
                currenCol += 1;
                currentRow -= 2;
                break;
            case 2:
                currenCol += 2;
                currentRow -= 1;
                break;
            case 3:
                currenCol += 2; 
                currentRow += 1;
                break;
            case 4:
                currenCol += 1; 
                currentRow += 2;
                break;
            case 5:
                currenCol -= 1;
                currentRow += 2;
                break;
            case 6:
                currenCol -= 2;
                currentRow += 1;
                break;
            case 7:
                currenCol -= 2;
                currentRow -= 1;
                 break;
            case 8:
                currenCol -= 1;
                currentRow -= 2;
                break;
            default: alert('ERROOOR!');
        }

        if (currentRow < 0 || currentRow >= rows || 
            currenCol < 0 || currenCol >= cols) {
            return 'Go go Horsy! Collected ' + sum + ' weeds';
        }

        if (matrix[currentRow][currenCol] === true) {
            return 'Sadly the horse is doomed in ' + jumps + ' jumps';
        }
    }

}

function secondTaskTest() {
    var test1 = [
        '3 5',
        '54561',
        '43328',
        '52388'
    ];
    var test2;
    var test3;
    console.log(Solve2(test1));
}