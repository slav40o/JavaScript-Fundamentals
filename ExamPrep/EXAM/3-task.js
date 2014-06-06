function Solve3(args) {
    var s = args[0];
    var result = '';
    // Your solution here
    var variables = {};
    var templates = [];
    var refactoredLines = [];

    for (var i = 1; i <= s; i+=1) {
        var rawVariable = args[i].split('-');
        var variableName = rawVariable[0];
        var variableValue = rawVariable[1];
        variables[variableName] = variableValue;
    }

    var numberOflines = args[s + 1];
    var inNkTag = false;
    var inNormalTag = false;
    var inRepeatTag = false;
    var inTemplateTag = false;
    var inIfCondition = false;
    var inModelTag = false;
    var inEscapedString = false;
    var inNkCommand = false;

    var inNkCommandType = false;

    var nkCommand = '';
    var nkCommandName = '';
    var refactLine = '';
    var commandType = '';
    var commandValue = '';
    var ifCondition = '';
    var renderName = '';
    var modelName = '';

    for (var i = numberOflines + 1; i < args.length; i++) {
        var currentLine = args[i];

        for (var j = 0; j < currentLine.length; j++) {
            var currentChar = currentLine[j];

            //OPENNING/CLOSING TAG
            if (currentChar == '<') {
                if (inEscapedString) {

                }
                else {
                    if (currentLine[j + 1] == 'n') {
                        inNkTag = true;
                        inNkCommand = true;
                        j += 3;
                        continue;
                    }

                    //Closing tag
                    if (currentLine[j + 1] == '/') {
                        if (inNkTag) {
                            if (currentLine[j + 2] == 'n') {
                                inNkTag = false;
                            }
                        }
                    }
                }
            }

            //Parse nk commands
            if (inNkTag) {
                if (inNkCommand) {
                    if (currentChar == ' ') {
                        proceedNkCommand(nkCommand)
                        nkCommand = '';
                        inNkCommand = false;
                        continue;
                    }
                    nkCommand += currentChar;
                }
                //MODEL
                if (inModelTag) {
                    if (currentChar = '/') {
                        if (currentLine[j+1] == 'n') {
                            refactLine += getModel(modelName);
                            modelName = '';
                            inModelTag = false;
                            j += 9;
                        }
                    }
                }

                //TEMPLATE
                if (inTemplateTag) {

                }
                if (inIfCondition) {

                }
                if (inRepeatTag) {

                }
            }
            else {
                refactLine += currentChar;
            }
            
        }
        refactoredLines.push(refactLine);
    }

    function getModel(modelName) {
        if (variables[modelName]) {
            return variables[modelName];
        }
        else {
            return modelName;
        }
    }

    function proceedNkCommand(command) {
        switch (command) {
            case 'model': inModelTag = true;
                break;
            case 'template': inTemplateTag = true;
                break;
            case 'repeat': inRepeatTag = true;
                break;
            case 'if': inIfCondition = true;
                break;
            default:

        }
    }

    console.log(result);

}

function thirdTaskTest() {
    var test1 = [

    ];
    var test2;
    var test3;
    console.log(Solve3(test1));
}