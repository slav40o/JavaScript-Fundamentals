function Solve4(array) {
    var maxSum = -2000001;

    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    
    for (var i = 1; i < array.length; i++) {
        var currentSum = 0;

        for (var j = i; j < array.length; j++) {
            currentSum += array[j];

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

function TestMaxSum() {
    document.write(Solve4([9, -9, -8, -8, -7, -6, -5, -1, -7, -6]));
}