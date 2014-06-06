function submitBtnClick() {
    var number = jsConsole.readInteger("#tb-first");
    var digitCount = number.toString().length;
    var tempNumber = number;
    var numberName = "";

    //Ready numbers
    if (number < 21 || ((number % 10 == 0) && digitCount == 2) || ((number % 100 == 0) && digitCount == 3)) {
        numberName = getWord(number);
    }

        //Numbers to be splitted in two 
    else if (digitCount == 2) {
        var firstDigit = tempNumber % 10;

        tempNumber /= 10;
        tempNumber = Math.floor(tempNumber);
        var secondDigit = tempNumber % 10;

        numberName = getWord(secondDigit * 10) + " " + getWord(firstDigit);
    }

        //Numbers to be splitted in three
    else if (digitCount == 3) {
        if ((number % 10 == 0) || (number % 100 < 21)) {
            var firstTwoDigits = tempNumber % 100;

            tempNumber /= 100;
            tempNumber = Math.floor(tempNumber);

            var thirdDigit = tempNumber % 10;

            numberName = getWord(thirdDigit * 100) + " and " + getWord(firstTwoDigits);
        }
        else if (isNaN(number)) {
            numberName = "Not a valid number!";
        }
        else {
            var firstDigit = tempNumber % 10;
            tempNumber /= 10;
            tempNumber = Math.floor(tempNumber);

            var secondDigit = tempNumber % 10;
            tempNumber /= 10;
            tempNumber = Math.floor(tempNumber);

            var thirdDigit = tempNumber % 10;

            numberName = getWord(thirdDigit * 100) + " and " + getWord(secondDigit * 10) + " " + getWord(firstDigit);
        }
    }
    else {
        numberName = "Not a valid number!";
    }

    numberName = numberName.charAt(0).toUpperCase() + numberName.slice(1);
    jsConsole.writeLine(number + " --> " + numberName)
}

//all the different words for the numbers
function getWord(number) {
    var word = "";
    switch (number) {
        case 0: word = "zero"; break;
        case 1: word = "one"; break;
        case 2: word = "two"; break;
        case 3: word = "three"; break;
        case 4: word = "four"; break;
        case 5: word = "five"; break;
        case 6: word = "six"; break;
        case 7: word = "seven"; break;
        case 8: word = "eight"; break;
        case 9: word = "nine"; break;
        case 10: word = "ten"; break;
        case 11: word = "eleven"; break;
        case 12: word = "twelve"; break;
        case 13: word = "thirteen"; break;
        case 14: word = "fourteen"; break;
        case 15: word = "fifteen"; break;
        case 16: word = "sixteen"; break;
        case 17: word = "seventeen"; break;
        case 18: word = "eighteen"; break;
        case 19: word = "nineteen"; break;
        case 20: word = "twenty"; break;
        case 30: word = "thirty"; break;
        case 40: word = "forty"; break;
        case 50: word = "fifty"; break;
        case 60: word = "sixty"; break;
        case 70: word = "seventy"; break;
        case 80: word = "eighty"; break;
        case 90: word = "ninety"; break;
        case 100: word = "one hundred"; break;
        case 200: word = "two hundred"; break;
        case 300: word = "three hundred"; break;
        case 400: word = "four hundred"; break;
        case 500: word = "five hundred"; break;
        case 600: word = "six hundred"; break;
        case 700: word = "seven hundred"; break;
        case 800: word = "eight hundred"; break;
        case 900: word = "nine hundred"; break;
        default:
            break;
    }
    return word;
}