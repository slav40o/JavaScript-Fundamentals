//EXERCISE 1 Variable literals :
jsConsole.writeLine("Exercise 1: <br />");

//integer number
var integerNum = 9;
jsConsole.writeLine("Integer value - " + integerNum);

//string
var stringName = 'Bai Ivan with sigle quotes';
jsConsole.writeLine("String value - " + stringName);

//real number
var floatNum = 3.14;
jsConsole.writeLine("Floating point - " + floatNum);

//boolean
var booleanVar = true;
jsConsole.writeLine("Is this boolean - " + booleanVar);

//Exercise 2 Quoted string:
jsConsole.writeLine("<br/>Exercise 2: <br />");

var quotedStringOne = "\"How you doin'?\", Joey said";
var quotedStringTwo = '\"This is also quoted\"';
jsConsole.writeLine(quotedStringOne + "<br/>" + quotedStringTwo);

//Exercise 3 Type of variables:
jsConsole.writeLine("<br/>Exercise 3: <br/>");

//type of integer number
var integerType = typeof (integerNum);
jsConsole.writeLine("Type of integer number --> " + integerType);

//type of string
var stringType = typeof (stringName);
jsConsole.writeLine("Type of string --> " + stringType);

//type of real number
var floatType = typeof (floatNum);
jsConsole.writeLine("Type of Floating point number --> " + floatType + " <-- Well F*CK!");

//type of boolean value
var boolType = typeof (booleanVar);
jsConsole.writeLine("Type of boolean value --> " + boolType);

//Exercise 4 Null and undefined values:
jsConsole.writeLine("<br/>Exercise 4: <br/>");

var nullVar = null;
var und;
jsConsole.writeLine("Null value - " + nullVar);
jsConsole.writeLine("Undefined - " + und);

var nullType = typeof (nullVar);
var undType = typeof (und);
jsConsole.writeLine("Type of null value --> " + nullVar);
jsConsole.writeLine("Type of undefined --> " + und);