//Gets input and calls functions (actual exercisez)
function input(command) {

    if (command === 'reverse') {
        var word = jsConsole.read('#rev-word');
        var reversed = word.reverse();

        jsConsole.writeLine(word + " --> " + reversed);
    }
    else if (command === 'expression') {
        var expression = jsConsole.read('#valid-exp');
        var isValid = validateExpression(expression);

        if (isValid) {
            jsConsole.writeLine(expression + " is valid!");
        }
        else {
            jsConsole.writeLine(expression + " is NOT valid!");
        }
    }
    else if (command === 'substr') {
        var substring = jsConsole.read('#substr');
        var text = jsConsole.read('#search-txt');
        var substrCount = substringSearch(substring, text);

        jsConsole.writeLine(substring + " is found " + substrCount + " times.")
    }
    else {
        jsConsole.writeLine("Wrong command!");
    }
}

//Exercise 1
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

//Exercise 2
function validateExpression(exp) {
    var leftBrackets = 0;
    var rightBrackets = 0;

    for (var i = 0; i < exp.length; i++) {
        if (exp[i] === ')') {
            rightBrackets++;
        }

        if (exp[i] === '(') {
            leftBrackets++;
        }

        if (rightBrackets > leftBrackets) {
            return false;
        }
    }

    if (rightBrackets === leftBrackets) {
        return true;
    }
    else {
        return false;
    }
}

//Exercise 3
function substringSearch(substr, text) {
    var count = 0;
    var index = 0;
    var lowerCaseText = text.toLowerCase();

    while (true) {
        index = lowerCaseText.indexOf(substr, index);

        if (index !== -1) {
            count++;
            index++;
        }
        else {
            break;
        }
    }
    return count;
}