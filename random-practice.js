//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot seperating them.


var getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase() + '.';
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

console.log(getInitials('Drew Hemsley'));

//More random practice - May 16, 2019

// write a function that takes in an array and a string. 
// It should find the string in the array. If the string exists in the array
// return true, else return false 
// example:  

function find(array, string) {
    for(item of array) {
        if (item === string) 
        return true
    }
        return false;
}

//Another way to do it:

// function find(arr, string) {
//     for(let i = 0; i < arr.length; i++) {
//       const item = arr[i];
//       if (item === string) return true
//     }
//     return false
// }

//Another way to do this:

// function find(arr, string) {
//     if (arr.indexOf(string) !== -1) return true
//     return false
//   }

const answer1 = find(['hey', 'hi', 'hello'], 'hi')

console.log(answer1);

const fastfood = ['tacobell', 'mcdonalds', 'panda express', 'arbys', 'shitface jenkins', 'arctic circle']

const i = fastfood.indexOf('shitface jenkins');

console.log(i);