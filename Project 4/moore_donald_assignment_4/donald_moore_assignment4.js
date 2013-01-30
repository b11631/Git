// Donald Moore
// January 27, 2013
// Project 4
//Main Data
	// String Library
	var stringLibrary = function () {
		//Does a string follow a 123-456-7890 pattern like a phone number?
		//Returns Boolean
		var validatePhoneNumber = function (string) {
		    if (((string.indexOf("-") === 3) && ((string.lastIndexOf("-")) === 7)) && (string.length === 12)) {
			    return true;
		    } else {
			    return false;
		    }
	};
    
		//Does a string follow an aaa@bbb.ccc pattern like an email address?
		//Returns Boolean
		var validateEmail = function (string) {
		    var isWhiteSpace = /\s+/g;  // Tests for any white space in the string.
		    if (((string.indexOf("@") !== -1) && (isWhiteSpace.test(string) === false) && ((string.lastIndexOf(".")) === (string.length - 4)))) {
			    return true;
		    } else {
			    return false;
		    }
	};
	
		 //  VALIDATE URL (Does it start with http: or https:?)
		var validateURL = function (string) {
		    var isHttp = /^http:\/\//,  // Match http:\\ and https:\\ starting at the beginning of the string.
			    isHttps = /^https:\/\//,
			    isWhiteSpace = /\s+/g;  // Tests for any white space in the string.
		    if ((((isHttp.test(string)) || (isHttps.test(string)))) && (isWhiteSpace.test(string) === false)) {
			    return true;
		    } else {
			    return false;
		    }
	};
	
		//  TITLE CASE STRING (Split into words, then uppercase the first letter of each word.)
		var titleCaseString = function (string) {  // STILL NEED TO MAKE THIS WORK PROPERLY
		    var splitString = string.split(" "),
			    newString,
			    i;
		    for (i = 0; i < splitString.length; i += 1) {
			    newString = splitString[i][0].toUpperCase();
		    }
		    return newString;
	};
    
		 //  CHANGE SEPARATOR (Return a string with the first separator changed to the second.)
		var changeSeparator = function (string, newSeparator) {
		    var replaceThis = /,/g,  // Separator to be replaced.
			    replaceSeparator = string.replace(replaceThis, newSeparator);
		    return replaceSeparator;
	    };
	    return {
		"validatePhoneNumber": validatePhoneNumber,
		"validateEmail": validateEmail,
		"validateURL": validateURL,
		"changeSepartator": changeSeparator
	    };
	};

	//Number Library
	var numberLibrary = function () {	
		//  FORMAT DECIMAL PLACES (Format a number to use a specific number of decimal places.)
		var formatDecimalPlaces = function (number, decimalPlaces) {
		    var alterDecimalPlaces = number.toFixed(decimalPlaces);
		    return Number(alterDecimalPlaces);
	    };
	
		//  FUZZY MATCH (Is the number above or below a number within a certain percent?)
		var fuzzyMatch = function (firstNumber, secondNumber, percentageToTest) {
		    var difference = firstNumber - secondNumber,
			    percentDifference = difference / secondNumber,
			    percentage = percentDifference * 100;
		    if ((percentage === percentageToTest) || (percentage === -(percentageToTest))) {
			    return true;
		    } else {
			    return false;
		    }
	    };
	
		//  DIFFERENCE BETWEEN TWO DATES (To be more precise the hours, minutes, and seconds can be added to the dates in the form of 00:01:00.)
		var daysDifference = function (date2, date1) {
		    var futureDate = new Date(date2),
			    mostRecentDate = new Date(date1),
			    dayDifference = (futureDate.getTime() - mostRecentDate.getTime()),
			    seconds = Math.floor(dayDifference / 1000),
			    minutes = Math.floor(seconds / 60),
			    hours = Math.floor(minutes / 60),
			    days = Math.floor(hours / 24);
		    return days;
	    };
	
		//  RETURN ACTUAL NUMBER VALUE OF A STRING NUMBER
		var actualValue = function (stringNumber) {
		    var numberValue = Number(stringNumber);
		    return numberValue;
	    };
	    return {
		"formatDecimalPlaces": formatDecimalPlaces,
		"fuzzyMatch": fuzzyMatch,
		"daysDifference": daysDifference,
		"actualValue": actualValue
	    };
	};

	//Array Library
	var arrayLibrary = function () {
		//  SMALLEST VALUE GREATER THAN A GIVEN NUMBER (Find the smallest value in an array that is greater than a given number.)	
		var smallestValueGreater = function (array, number) {
		    var numbersFound = [],
			    greaterThanGivenNumber,
			    i;
		    for (i = 0; i < array.length; i += 1) {
			    if (array[i] > number) {
				    greaterThanGivenNumber = (array[i]);
				    numbersFound.push(array[i]);
				    numbersFound.sort();
			    }
		    }
		    return numbersFound[0];
	    };
	
		//  TOTAL VALUE OF NUMBERS IN AN ARRAY (Even if some items are not numbers.)
		var totalValueOfArray = function (array) {
		    var totalValue = 0,
			    grabNumbers,
			    i;
		    for (i = 0; i < array.length; i += 1) {
			    if ((array[i][0] === "0") ||
					    (array[i][0] === "1") ||
					    (array[i][0] === "2") ||
					    (array[i][0] === "3") ||
					    (array[i][0] === "4") ||
					    (array[i][0] === "5") ||
					    (array[i][0] === "6") ||
					    (array[i][0] === "7") ||
					    (array[i][0] === "8") ||
					    (array[i][0] === "9")) {
				    array.splice(i, 1);
			    }
			    grabNumbers = parseFloat(array[i]);
			    if (!isNaN(grabNumbers)) {
				    totalValue = totalValue + grabNumbers;
			    }
		    }
		    return totalValue;
	    };
	
		//  SORT OBJECTS WITHIN AN ARRAY BY KEY NAME
		var sortObjectsByKey = function (array, key) {  // STILL NEED TO MAKE THIS WORK PROPERLY
		// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] changes to: [{a:1},{a:2},{a:3}].
		    var sortedArray,
			    i;
		    for (i = 0; i < array.length; i += 1) {
			    if (array[i][0] === key) {
				    sortedArray = array.sort();
			    }
		    }
		    return sortedArray;
	    };
	    return {
		"smallestValueGreater": smallestValueGreater,
		"totalValueOfArray": totalValueOfArray,
		"sortObjectsByKey": sortObjectsByKey
	    };
	};


var slib = stringLibrary();
var nlib = numberLibrary();
var alib = arrayLibrary();




