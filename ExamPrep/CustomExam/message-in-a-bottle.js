var codedMessage = '';
var clipher = '';
var results = [];
var currentResult = '';
var clipherBook = {};

function Solve7(args) {
    codedMessage = args[0];
    clipher = args[1];
    generateClipherBook(clipher);
    generateMessage(0);
    return results;
}

function generateMessage(index) {

    //bottom of the recursion
    if (index == codedMessage.length) {
        results.push(currentResult);
        currentResult = '';
        return;
    }
 
    for (var i = 0; i + index <= codedMessage.length; i+=1) {

        if (clipherBook[codedMessage.substr(index, i)]) {
            currentResult += clipherBook[codedMessage.substr(index, i)];
            generateMessage(index + i);
            currentResult.split('').splice(currentResult.length - 1, 1).join('');
        }
    }
}

function generateClipherBook(clipher) {
    var currentLetter = '';
    var currentCodeNumber = '';
    for (var i = 0; i < clipher.length; i++) {
        var currentChar = clipher[i];

        if (isNaN(parseInt(currentChar))) {
            clipherBook[currentCodeNumber] = currentLetter;
            currentLetter = currentChar;
            currentCodeNumber = '';
        }
        else {
            currentCodeNumber += currentChar;
        }
    }
    clipherBook[currentCodeNumber] = currentLetter;
}

function messageTest() {
    console.log(Solve7(['1122', 'A1B12C11D2']))
}