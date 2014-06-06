//Exercise 3
function findMaxSeq() {

    //Read and parse array. Removes empty, undefined, NaN
    var input = jsConsole.read("#tb-arr");
    var array1 = jsConsole.parseIntArray(input);
    var step = 0;
    
    //[0] -> startingIndex  [1] -> length. You can save them to variables
    var seqData = findIntSequence(array1, step);

    //Print
    jsConsole.writeLine("Your best sequence is from " + seqData[1] + " elements:");
    for (var i = seqData[0]; i < seqData[0] + seqData[1]; i++) {
        jsConsole.write(array1[i] + " ");
    }

    jsConsole.writeLine("");
}

//Exercise 4
function findIncSeq() {

    //Read and parse array. Removes empty, undefined, NaN
    var input = jsConsole.read("#tb-arr");
    var array1 = jsConsole.parseIntArray(input);
    var step = 1;

    //[0] -> startingIndex  [1] -> length. You can save them to variables
    var seqData = findIntSequence(array1, step);

    //Print
    jsConsole.writeLine("Your best sequence is from " + seqData[1] + " elements:");
    for (var i = seqData[0]; i < seqData[0] + seqData[1]; i++) {
        jsConsole.write(array1[i] + " ");
    }

    jsConsole.writeLine("");
}

//Finds sequence in int array. Step = 0 - equal; step >= 1 - increasing; step <= -1 - decreasing.
//Returns array with starting index and length
function findIntSequence(array, step) {
    var maxSequence = 0;
    var startIndex = -1;
    var tempSequence = 1;
    var lenght = Object.keys(array).length;

    //Check next number and increase count or save lenght and starting index
    for (var i = 0; i < lenght - 1; i++) {
        if (array[i] + step == array[i + 1]) {
            tempSequence++;
        }
        else {
            if (tempSequence > maxSequence) {
                maxSequence = tempSequence;
                startIndex = i - maxSequence + 1;
            }
            tempSequence = 1;
        }
    }

    //Last check is missed in the loop
    if (tempSequence > maxSequence) {
        maxSequence = tempSequence;
        startIndex = lenght - maxSequence;
    }

    return [startIndex, maxSequence];
}

//Exercise 5 
function sortArray() {
    var input = jsConsole.read("#tb-arr");
    var array1 = jsConsole.parseIntArray(input);
    var sortedArray = selectionSort(array1);

    jsConsole.writeLine(array1);
}

function selectionSort(array1) {
    //Array.length gives often undefiend
    var lenght = Object.keys(array1).length;

    //selection sort algorithm
    var i, j, tmp, tmp2;
    for (i = 0; i < lenght - 1; i++) {
        tmp = i;
        for (j = i + 1; j < lenght; j++)
            if (array1[j] < array1[tmp])
                tmp = j;

        tmp2 = array1[tmp];
        array1[tmp] = array1[i];
        array1[i] = tmp2;
    }

    return array1;
}

//Exercise 6
function findMostFrequent() {

    //Parse array
    var input = jsConsole.read("#tb-arr");
    var array1 = jsConsole.parseIntArray(input);
    var length = Object.keys(array1).length;

    //Algorithm
    //Var to check where we have been and for count and element
    var visitedCells = new Array(length);
    var maxCount = 0;
    var bestElement;

    for (var i = 0; i < length; i++) {

        //if it is visited is for checked element
        if (visitedCells[i] === true) {
            continue;
        }

        //Mark element as current , reset count
        //Do not mark the cell as vizited we will miss it on the nex loop
        var currentElement = array1[i];
        var count = 1;

        for (var j = i + 1; j < length; j++) {

            //Skip visited cells
            if (visitedCells[j] === true) {
                continue;
            }

            //If is the same increase count
            if (currentElement === array1[j]) {
                count++;
                visitedCells[j] = true;
            }

            //else just PRODULJI! :) 
        }

        if (count > maxCount) {
            maxCount = count;
            bestElement = currentElement;
        }
    }

    //Print
    jsConsole.writeLine("Most common element is " + bestElement + "(" + maxCount + " times).");
}

//Exercise 7
function findArrayElementIndex() {

    //Get input
    var element = jsConsole.readInteger("#tb-index");
    var input = jsConsole.read("#tb-arr");
    var array1 = jsConsole.parseIntArray(input);
    var index = -1;

    if ((isNaN(element))) {
        //do nothing
    }
    else {
        //Actual search
        var index = binarySearch(array1, element);
    }

    //Print
    jsConsole.writeLine("array[" + index + "] = " + element);
}

function binarySearch(array, searchElement) {
    var sortedArray = selectionSort(array);
    jsConsole.writeLine(sortedArray);

    //Binary search 
    var minIndex = 0;

    //Array.length gives often undefiend
    var maxIndex = Object.keys(sortedArray).length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = sortedArray[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}