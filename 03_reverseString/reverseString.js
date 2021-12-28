const reverseString = function(str) {
    const letterArray = str.split('')
    let reversedString = '';

    for (let i = letterArray.length - 1; i >= 0; i--) {
        reversedString += letterArray[i];
    }

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
