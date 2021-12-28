const removeFromArray = function() {
    let arguments_array = Array.from(arguments);
    const array = arguments_array.shift();

 for (const target of arguments_array) {
     for (let i = 0; i < array.length; i++) {
         if (target === array[i]) {
            array.splice(i, 1);
         }
     }
 }
 return array;
};

// Do not edit below this line
module.exports = removeFromArray;
