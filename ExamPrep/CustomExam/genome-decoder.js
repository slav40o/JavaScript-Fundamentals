function Solve4(args) {
    var formatOutput = args[0].split(' ');
    var lettersPerLine = parseInt(formatOutput[0]);
    var lettersPerGroup = parseInt(formatOutput[1]);

    var codedGenome = args[1];
    var repeatNumber = '';
    var decodedGenome = '';

    for (var i = 0; i < codedGenome.length; i++) {
        var currentChar = codedGenome[i];

        if (currentChar === 'A' || currentChar === 'G' ||
                currentChar === 'C' || currentChar === 'T') {
            var count = parseInt(repeatNumber);
            if (isNaN(count)) {
                decodedGenome += currentChar;
            }
            else {
                decodedGenome += newString(currentChar, count);
                repeatNumber = '';
            }
        }
        else {
            repeatNumber += currentChar;
        }
    }
    printOutput(decodedGenome, lettersPerLine, lettersPerGroup);
}

function printOutput(genome, lineLetters, groupLettersCount) {
    var lines = Math.floor(genome.length / lineLetters);

    if (genome.length % lineLetters > 0) {
        lines += 1;
    }

    for (var i = 0; i < lines; i++) {
        var letters = genome.substring(i * lineLetters, i * lineLetters + lineLetters);
        letters = generateWhiteSpaces(letters, groupLettersCount);
        var line = (i + 1).toString() + ' ' + letters;
        console.log(line);
    }
}

function generateWhiteSpaces(letters, groupLettersCount) {
    var lettersArr = letters.split('');

    for (var i = groupLettersCount; i < lettersArr.length; i+=groupLettersCount + 1) {
        lettersArr.splice(i, 0, " ");
    }
    return lettersArr.join('');
}

function newString(char, count) {
    var result = '';

    for (var i = 0; i < count; i+=1) {
        result += char;
    }

    return result;
}

function genomeTest() {
    Solve4(['9 4', '18A13C10T10GA18GT17C']);
}