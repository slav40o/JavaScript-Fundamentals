function Solve5(params) {
    var numberArray = parseArray(params);
    var numberCount = numberArray[0]
    var sequences = 1;

    for (var i = 1; i <= numberCount; i++) {
        
        if (numberArray[i] <= numberArray[i+1]) {
            sequences++;
        }
    }
    return sequences;
}

function parseArray(stringArr) {
    var parsedArray = new Array(stringArr.length);

    for (var i = 0; i < stringArr.length; i++) {
        parsedArray[i] = parseInt(stringArr[i]);
    }

    return parsedArray;
}

function TestSequence(){
    var sequence = Solve5([9, 1, 8, 8, 7, 6, 5, 7, 7, 6]);
    document.writeln(sequence);
}