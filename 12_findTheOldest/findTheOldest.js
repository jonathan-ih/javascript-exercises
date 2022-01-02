const findTheOldest = function(people) {
    return people.sort((a, b) => {
        return computeAge(a) < computeAge(b);
    })[0];
};

function computeAge(person) {
    let birth, death;
    birth = person.yearOfBirth;

    if (!person.yearOfDeath) {
        death = (new Date()).getFullYear();
    } else {
        death = person.yearOfDeath;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
