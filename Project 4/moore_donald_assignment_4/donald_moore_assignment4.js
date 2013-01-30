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
};

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
};