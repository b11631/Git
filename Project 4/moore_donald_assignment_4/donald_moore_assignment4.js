// Donald Moore
// January 27, 2013
// Project 4
//Main Data

// String Library
var StringLibrary = function () {
	// Checks for a valid phone number
	// Returns boolean
	var isPhoneNumUS = function (str) {
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);
	};
	// Checks for a valid email address
	// Returns boolean
	var isEmailAddr = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		return re.test(str);
	};
	// Checks for a valid URL
	// Returns boolean
	var isUrl = function (str) {
		var re = /^(?:http|https):/;
		return re.test(str);
	};
	// Capitalize the first character of each word in a string
	// Returns modified string with the first letter capitalized in each word
	var splitStrUpper = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;
	};
	// Changes the separator to a new given separator ex. a,b,c -> a/b/c
	var swapSeparator = function (str,newSep) {
		var re = /\W/g;
		return str.replace(re,newSep);
	};

	return {
		"isPhoneNumUS" : isPhoneNumUS,
		"isEmailAddr" : isEmailAddr,
		"isUrl" : isUrl,
		"splitStrUpper" : splitStrUpper,
		"swapSeparator" : swapSeparator

	};
};

