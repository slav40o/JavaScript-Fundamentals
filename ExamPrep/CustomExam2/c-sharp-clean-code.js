function Solve6(args) {
    var cleanedLines = [];
    var inComment = false;
    var inQotedString = false;

    for (var i = 0; i < args.length; i++) {
        var currentLine = args[i];
        currentLine = cleanLine(currentLine);

        if (currentLine == '') {
            continue;
        }
        //or push to cleaned lines
        console.log(currentLine);
    }

    function cleanLine(line) {
        //var inAtQuotedString = false;
        var cleanedLine = '';

        for (var j = 0; j < line.length; j++) {
            var currentChar = line[j];

            if (currentChar == '"') {
                if (inComment) {
                    continue;
                }

                if (line[j + 1] == '"') {
                    cleanedLine += currentChar;
                    j += 1;
                    continue;
                }
                else {
                    
                    if (inQotedString) {
                        inQotedString = false;
                    }
                    else {
                        inQotedString = true;
                    }
                }
            }

            if (currentChar == '/') {
                if (line[j + 1] == '/') {
                    if (!inQotedString) {
                        break;
                    }
                }

                if (line[j + 1] == '*') {
                    if (!inQotedString) {
                        inComment = true;
                        continue;
                    }
                }
            }

            if (currentChar == '*') {
                if (line[j + 1] == '/') {
                    if (!inQotedString) {
                        inComment = false;
                        j += 1;
                        continue;
                    }
                }
            }

            if (inComment) {
                continue;
            }

            cleanedLine += currentChar;
        }
        return cleanedLine;
    }
}

function CSharpCleanCodeTest() {
    var test1 = [
        //'class HardTest',
        //'',
        //'{',
        //' public HardMethod()',
        //' {',
        //'  string str = @"//not a ',
        //'comment ;)";//(y)',
        '"/*no""oo\\oo*/";/*noo*/',
        ' }',
        '}'
    ];

    Solve6(test1);
}