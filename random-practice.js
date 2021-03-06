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
return array.includes(string);
}

//Another way to do this:

// function find(arr, string) {
//     const foundItem = arr.find(function(item) {
//       return item === string;
//     })
//     return !!foundItem;
//   }

// function find(array, string) {
//     for(item of array) {
//         if (item === string) 
//         return true
//     }
//         return false;
// }

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

//Let's talk about prototype methods.

//First up - the map function! This will modify elements in the array and then map the new elements to a new array!

const hipHopArtists = ['dr dre', 'eminem', 'wu tang', 'snoop', 'notorious big', 'diddy'];
const rockBands = ['seether', 'nickelback', 'creed', 'switchfoot', 'chevelle', 'eminem', 'snoop'];

const filteredRockBands = rockBands.filter(function(item) {
  if (hipHopArtists.includes(item)) return false;
  return true
})

console.log(filteredRockBands);

//Let's talk about looping through objects.

const playStation = {
    color: 'black',
    brand: 'sony',
    memory: '1tb',
    versions: 1,
    games: ['final fantasy', 'fortnite', 'mortal kombat']
}

console.log(playStation.memory);

const newPS5 = {};

for(prop in playStation) {
    newPS5[prop] = 'GOAT';
}
console.log(playStation);
console.log(newPS5);

for(prop in playStation) {
    if (typeof playStation[prop] === 'string') {
        playStation[prop] = null;
    }
}

console.log(playStation);

//Have Brad or Missy or someone explain the below to you.

Object.keys(playStation).forEach(function(key) {
    console.log(key); 
})

//What's the way to remove something from an object? Delete.

//delete playStation.brand, etc.

// how to make a shallow copy of an object; 
const newObj = Object.assign({}, playStation);
const newObj2 = {...playStation};

// how to make a shallow copy of an array
const arr = [1, 2, 3];
const newArr = [...arr];

//Destructuring!

// dot notation
console.log( playStation.brand )

// bracket notation
console.log( playStation['brand'] )

// destructure
const { brand } = playStation;
console.log(brand)

//More array stuff

const drinks = ['sprite', 'pepsi', 'root beer']

const [myDrink, myOtherDrink, isCoke] = drinks;


//The below are the exact same thing.
// const addition = function() {

// }

// const addition = () => {
//}

// function definitions

function x(input) {
    console.log(input)
  }
  
  // function expressions
  
  const y = function (input) {
    console.log(input)
  }
  
  // arrow functions
  
  const z = (input) => {
    console.log(input)
  }
  
  x('hey');
  y('hi');
  z('hello');

  // default (global)

function x() {
    console.log(this)
  }
  
  // implicit
  
  const obj = {
    name: 'jon',
    doSuff: function() {
      console.log(this)
    }
  }
  
  // explicit
  
  function y() {
    console.log(this)
  }
  
  y.call({couldBe: 'anything'});

  function car(make, model) {
    // this = {};
    this.yay = make;
    this.yo = model;
    // return this;
  }
  
  const bmw = new car('bmw', 'm5');
  const mercedes = new car('mercedes', 'cls63');
  
  console.log(bmw, mercedes)

  const person = {
    name: 'jon',
    doSuff: function() {
      console.log(this.name)
    }
  }
  
  // person.doSuff()
  
  
  const otherPerson = {
    name: {
      first: 'Jon',
      last: 'Myrick',
      doOtherStuff: function() {
        console.log(this)
      }
    },
  }
  
  otherPerson.name.doOtherStuff();

  function x() {
    console.log('context is', this)
  }
  
  // invokes x with new context
  x.call({ key: 'what ever i want'});
  
  // returns a new function with new context
  const boundX = x.bind({ otherKey: 'new context value' });
  
  boundX();

//

  function car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  const myCar = new car('ford', 'f150');
  
  console.log(myCar)

  // the above is the same as the below 
  
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
  const myOtherCar = new Car('toyota', 'camry');
  
  console.log(myOtherCar)

  const person = {
    name: 'jon',
    method1: function() {
      console.log(this)
    },
    method3() {
      console.log(this)
    },
    method2: () => {
      console.log(this)
    },
  }
  
  person.method1()
  person.method2()
  person.method3()
  
  const person = {
    name: 'jon',
    method1: function() {
      console.log('method1', this)
      const newFunc = () => {
        console.log('the arrow function', this)
      }
  
      newFunc()
    },
  }
  
  person.method1()