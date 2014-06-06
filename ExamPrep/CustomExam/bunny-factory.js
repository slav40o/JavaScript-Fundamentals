function Solve(args) {
    var bunnyCages = args;
    var s = 0, p = 1;
    var nextSum = 0, product = 1;

    for (var i = 0; i < bunnyCages.length; i+=1) {
        s = sumCages(bunnyCages, 0, i);

        if (i + s >= bunnyCages.length) {
            return bunnyCages.join(" ");
        }

        nextSum = sumCages(bunnyCages, i + 1, i + s);
        product = multiplyCages(bunnyCages, i + 1, i + s);
        bunnyCages = relocateCages(bunnyCages, i + s + 1, nextSum, product);
    }

    return bunnyCages.join(" ");
}

function relocateCages(array, startIndex, sum, product){
    var sumToStringArray = sum.toString().split('');
    var prodToSumArray = product.toString().split('');

    var concatedResult = sumToStringArray.concat(prodToSumArray);
    concatedResult = parseToIntArray(concatedResult);
    var untouchedCages = array.slice(startIndex);
    var resultArray = concatedResult.concat(untouchedCages);

    return resultArray;
}

function parseToIntArray(stringArr) {
    var parsedArr = [];

    for (var i = 0; i < stringArr.length; i++) {
        var currentNumber = parseInt(stringArr[i]);

        if (currentNumber < 2) {
            continue;
        }
        else {
            parsedArr.push(currentNumber);
        }
    }
    return parsedArr;
}

function sumCages(array, startInex, endPosition) {
    var sum = 0;

    for (var i = startInex; i <= endPosition; i += 1) {
        sum += array[i];
    }
    return sum;
}

function multiplyCages(array, startIndex, endPosition) {
    var product = 1;

    for (var i = startIndex; i <= endPosition; i+=1) {
        product *= array[i];
    }
    return product;
}

function bunnyTest() {
    console.log(Solve([3, 2, 5, 5, 4, 8, 4, 9, 5, 6, 3, 4]));
}