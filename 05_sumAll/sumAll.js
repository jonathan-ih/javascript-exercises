const sumAll = function(start, end) {
    // Type checking
    if (typeof(start) !== "number" || typeof(end) !== "number" ||
        start < 0 || end < 0) {
        return "ERROR"
    }


    let total = 0;

    // Swap order of range if start > end
    if (end < start) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    for (x = start; x <= end; x++) {
        total += x;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
