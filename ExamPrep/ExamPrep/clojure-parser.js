function Solve1(args) {
    var declaredFuncs = {};
    var finalResult;

    for (var i = 0; i < args.length; i++) {
        var currentCommand = args[i].trim();
        var operator = '';
        var nestedOperator = '';
        var currentDigit = '';
        var currentFunctionName = '';
        var currentNewFunction = '';
        var parameters = [];
        var nestedParameters = [];
        var inCommand = false;
        var inNestedCommand = false;
        var inDefiningFuncName = false;

        for (var j = 0; j < currentCommand.length; j++) {
            var currentChar = currentCommand[j];

            if (currentChar === ' ' || currentChar == ')') {
                if (currentFunctionName !== '') {
                    if (declaredFuncs[currentFunctionName] || declaredFuncs[currentFunctionName] == 0) {
                        var functionResul = declaredFuncs[currentFunctionName];
                        if (inNestedCommand) {
                            nestedParameters.push(functionResul);
                        }
                        else {
                            parameters.push(functionResul);
                        }
                    }
                    else {
                        currentNewFunction = currentFunctionName;
                    }

                    currentFunctionName = '';
                }
                if (!currentDigit == '') {
                    if (inNestedCommand) {
                        nestedParameters.push(parseInt(currentDigit))
                    }
                    else {
                        parameters.push(parseInt(currentDigit));
                    }
                    currentDigit = '';
                }

                if (currentChar == ')' && currentNewFunction != '') {
                    

                    var result;
                    if (inNestedCommand){
                        result = calculate(nestedOperator, nestedParameters);
                    }
                    else {
                        result = calculate(operator, parameters);
                    }
                    if (currentNewFunction !== 'def') {
                        declaredFuncs[currentNewFunction] = result;
                    }
                    
                    currentNewFunction = '';
                }

                if (inNestedCommand && currentChar == ')') {
                    var nestedResult = calculate(nestedOperator, nestedParameters);

                    parameters.push(nestedResult);
                    nestedOperator = '';
                    nestedParameters = [];
                    inNestedCommand = false;
                }
                continue;
            }

            if (currentChar == '(') {
                if (inCommand) {
                    inNestedCommand = true;
                }
                else {
                    inCommand == true;
                }
                continue;
            }

            if (isMathOperator(currentChar)) {
                if (currentChar == '-' && isNumber(currentCommand[j + 1])) {
                    currentDigit += currentChar;
                }
                else {
                    if (inNestedCommand) {
                        nestedOperator += currentChar;
                    }
                    else {
                        operator = currentChar;
                    }
                }
                continue;
            }

            if (isNumber(currentChar)) {
                if (currentFunctionName != '') {
                    currentFunctionName += currentChar;
                }
                else {
                    currentDigit += currentChar;
                }
                continue;
            }

            if (currentFunctionName == '' && j + 4 < currentCommand.length &&
                currentCommand.substr(j, 4) == 'def ') {

            }

            currentFunctionName += currentChar;
        }

        finalResult = calculate(operator, parameters);
        if (finalResult == 'error!') {
            return 'Division by zero! At Line:' + (i+1);
        }
    }

    return finalResult;

    function calculate(operator, parameters) {
        if (parameters.length == 1) {
            return parameters[0];
        }

        var result = parameters[0];
        for (var i = 1; i < parameters.length; i++) {
            switch (operator) {
                case '-': result -= parameters[i]; break;
                case '+': result += parameters[i]; break;
                case '*': result *= parameters[i]; break;
                case '/':
                    if (parameters[i] == 0) {
                        return 'error!';
                    }
                    result = Math.floor(result / parameters[i]); break;
            }
        }
        return result;
    }

    function isMathOperator(char) {
        if (char == '+' || char == '*' || char == '-' || char == '/') {
            return true;
        }
        else {
            return false;
        }
    }

    function isNumber(char) {
        if (char == ' ') {
            return false;
        }
        return char == Number(char);
    }
}

function testClojure() {
    var firstTest = [
        '(     +    1     2 (* 1 1 1 1) 7 ) ',  //Returns 3
        '(+ 50 (- 2 7) 1)',  //Returns 15 s 
        '(- 42 -2)', //2
        '(- 4)', //Return 4 
        '(/ 2)', //Returns 2
        '(/ 10 3)',
        '(/ 10 3 2)'
    ];
    var secondTest = [
        '(def myFunc 5)',  // myFunc = 5
        '(def myNewFunc (+  myFunc  myFunc 2))', //myNewFunc = 12
        '(def MyFunc (* 2  myNewFunc))', //MyFunc = 24,myFunc = 5(Names are CaseSensitive)
        '(/   MyFunc  myFunc)' //Now the parser should return 4 
    ];
    var thirdTest = [
        '(def func 10)',
        '(def newFunc (+  func 2))',
        '(def sumFunc (+ func func newFunc 0 0 0))',
        '(* sumFunc 2)',

    ];
    var fourthTest = [
        '(def func (+ 5 2))',
        '(def func2 (/  func 5 2 1 0))',
        '(def func3 (/ func 2))',
        '(+ func3 func)',

    ];
    console.log(Solve1(thirdTest));
}