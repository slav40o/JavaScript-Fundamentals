// This works if the names of the variables do not have 'sum, avg, max, min'
function Solve3(inputArr) {
    var definedVariables = {};

    function calcSum(numbers) {
        var sum = 0;

        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

    function calcAvg(numbers) {
        return Math.floor(calcSum(numbers) / numbers.length);
    }

    function calcMin(numbers) {
        var minNumber = Number.MAX_VALUE;

        for (var i = 0; i < numbers.length; i++) {
            var currentNumber = numbers[i];

            if (currentNumber < minNumber) {
                minNumber = currentNumber;
            }
        }
        return minNumber;
    }

    function calcMax(numbers) {
        var maxNumber = Number.MIN_VALUE;

        for (var i = 0; i < numbers.length; i++) {
            var currentNumber = numbers[i];

            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
        return maxNumber;
    }

    function checkForDeepNestedVariable(currentValue) {
        for (var i = 0; i < currentValue.length; i++) {
            var hasVars = false
            if (!isFinite(currentValue[i])) {
                return true;
            }
        }
    }

    function getInsideVarsValue(operation, values) {
        for (var i = 0; i < values.length; i++) {
            if (isFinite(values[i])) {
                continue;
            }
            
            var currentValue = definedVariables[values[i]];
            if (!isFinite(currentValue)) {

                //Addon  for cases with deep nested func ... just trying
                if (checkForDeepNestedVariable(currentValue)) {
                    currentValue = getInsideVarsValue(operation, values)
                }
                currentValue = calculateValue(operation, currentValue);
            }
            values[i] = currentValue;
        }
        return values;
    }

    function calculateValue(operation, value) {
        if (operation == '') {
            return value;
        }

        switch (operation) {
            case 'sum': return calcSum(value); break;
            case 'avg': return calcAvg(value); break;
            case 'min': return calcMin(value); break;
            case 'max': return calcMax(value); break;
            default: alert('ERRORRRR'); break;
        }
    }

    function parseNameAndOperation(nameOperation) {
        var indexOfWhiteSpace = nameOperation.trim().indexOf(' ');
        var name, func;

        if (indexOfWhiteSpace === -1) {
            name = nameOperation.trim();
            func = '';
        }
        else {
            name = nameOperation.substring(0, indexOfWhiteSpace).trim();
            func = nameOperation.substr(indexOfWhiteSpace).trim();
        }
        return {
            name: name,
            func: func
        };
    }

    function parseValue(rawValue) {
        rawValue = rawValue.trim();
        rawValue = rawValue.substring(0, rawValue.length - 1);
        //For every value: trim, check if number and parse or return variable name.trim
        var parts = rawValue.split(',').map(function (item) {
            item = item.trim();
            if (isFinite(item) && item != '') {
                return parseInt(item);
            }
            else {
                return item.trim();
            }
        });
        return parts;
    }

    for (var i = 0; i < inputArr.length; i++) {
        var currentCommand = inputArr[i].trim();
        var operation, value, name;

        //Final loop
        if (currentCommand.indexOf('def') !== 0 || inputArr.length - 1 === i) {
            var splitedCommand = currentCommand.split('[');
            if (splitedCommand.length == 1) {
                value = parseValue(splitedCommand[0]);
                operation = '';
            }
            else {
                value = parseValue(splitedCommand[1]);
                operation = splitedCommand[0];
            }
            value = getInsideVarsValue(operation, value);
            value = calculateValue(operation, value);

            if (typeof value === 'object') {
                return value[0];
            }
            return value;
        }
        else {
            currentCommand = currentCommand.substr('def '.length).trim();
        }
        //parts[0] = Variable + finction
        //parts[1] = value
        var commandParts = currentCommand.split('[');
        var nameAndOperation = parseNameAndOperation(commandParts[0]);

        name = nameAndOperation.name;
        operation = nameAndOperation.func;
        value = parseValue(commandParts[1]);
        value = getInsideVarsValue(operation, value);
        value = calculateValue(operation, value);
        definedVariables[name] = value;
    }
}



function testListy() {
    var test1 = [
      '    def    func2 [5, 3, 7, 2, 6, 3]' ,
      'def func sum[func2]',
      'def func3   min  [func2]',
      'def func4 max[5, 3, 7, 2, 6, 3]',
      'def    func5    avg[5, 3, 7, 2, 6, 3]',
      'def func6 sum[func2, func3, func4 ]',
      'sum[func6, func4]'
    ];
    var test2 = [
        'def func sum[1, 2, 3, -6]',
        'def newList [func, 10, 1]',
        'def newFunc sum[func, 100, newList]',
        '[newFunc]'
    ];
    var test3 = [
        "def newFunc     [      123,432    , 4]",
        "def blaBLA sum[newFunc]",
        "def BLAbla min[newFunc]",
        "avg[BLAbla,blaBLA]"
    ];
    console.log(Solve3(test3)) 
    
}