function Solve1(args) {
    var s = args[0], c1 = args[1], c2 = args[2], c3 = args[3];
    var firstMaxCount = Math.floor(s / c1);
    var secondMaxCount = Math.floor(s / c2);
    var thirdMaxCount = Math.floor(s / c3);

    var answer = findBest();

    function findBest() {
        var maxSum = 0;

        for (var i = 0; i <= firstMaxCount; i++) {

            for (var j = 0; j <= secondMaxCount; j++) {

                for (var k = 0; k <= thirdMaxCount; k++) {
                    var currentSum = c1 * i + c2 * j + c3 * k;

                    if (currentSum == s) {
                        return currentSum;
                    }
                    if (currentSum < s && currentSum > maxSum) {
                        maxSum = currentSum;
                    }
                }
            }
        }
        return maxSum;
    }
    console.log(answer);
}

function firstTaskTest() {

    var test1 = [110, 19, 29, 39];
    var test2;
    var test3;
    Solve1(test1);
}