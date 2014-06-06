function Solve7(args) {
    var inComment = false;
    var currentVariableName = '';
    var variables = [];
    
    for (var i = 1; i < args.length - 1; i++) {
        var currentLine = args[i].trim();
        var inSingleQuotedString = false;
        var inDoubleQuotedString = false;
        var inVariableName = false;

        for (var j = 0; j < currentLine.length; j++) {
            var currentChar = currentLine[j];

            if (currentChar == '$') {
                if (inSingleQuotedString || inDoubleQuotedString) {
                    if (j > 0 && currentLine[j - 1] == '\\') {
                        continue;
                    }
                }
                inVariableName = true;
                continue;
            }
            
            if (currentChar == '\'') {
                if (inDoubleQuotedString) {
                    continue;
                }
                
                if (inSingleQuotedString) {
                    inSingleQuotedString = false;
                    continue;
                }
                else {
                    inSingleQuotedString = true;
                    continue;
                }
            }

            if (currentChar == '"') {
                if (inSingleQuotedString) {
                    continue;
                }

                if (inDoubleQuotedString) {
                    inDoubleQuotedString = false;
                    continue;
                }
                else {
                    inDoubleQuotedString = true;
                    continue;
                }
            }

            if (currentChar == '/') {
                if (inSingleQuotedString || inDoubleQuotedString) {
                    continue;
                }
                
                if ((j < currentLine.length -1) && currentLine[j+1] == '/') {
                    break;
                }

                if ((j < currentLine.length - 1) && currentLine[j + 1] == '*') {
                    inComment = true;
                    continue;
                }
            }

            if (currentChar == '*') {
                if (inComment) {
                    if ((j < currentLine.length - 1) && currentLine[j + 1] == '/') {
                        inComment = false;
                        continue;
                    }
                }
            }

            if (currentChar == '#') {
                if (inSingleQuotedString || inDoubleQuotedString) {
                    continue;
                }
                else {
                    break;
                }
            }

            if (inComment) {
                continue;
            }
            else {
                if (inVariableName) {
                    if (currentChar.match(/^[0-9a-zA-Z]+$/) || currentChar == '_') {
                        currentVariableName += currentChar;
                    }
                    else {
                        inVariableName = false;

                        if (currentVariableName != '') {
                            if (variables.indexOf(currentVariableName) == -1) {
                                variables.push(currentVariableName);
                            }
                            currentVariableName = '';
                        }
                    }
                }
            }
        }
    }
    console.log(variables.length);
    variables = variables.sort();

    for (var i = 0; i < variables.length; i++) {
        console.log(variables[i]);
    }
}

function phpTest() {
    var test1 = [
        '<?php',
        '$browser = $_SERVER[\'HTTP_USER_AGENT\']   ;',
        '$arr =    array();',
        '$arr[$zero]    = $browser;',
        'var_dump($arr);',
        '?>'
    ];

    var test2 = [
        '<?php',
        '/* This is $var1 in comments */',
        '$var3 = "Some string \\$var4 with var escaped.";',
        'echo $var5; echo("$foo,$bar");',
        '// Another comment with variable $var2',
        '?>'
    ];

    var test3 = [
        '<?php',
        '# this is $comment',
        '$valid_var=\'"text"...{$valid_var}\';',
        '$just="Just another var $Just...";$just=$code;',
        '?>'
    ];

    Solve7(test1);
}