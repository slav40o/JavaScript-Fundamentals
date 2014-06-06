(function () {
	function createJsConsole(selector) {
		var self = this;
		var consoleElement = document.querySelector(selector);

		if (consoleElement.className) {
			consoleElement.className = consoleElement.className + " js-console";
		}
		else {
			consoleElement.className = "js-console";
		}

		var textArea = document.createElement("p");
		textArea.id = "text-area";
		consoleElement.appendChild(textArea);

		self.write = function jsConsoleWrite(text) {
			var textLine = document.createElement("span");
			textLine.innerHTML = text;
			textArea.appendChild(textLine);
			consoleElement.scrollTop = consoleElement.scrollHeight;
		}

		self.writeLine = function jsConsoleWriteLine(text) {
			self.write(text);
			textArea.appendChild(document.createElement("br"));
		}

		self.read = function readText(inputSelector) {
			var element = document.querySelector(inputSelector);
			if (element.innerHTML) {
				return element.innerHTML;
			}
			else {
				return element.value;
			}
		}

		self.readInteger = function readInteger(inputSelector) {
			var text = self.read(inputSelector);
			return parseInt(text);
		}

		self.readFloat = function readFloat(inputSelector) {
			var text = self.read(inputSelector);
			return parseFloat(text);
		}

		self.clear = function Clear() {
		    var console = document.getElementById("console").lastChild;
		    console.innerHTML = "";
		}

		self.parseIntArray = function parseIntArray(sequence) {
		    var arrayStr = sequence.split(" ");
		    var parsedArr = new Array(arrayStr.length);

		    for (var i = 0; i < arrayStr.length; i++) {
		        var parsedNum = parseInt(arrayStr[i])

		        if (isNaN(parsedNum)) {
		            continue;
		        }
		        parsedArr[i] = parseInt(parsedNum);
		    }
		    parsedArr = jsConsole.cleanArray("", parsedArr);
		    return parsedArr;
		}

		self.cleanArray = function cleanArray(deleteValue, array) {
		    for (var i = 0; i < array.length; i++) {
		        if ((array[i] == undefined) || (array[i] == "") || (array[i] == " ")) {
		            array.splice(i, 1);
		            i--;
		        }
		    }

		    return array;
		}

		return self;
	}
	jsConsole = new createJsConsole("#console");
}).call(this);
