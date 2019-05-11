const data = {
    people: [{
      name: 'jon',
      age: 25,
      friends: ['James', 'Jesse', 'Shaun', 'David'],
      feet: {
        count: 2,
        hasToes: true
      }
    }]
  }
  
  // Log the name property of the first person in the data object
  console.log(data.people[0].name)
  // Log the second friend of the first person in the data object
  console.log(data.people[0].friends[1])
  // Log the feet count of the first person in the data object
  console.log(data.people[0].feet.count)

  // Here are some practice problems that we have to do at the beginning of the course.

// 1. list as many Javascript data types you can

//1. number 2
//2. string ''
//3. boolean true
//4. object {}
//5. null 
//6. undefined
//7. Nan??
//8. function func => {}
//9. symbol

// 2. write 3 examples of Javascript expressions

    x =  7
    y = 'hello'
    b = true

    // 3. write and example of lexical scope

    function parent() {
      var x = 4
      function child() {
        var y = 3
        function youngerChild() {
          return 'Hello'
        }
      }
    }

    // 4. write a function that takes in a string and reverses it

    function reverseBoi(string) {

      return string.split("").reverse().join("")

    }
    console.log(reverseBoi('Hello Drew'));

    // Now time for notes for the day - reviewing objects

    const basketball = {
      shape: 'round',
      color: 'orange',
      texture: 'bumpy',
      startBounce: function() {
        return 'started';
      },
      stopBounce: function() {
        return 'stopped';
      }
    }
    
    const started = basketball.startBounce();

    // a function as a property in an object is called a method. let's go deeper though. we can nest in objects.

/*     const basketball = {
      shape: 'round',
      color: {stripe: 'black', surface: 'brown'}
      texture: 'bumpy',
      startBounce: function() {
        return 'started';
      },
      stopBounce: function() {
        return 'stopped';
      }
    } */
    
    const ballColor = basketball.color.stripe


  //here's another example

  const car = {
    make: 'Audi',
    model: 'R8',
    doorCount: 2,
    door: {
      handle: true,
      style: 'suicide'
    },
    seatStyle: 'leather',
    start: function(){},
    wipeWindows: function(){},
    shift: function(){},
    heatSeat: function(temperature, seatPosition){
      return `now heating the ${seatPosition} seat, to ${temperature} degrees`;
    },
    changeDriveMode: function(){}
  }
  
  const actionResult = car.heatSeat(90, 'driver');
  
  console.log(actionResult)

  //now talking about arrays. 
  //Arrays are lists. 

  const colors = ['pink', 'red', 'red', 'black'];

const myColor = colors[1];

const cereal = ['lucky charms', 'cheerios', 'apple jacks', 'waffle crisp'];
const ages = [23, 34, 61, 11, 16];

const audi = [{
  model: "rs7"
}, {
  model: "r8"
}, {
  model: "rs5",
}];

myAudi = audi[1];
myAudiModel = audi[1].model;

// console.log(myAudi)
// console.log(myAudiModel)

const students = [
  { name: "bob" },
  { name: "bil" },
  { name: "jo" },
];

const removedStudent = students.pop();

console.log(removedStudent)

  //An array prototype is all the methods that your data type inherits. For the sake of being an array, it automatically inherits a bunch of stuff. 
//.push will add to the end of an array
//.pop will remove the final value of an array = students.pop(); etc. There are a lot of cool things that you can do to your arrays. There is documentation on this. Just look up 'js array prototypes' in google. 


//in terms of a different way to do if/then statements, you can use a case/break statement. 

const platform = 'google';

if (platform === 'google') {
  console.log('do google things')
} else if (platform === 'twitter') {
  console.log('do twitter things')
} else if (platform === 'facebook') {
  console.log('do facebook things');
}

switch (platform) {
  case 'google' :
    console.log('do google things')
    break;
  case 'twitter' :
    console.log('do twitter things')
    break;
  case 'facebook' :
    console.log('do facebook things')
    break;
}
// here, it's checking if the platform variable === 'google', if not it moves on. 

// CALLBACKS!

function getData(myFunction) {
  const data = { names: ['jon', 'james'] };

  setTimeout(function () {
    myFunction(data)
  }, 3000)
}

getData(function(data) {
  console.log('we got the data!!!');
  console.log(data);
});

//So what's happening here? There is a function called getData that takes in a function, myFunction as a parameter. What is the getData function actually doing? 
//it's first defining data with const. Then it's running another function called setTimeout that is first taking in another function and running it after 3 seconds.


