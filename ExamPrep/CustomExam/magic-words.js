function Solve5(args) {
    var reorderedWords = reorderWords(args);
    var outputString = extractLetters(reorderedWords);
    return outputString;
}

function extractLetters(stringArray) {
    var result = [];
    var wordCount = stringArray.length;

    for (var i = 0; i < wordCount; i++) {

        for (var j = 0, pos = i; j < stringArray[i].length; j += 1, pos += wordCount) {
            result[pos] = stringArray[i][j];
        }
    }
    return result.join("");
}

function reorderWords(stringArray) {
    var result = stringArray;

    for (var i = 0; i < stringArray.length; i++) {
        var word = result[i];
        var position = word.length % (stringArray.length + 1);
        
        result[i] = null;

        //insert the word to it's new position
        result.splice(position, 0, word);
        //remove old position of the word marked with null
        result.splice(result.indexOf(null), 1);
    }
    return result;
}

function magicWordsTest() {
    console.log(Solve5(['hi', 'academy', 'exam']));
    //console.log(Solve5(['exam', 'academy', 'hi']));
}