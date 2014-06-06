function Solve2(args) {
    var numbers = args[0].split(' ');
    var parsedNumbers = parseNumberToInt(numbers);
    var bynaryLine = convertNumbersToBinary(numbers);
    var numberCypher = {};
    var decodedText = '';

    for (var i = 1; i < args.length; i++) {
        var letter = args[i].substr(0, 1);
        var letterNum = args[i].substr(1);
        numberCypher[parseInt(letterNum)] = letter;
    }

    var digitCount = 0;

    for (var i = 0; i < bynaryLine.length; i++) {
        var currentBit = bynaryLine[i];

        if (currentBit == 1) {
            digitCount += 1;
        }
        else {
            if (digitCount > 0) {
                decodedText += numberCypher[digitCount];
                digitCount = 0;
            }
        }
    }

    if (digitCount > 0) {
        decodedText += numberCypher[digitCount];
    }
    return decodedText;

    function parseNumberToInt(numbers) {
        for (var i = 0; i < numbers.length; i++) {
            numbers[i] = parseInt(numbers[i]);
        }
        return numbers;
    }

    function convertNumbersToBinary(numbers) {
        var binaryNumbers = new Array(numbers.length * 8);
        var index = 0;

        for (var i = 0; i < numbers.length; i++) {
            var currentNumber = numbers[i];

            for (var j = 7; j >= 0; j--) {
                var currentBit = (currentNumber >> j) & 1;
                binaryNumbers[index] = currentBit;
                index++;
            }
        }
        return binaryNumbers;
    }
}

function variableLengthTest() {
    var test1 = [
        '251 253 214 255 223 187 254 254 183 175 254 240',
        ' 2',
        'S5',
        'a6',
        'e1',
        'l7',
        'm3',
        'o8',
        'p9',
        's10',
        't4',
        'x11'
    ];

    var test2 = [
        '173 222',
        ' 2',
        'a1',
        'b3',
        'c4'
    ];
    console.log(Solve2(test1));
    console.log(Solve2(test2));
}