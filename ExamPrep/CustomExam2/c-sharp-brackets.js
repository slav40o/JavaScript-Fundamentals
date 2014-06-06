function Solve(args) {
    var lines = [];
    var currentLine = '';
    var indentString = args[0];
    var indentCount = 0;

    for (var i = 1; i < args.length; i++) {
        var initialLine = args[i].trim();

        for (var j = 0; j < initialLine.length; j++) {
            var currentChar = initialLine[j];

            if (currentChar === '{') {
                currentLine = currentLine.trim().replace(/\s+/g, ' ');
                if (currentLine !== '') {
                    lines.push(newString(indentString, indentCount) + currentLine);
                }

                lines.push(newString(indentString, indentCount) + '{');
                indentCount += 1;
                currentLine = '';
            }
            else if (currentChar === '}') {
                currentLine = currentLine.trim().replace(/\s+/g, ' ');
                if (currentLine !== '') {
                    lines.push(newString(indentString, indentCount) + currentLine);
                }

                indentCount -= 1;
                lines.push(newString(indentString, indentCount) + '}');
                currentLine = '';
            }
            else if (j === initialLine.length - 1) {
                currentLine = currentLine.trim().replace(/\s+/g, ' ');
                lines.push(newString(indentString, indentCount) + currentLine);
                currentLine = '';
            }
            else {
                currentLine += currentChar;
            }
        }
    }

    for (var i = 0; i < lines.length; i++) {
        console.log(lines[i]);
    }
}

function newString(string, count) {
    var result = '';

    for (var i = 0; i < count; i++) {
        result += string;
    }
    return result;
}

function testBrackets() {
    var test1 = [
        '....',
        'using System;    namespace Stars',
        '{class Program{',
        'static    string[] separators ',
        '= new string[] { " " };}',
        '}'
    ];
    var test2 = [
        '>>',
        '{a{',
        '}',
        '}'
    ];
    Solve(test2);
}