const fibonacci = function(x) {
    // Check input
    if (x <= 0 ) {
        return "OOPS";
    }

    // Base case (x = 1 or x = 2)
    if (x == 1 || x == 2) {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
