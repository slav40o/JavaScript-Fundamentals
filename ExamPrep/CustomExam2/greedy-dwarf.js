function Solve8(args) {
    var stringArr = args[0].split(',');
    var valley = parseIntArray(stringArr);

    var maxCount = - 999999999999;
    var patterns = [];
    
    for (var i = 2; i < args.length; i++) {
        var currentPattern = args[i].split(',');
        patterns.push(parseIntArray(currentPattern));
    }

    for (var i = 0; i < patterns.length; i++) {
        var currentCount = 0;
        var currentPatter = patterns[i];
        var patternIndex = 0;
        var index = 0;
        var visited = [];

        while (true) {
            currentCount += valley[index];
            visited[index] = true;
            index = index + currentPatter[patternIndex];
            patternIndex += 1;
            patternIndex %= patterns.length;

            if (index < 0 || index >= valley || visited[index] == true) {
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                }
                break;
            }
        }
    }

    return maxCount;

    function parseIntArray(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        return arr;
    }
}

function dwarfTest() {
    var test1 = [
        '1, 3, -6, 7, 4 ,1, 12',
        '3',
        '1, 2, -3',
        '1, 3, -2',
        '1, -1'
    ];

    console.log(Solve8(test1));
}