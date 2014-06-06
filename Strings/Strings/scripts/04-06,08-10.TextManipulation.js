function input(command) {
    var text = jsConsole.read('#text');

    switch (command) {
        case 'changeTxt':
            jsConsole.writeLine(applyTags(text)); break;
        case 'nbws':
            jsConsole.writeLine(replaceWhiteSpace(text)); break;
        case 'extract':
            jsConsole.writeLine(extractText(text)); break;
        case 'replace':
            jsConsole.writeLine(replaceATag(text)); break;
        case 'extMail':
            jsConsole.writeLine(extractEmail(text)); break;
        case 'extPalin':
            jsConsole.writeLine(extractPalindrome(text)); break;
        default:
            jsConsole.writeLine('Wrong command!'); break;
    }
}

//Exercise 4
function applyTags(text) {

    while (text.indexOf("<upcase>") != -1) {
        var startIndex = text.indexOf("<upcase>");
        var endIndex = text.indexOf("</upcase>");
        var substring = text.substring(startIndex, endIndex + 9); //get whole tag and text
        var subUpper = text.substring(startIndex + 8, endIndex).toUpperCase();

        text = text.replace(substring, subUpper);
    }

    while (text.indexOf("<lowcase>") != -1) {
        var startIndex = text.indexOf("<lowcase>");
        var endIndex = text.indexOf("</lowcase>");
        var substring = text.substring(startIndex, endIndex + 10); //get whole tag and text
        var subUpper = text.substring(startIndex + 9, endIndex).toLowerCase();

        text = text.replace(substring, subUpper);
    }

    while (text.indexOf("<mixcase>") != -1) {
        var startIndex = text.indexOf("<mixcase>");
        var endIndex = text.indexOf("</mixcase>");
        var substring = text.substring(startIndex, endIndex + 10); //get whole tag and text
        var subUpper = text.substring(startIndex + 9, endIndex).toMixCase();

        text = text.replace(substring, subUpper);
    }

    return text;
}

String.prototype.toMixCase = function () {
    var mixed = "";
    var currentChar;

    for (var i = 0; i < this.length; i++) {

        //THE FUCK
        if (Math.floor(Math.random() + 0.5)) {
            currentChar = this.charAt(i);
            mixed += currentChar.toUpperCase();
        }
        else {
            currentChar = this.charAt(i);
            mixed += currentChar.toLowerCase();
        }
    }

    return mixed;
}

//Exercise 5
function replaceWhiteSpace(text) {
    var replaced = text.replace(/ /g, '&nbsp');
    return replaced;
}

//Exercise 6
function extractText(htmlText) {
    var text = htmlText;
    while (text.indexOf('<') > -1) {

        var startIndex = text.indexOf('<')
        var end = text.indexOf('>') + 1;
        var substr = text.substring(startIndex, end);
        text = text.replace(substr, '');
    }

    return text;
}

//Exercise 8
function replaceATag(text) {
    var startIndex, endIndex;
    var aTag, hrefLink = "";
    var replacedTxt = text;

    while (replacedTxt.indexOf('<a href=') > -1) {
        startIndex = replacedTxt.indexOf('<a');
        endIndex = replacedTxt.indexOf('</a>') + 4;

        aTag = replacedTxt.substring(startIndex, endIndex);
        hrefLink = extractUrl(aTag);

        replacedTxt = replacedTxt.replace(aTag, hrefLink);
    }

    return replacedTxt;
}

function extractUrl(aTag) {
    var start = aTag.indexOf('"') + 1;
    var end = aTag.indexOf('"', start + 1);
    var link = aTag.substring(start, end);

    start = aTag.indexOf(">") + 1;
    end = aTag.indexOf("<", start + 1);
    var innerText = aTag.substring(start, end);

    return "[URL=" + link + "]" + innerText + "[/URL]";
}

//Exercise 9
function extractEmail(text) {
    var pattern = /\S+@\S+\.\S+/g;
    var mails = text.match(pattern);

    return mails.join(", ");
}

//Exercise 10
function extractPalindrome(text) {
    var textArr = text.split(/\W+/);
    var palindromes = [];

    for (var i = 0; i < textArr.length; i++) {

        if (isPalindrome(textArr[i])) {
            palindromes.push(textArr[i]);
        }
    }
    return palindromes.join(" ");
}

function isPalindrome(word) {
    var isPalin = true;

    for (var i = 0; i < word.length / 2; i++) {

        if (word[i] != word[word.length - i - 1]) {
            return false;
        }
    }
    return isPalin;
}

function clearConsole() {
    jsConsole.clear();
}