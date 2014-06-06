
function tester() {
    var trimmed = '  523  234    25   '.reduceWhiteSpace().trim();
    var killed = "Get rid of my whitespaces.".killWhiteSpace();
    var reduced = "  Get   rid of   my extra        whitespaces".reduceWhiteSpace();
    var arr = ['A', 'B', 'D', 'E'];
    arr.insertAt(2, 'C');
    //Remove at inex i arr.splice(i, 1);
    arr.removeAt(3, 1);
    var upperString = "SADFAF";
    var isUpper = isUpperString(upperString);
    var isLowerStr = isLowerString("AsadA;");
}

String.prototype.toCharArray = function () {
    return this.split("");
}

String.prototype.killWhiteSpace = function () {
    return this.replace(/\s/g, '');
};

String.prototype.reduceWhiteSpace = function () {
    return this.replace(/\s+/g, ' ');
};

String.prototype.htmlEscape = function () {
    return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, "&#39").replace(/ /g, "&nbsp;");
}

String.prototype.splitToWords = function () {
    return this.match(/\S+/g);
}

String.prototype.padLeft = function (count, char) {
    char = char || " ";
    if (char.length > 1) {
        return String(this);
    }
    if (this.length >= count) {
        return String(this);
    }
    var str = String(this);
    for (var i = 0, thisLen = str.length; i < count - thisLen; i++) {
        str = char + str;
    }
    return str;
}

String.prototype.padRight = function (count, char) {
    char = char || " ";
    if (char.length > 1) {
        return String(this);
    }
    if (this.length >= count) {
        return String(this);
    }
    var str = String(this);
    for (var i = 0, thisLen = this.length; i < count - thisLen; i++) {
        str += char;
    }
    return str;
}

function isUpperString (str) {
    var isUpeper = str === str.toUpperCase();
    var isNotLower = str !== str.toLowerCase();
    return (isUpeper && isNotLower);
}

function isLowerString (str) {
    return (str === str.toLowerCase() && str !== str.toUpperCase());
}

function newString(char, count) {
    var result = '';

    for (var i = 0; i < count; i++) {
        result += char;
    }
    return result;
}

Array.prototype.insertAt = function (index, item) {
    this.splice(index, 0, item);
};

Array.prototype.removeAt = function (index) {
    this.splice(index, 1);
};

//isFinite('value'); if it is Number return true
//Array.prototype.push.apply(array, array);
//To do
function allUniquePermutations(stringOrArray) {

}

function allPermutations(stringOrArray) {

}

function removeEmpyCells(array) {

}