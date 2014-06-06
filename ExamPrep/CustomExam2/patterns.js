function Solve5(args) {
    var matrix = new Array(args.length);
    var maxCount = -21111111111;
    var patternsFound = 0;

    for (var i = 0; i < args.length; i++) {
        matrix[i] = args[i].split(' ');

        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = parseInt(matrix[i][j]);
        }
    }

    for (var i = 0; i < matrix.length - 2; i++) {
        for (var j = 0; j < matrix[0].length - 4; j++) {
            var currentCount = checkPattern(i, j);

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        }
    }

    if (patternsFound == 0) {
        return 'NO ' + calculateDiagonal();
    }
    else {
        return 'YES ' + maxCount;
    }

    function calculateDiagonal() {
        var sum = 0;
        var col = 0;
        var row = 0;

        for (var i = 0; i < matrix.length; i++) {
            sum += matrix[row][col];
            col += 1;
            row += 1;
        }
        return sum;
    }

    function checkPattern(row, col) {
        var pattern = ['r', 'r', 'd', 'd', 'r', 'r', 'f'];
        var currentCount = matrix[row][col];
        var isValid = false;
        var firstDigit = matrix[row][col];
        var direction = pattern[0];
        var patternIndex = 1;
        col += 1;

        while (true) {
            if (isValid) {
                patternsFound += 1;
                return currentCount;
            }

            if (firstDigit != matrix[row][col] - 1) {
                break;
            }
            else {
                currentCount += matrix[row][col];
                firstDigit = matrix[row][col];
            }

            direction = pattern[patternIndex];
            patternIndex += 1;

            switch (direction) {
                case 'r': col += 1; break;
                case 'd': row += 1; break;
                case 'f': isValid = true; break;
            }
        }
    }
}

function testPatterns() {
    var test1 = [
        '1 2 3 4 5',       
        '2 3 4 5 6',
        '3 4 5 6 7',
        '4 5 6 7 8',
        '5 6 7 8 9'
    ];

    var test2 = [
        '2 3 4 5 5 4 100 5',
        '5 4 5 1 2 4 3 -2',
        '1 5 6 7 8 6 1 8',
        '-9999 2 3 8 5 6 7 8',
        '2 1 4 9 10 11 -4 6',
        '-5 -4 -3 3 4 5 6 77777',
        '5 -111 -2 2 1 3 7 4',
        '6 7 -1 0 1 2 8 9'
    ];

    var test3 = [
        '1 2 3 4 5 6 7',
        '7 6 5 4 3 2 1',
        '1 2 3 4 5 6 7',
        '7 6 5 4 3 2 1',
        '1 2 3 4 5 6 7',
        '7 6 5 4 3 2 1',
        '1 2 3 4 5 6 7'
    ];

    //console.log(Solve5(test1));
    //console.log(Solve5(test2));
    console.log(Solve5(test3));
}