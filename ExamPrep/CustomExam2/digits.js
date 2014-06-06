function Solve3(args) {
    var matrix = new Array(args.length);
    var count = 0;

    for (var i = 0; i < args.length; i++) {
        matrix[i] = args[i].split(' ');

        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = parseInt(matrix[i][j]);
        }
    }

    for (var i = 0; i < matrix.length - 4; i++) {
        for (var j = 0; j < matrix[0].length - 2; j++) {
            var currentNums = patternTest(i, j);
            count += currentNums;
        }
    }
    return count;

    function patternTest(row, col) {
        var currentCount = 0;
        var allPatterns = [
            [0, 'r', 'r', 'd', 'd', 'd', 'd', 'l', 'l', 'u', 'u', 'u', 'f'], //zero
            [2, 'ru', 'ru', 'd', 'd', 'd', 'd', 'f'], //one
            [1, 'ru', 'rd', 'd', 'ld', 'ld', 'r', 'r', 'f'], //two
            [0, 'r', 'r', 'd', 'ld', 'r', 'd', 'd', 'l', 'l', 'f'],  //three
            [0, 'll', 'd', 'rr', 'd', 'l', 'l', 'd', 'd', 'f'], //four
            [4, 'r', 'r', 'u', 'u', 'l', 'l', 'u', 'u', 'r', 'r', 'f'], //five
            [3, 'd', 'r', 'r', 'u', 'u', 'l', 'l', 'u', 'u', 'r', 'r', 'f'], //six
            [0, 'r', 'r', 'd', 'ld', 'd', 'd', 'f'], //seven
            [0, 'r', 'r', 'd', 'ld', 'ld', 'd', 'r', 'r', 'u', 'lu', 'lu', 'f'], //eight
            [4, 'r', 'r', 'u', 'u', 'u', 'u', 'l', 'l', 'd', 'rd', 'f'] //nine
        ];

        //skip zero
        for (var i = 1; i < allPatterns.length; i++) {
            var currentPatter = allPatterns[i];
            var currRow = row + currentPatter[0];
            var currCol = col;
            var isNumber = false;
            var patternIndex = 1;

            while (true) {
                if (matrix[currRow][currCol] != i) {
                    break;
                }
                if (isNumber) {
                    break;
                }
                var direction = currentPatter[patternIndex];
                patternIndex += 1;

                switch (direction) {
                    case 'l': currCol -= 1; break;
                    case 'r': currCol += 1; break;
                    case 'u':currRow -= 1; break;
                    case 'd':currRow += 1; break;
                    case 'ld':
                        currCol -= 1;
                        currRow += 1; break;
                    case 'lu':
                        currCol -= 1;
                        currRow -= 1; break;
                    case 'rd':
                        currCol += 1
                        currRow += 1; break;
                    case 'ru':
                        currCol += 1
                        currRow -= 1; break;
                    case 'f': currentCount += matrix[currRow][currCol];
                        isNumber = true;
                        break;
                    case 'll': currCol -= 2; break;
                    case 'rr': currCol += 2; break;
                }
            }
        }
        return currentCount;
    }
}

function testDigits() {
    var test1 = [
        '1 1 1 1 1',
        '1 1 1 1 1',
        '1 1 1 1 1',
        '1 1 1 1 1',
        '1 1 1 1 1'
    ];

    var test2 = [
        '9 9 9 2 2 2',
        '9 9 9 2 2 2',
        '9 9 9 2 2 2',
        '9 9 9 2 2 2',
        '9 9 9 2 2 2',
        '9 9 9 2 2 2'
    ];
    //console.log(Solve3(test1));
    console.log(Solve3(test2));
}