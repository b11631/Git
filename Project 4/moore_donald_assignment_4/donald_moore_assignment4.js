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
};