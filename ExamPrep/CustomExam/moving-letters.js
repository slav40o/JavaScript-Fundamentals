var alphabet = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function Solve8(args) {
    var wordsArr = args.split(' ');
    var letters = extractLetters(wordsArr);
    var movedLetters = moveLetters(letters);
    return movedLetters;
}
 
function extractLetters(words) {
    var letterArray = [];
    var longestWord = getLongestLength(words);

    for (var j = 0; j < longestWord; j++) {
        for (var i = 0; i < words.length; i += 1) {
            var index = words[i].length - 1 - j;
            if (index < 0) {
                continue;
            }
            letterArray.push(words[i][index]);
        }
    }
    return letterArray;
}

function getLongestLength(words) {
    var longest = -1;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest){
            longest = words[i].length;
        }
    }
    return longest;
}

function moveLetters(letters) {
    var lettersCount = letters.length;

    for (var i = 0; i < lettersCount; i++) {
        var currentChar = letters[i];
        var charNumber = getLetterPosition(currentChar);
        var newPosition = charNumber - (lettersCount - i);

        if (newPosition < 0) {
            newPosition = lettersCount + newPosition;
        }
        while (newPosition >= lettersCount) {
            newPosition -= lettersCount;
        }

        if (newPosition == i) {
            continue;
        }
        letters.removeAt(i);
        letters.insertAt(newPosition, currentChar);
    }
    return letters.join('');
}

Array.prototype.insertAt = function (index, item) {
    this.splice(index, 0, item);
};

Array.prototype.removeAt = function (index) {
    this.splice(index, 1);
};


function getLetterPosition(letter) {
    return alphabet.indexOf(letter);
}

function movingLettersTest() {
    console.log(Solve8('Fun exam right'));
}
