function Solve1(args) {
    var searchWord = args[0].trim().toUpperCase();
    var currentWord = '';
    var reformedLine = '';
    var lines = {};
    var doubledLines = {};
    var allCounts = [];
    var punctuationMarks = [",", ".", "(", ")", ";", "-", "!", "?"];

    for (var i = 1 ; i < args.length ; i++) {
        var currentLine = args[i].trim();
        var currentWordCount = 0;

        for (var j = 0; j < currentLine.length; j++) {
            var currentChar = currentLine[j];

            if (isPunctuationMark(currentChar) || currentChar == ' ') {
                if (currentWord !== '') {
                    if (currentWord.toUpperCase() == searchWord){
                        reformedLine += (searchWord + ' ');
                        currentWordCount += 1;
                    }
                    else {
                        reformedLine += (currentWord + ' ');
                    }
                    currentWord = '';
                }
                continue;
            }
            currentWord += currentChar;
        }
        //Check for the last char if it is a letter
        if (currentWord !== '') {
            if (currentWord.toUpperCase() == searchWord) {
                reformedLine += (searchWord + ' ');
                currentWordCount += 1;
            }
            else {
                reformedLine += (currentWord + ' ');
            }
            currentWord = '';
        }

        allCounts.push(currentWordCount);
        if (lines[currentWordCount]) {
            lines[currentWordCount].push(reformedLine.trim());
        }
        else {
            lines[currentWordCount] = [];
            lines[currentWordCount].push(reformedLine.trim());
        }
        
        reformedLine = '';
    }
    var sortedCounts = selectionSort(allCounts);

    for (var i = sortedCounts.length - 1; i >= 0; i -= 1) {
        for (var j = 0; j < lines[sortedCounts[i]].length; j++) {
            console.log(lines[sortedCounts[i]][j]);
        }
    }

    function selectionSort(array1) {
        var lenght = array1.length;

        //selection sort algorithm
        var i, j, tmp, tmp2;
        for (i = 0; i < lenght - 1; i++) {
            tmp = i;
            for (j = i + 1; j < lenght; j++)
                if (array1[j] < array1[tmp])
                    tmp = j;

            tmp2 = array1[tmp];
            array1[tmp] = array1[i];
            array1[i] = tmp2;
        }
        return array1;
    }

    function isPunctuationMark(currentChar) {
        if (punctuationMarks.indexOf(currentChar) != -1) {
            return true;
        }
        return false;
    }
}

function relevanceTeas() {
    var test1 = [
       '  text',
       '     if you   have   someone to   text',
       ' but the text is more than text to text',
       'and you need a better text to text',
       'try to text what the text would want to text another text with text',
       'cause this text is too much about text, and a text will never teach you how to text'
    ];

    var test2 = [
        'a',
        'a b c',
        'b a a',
        'c a a a '
    ];

    var test3 = [];

    Solve1(test2);
}