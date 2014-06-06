function Solve9(args) {
    var pathArr = args.split(' ');
    var pathLength = pathArr.length;

    for (var i = 0; i < pathLength; i++) {
        pathArr[i] = parseInt(pathArr[i]);
    }

    var dollyPos = pathArr.length - 1;
    var mollyPos = 0;
    var dollyFlowers = 0;
    var mollyFlowers = 0;
    var isGameEnd = false;
    var pathLength = pathArr.length;

    while (true) {
        var flowersCount = 0;

        if (mollyPos !== dollyPos) {
            if (pathArr[mollyPos] === true) {
                isGameEnd = true;
            }
            else {
                flowersCount = pathArr[mollyPos]
                mollyFlowers += flowersCount;
                pathArr[mollyPos] = true;
                mollyPos = getNewPos(mollyPos, 'r', flowersCount, pathLength);
            }
            
            if (pathArr[dollyPos] === true) {
                isGameEnd = true;
            }
            else {
                flowersCount = pathArr[dollyPos]
                dollyFlowers += flowersCount;
                pathArr[dollyPos] = true;
                dollyPos = getNewPos(dollyPos, 'l', flowersCount, pathLength);
            }
        }
        else {
            if (mollyPos === true) {
                isGameEnd = true;
            }
            else {
                flowersCount = pathArr[mollyPos];
                var halfFlowers = 0;

                if (flowersCount % 2 == 0) {
                    halfFlowers = flowersCount / 2;
                    pathArr[mollyPos] = true;
                }
                else {
                    halfFlowers = Math.floor(flowersCount / 2);
                    pathArr[mollyPos] = 1;
                }

                mollyFlowers += halfFlowers;
                dollyFlowers += halfFlowers;
                mollyPos = getNewPos(mollyPos, 'r', flowersCount, pathLength);
                dollyPos = getNewPos(dollyPos, 'l', flowersCount, pathLength);
            }
        }

        if (isGameEnd) {
            var winner = '';
            var results = mollyFlowers.toString() + ' ' + dollyFlowers.toString();

            if (dollyFlowers > mollyFlowers){
                winner = 'Dolly';
            }
            else if (mollyFlowers > dollyFlowers) {
                winner = 'Molly';
            }
            else {
                winner = 'Draw';
            }

            console.log(winner);
            console.log(results);
            break;
        }
    }
}

function getNewPos(oldPos, direction, moveCells, arraySize) {
    var newPosition = 0;

    if (direction === 'r') {
        newPosition = oldPos + moveCells;

        while (newPosition >= arraySize) {
            newPosition -= arraySize;
        }
    }
    else {
        newPosition = oldPos - moveCells;

        while (newPosition < 0) {
            newPosition = arraySize + newPosition;
        }
    }
    return newPosition;
}

function testTwoGirls() {
    Solve9('4 17 4 2 7 11 3 2')
}