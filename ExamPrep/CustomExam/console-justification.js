var currentLine = [];
var currentWordWidth = 0;
var lineWidth = 0;

function Solve1(args) {
    lineWidth = args[0];

    //Get word --> check if it can fit --> save in array --> justify and print
    for (var i = 1; i < args.length; i += 1) {
        var currentLineWords = args[i].match(/\S+/g);

        for (var j = 0; j < currentLineWords.length; j++) {

            if (checkForEmptySpace(currentLineWords[j])) {
                currentLine.push(currentLineWords[j]);
                currentWordWidth += (currentLineWords[j].length);
            }
            else {
                var finalLine = justifyLine();
                console.log(finalLine);
                currentLine = [];
                currentWordWidth = 0;
                j -= 1;
            }
        }
    }
    var finalLine = justifyLine();
    console.log(finalLine);
}

function justifyLine() {
    var whiteSpaces = lineWidth - currentWordWidth;
    var whiteSpacePerWord = Math.floor(whiteSpaces / (currentLine.length - 1));
    var leftSpace = whiteSpaces % (currentLine.length - 1);

    if (currentLine.length == 1) {
        return currentLine[0];
    }
    else {
        for (var i = 0, additionalSpace = leftSpace; i < currentLine.length - 1; i++, additionalSpace--) {
            if (additionalSpace < 1) {
                currentLine[i] += newString(' ', whiteSpacePerWord);
            }
            else {
                currentLine[i] += newString(' ', whiteSpacePerWord + 1);
            }
        }
    }
    return currentLine.join('');
}

function checkForEmptySpace(word) {
    if (word.length + currentWordWidth + currentLine.length > lineWidth) {
        return false;
    }
    else {
        return true;
    }
}

function newString(char, count){
    var result = '';

    for (var i = 0; i < count; i++) {
        result += char;
    }
    return result;
}

function consoleTest() {
    Solve1([18, 'Beer beer beer Im going for', '   a', 'beer',
        'Beer beer beer Im gonna', 'drink some beer',
        'I love drinkiiiiiiiiing ', 'beer', 'lovely', 'lovely', 'beer']);
}