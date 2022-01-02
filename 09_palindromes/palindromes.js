const palindromes = function (testSentence) {
    // Remove capitalisation
    testSentence = testSentence.toLowerCase();
    // Convert string to character array
    testSentence = testSentence.split("");
    // Remove punctuation and spaces
    const punctuation = [".", ",", "!", "?", " "];
    testSentence = testSentence.filter((char) => {
        return !(punctuation.includes(char));
    });
    for (let ichar = 0; ichar < testSentence.length; ichar++) {
        if (testSentence[ichar] !== testSentence.reverse()[ichar]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
