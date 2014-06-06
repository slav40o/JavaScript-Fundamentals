var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function Solve2(encryptedMessage) {
    var decodedMessage = decode(encryptedMessage);
    var cypherlength = parseInt(decodedMessage[decodedMessage.length - 1]);
    var message = decodedMessage.substr(0,
        decodedMessage.length - cypherlength - 1);
    var cypher = decodedMessage.substring(message.length, decodedMessage.length - 1);
    
    var decriptedMessage = encrypt(message, cypher);
    return decriptedMessage;
}

function encrypt(message, cypher) {
    var encryptedMessage = message.split('');

    if (encryptedMessage.length > cypher.length) {
        var cypherIndex = 0;

        for (var i = 0; i < encryptedMessage.length; i++) {
            var currentChar = encryptedMessage[i];
            currentChar = String.fromCharCode((alphabet.indexOf(currentChar) ^
                alphabet.indexOf(cypher[cypherIndex])) + 65);
            encryptedMessage[i] = currentChar;
            cypherIndex += 1;
            cypherIndex %= cypher.length;
        }
    }
    else {
        var messageIndex = 0;

        for (var i = 0; i < cypher.length; i+=1) {
            var currentChar = encryptedMessage[messageIndex];
            currentChar = String.fromCharCode((alphabet.indexOf(currentChar) ^
                alphabet.indexOf(cypher[i])) + 65);
            encryptedMessage[messageIndex] = currentChar;
            messageIndex += 1;
            messageIndex %= message.length;
        }
    }
    return encryptedMessage.join('');
}

function decode(text) {
    var count = '';
    var lastLetter = text[text.length - 1];
    var decodedText = '';

    for (var i = 0; i < text.length; i+=1) {
        var currentChar = text[i];

        if (isNaN(parseInt(currentChar))) {
            if (isNaN(parseInt(count))) {
                decodedText += currentChar;
            }
            else {
                decodedText += newString(currentChar, parseInt(count));
                count = '';
            }
        }
        else {
            count += currentChar;
        }
    }
    return decodedText + lastLetter;
}

function encode(text) {
    var compressedText = '';
    var currentChar = text[0];
    var currentCharCount = 1;

    for (var i = 1; i < text.length; i++) {
        var nextChar = text[i];

        if (nextChar === currentChar) {
            currentCharCount += 1;
        }
        else {
            if (currentCharCount > 2) {
                compressedText += (currentCharCount.toString() + currentChar);
            }
            else {
                if (currentCharCount == 2) {
                    compressedText += (currentChar + currentChar);
                }
                else {
                    compressedText += currentChar;
                }
            }
            currentChar = nextChar;
            currentCharCount = 1;
        }
    }

    if (currentCharCount > 2) {
        compressedText += (currentCharCount.toString() + currentChar);
    }
    else {
        if (currentCharCount == 2) {
            compressedText += (currentChar + currentChar);
        }
        else {
            compressedText += currentChar;
        }
    }
    return compressedText;
}

function newString(char, count) {
    var result = '';

    for (var i = 0; i < count; i++) {
        result += char;
    }
    return result;
}

function decodeAndDecryptTest() {
    console.log(Solve2('ABBAA6BA7'));     //AAABB
    console.log(Solve2('KKICXDE3P5'));    //JOHNY
}