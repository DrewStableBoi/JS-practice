// Saturday, May 11th reviews!

// Remember, arrays are lists of relevant information. 

const icecreams = ['rocky road', 'vanilla', 'cookies & cream', 'moose tracks'];

for (flavor of icecreams) {
  console.log(`I like ${flavor} icecream!`)
}

// Key words:
// - element
// - item
// - loop
// - iteration

for (let i = 0; i < icecreams.length; i++) {
  console.log(`Drew loves ${icecreams[i]} icecream!`)
}

// Key Words:
// index
// So what's happening here is the index starts at 0, then executes the code. THEN, you repeat the sequence until i reaches the length of the array.

function hasFavFlav(myFavoriteFlavor, arr) {
    for(flavor of arr) {
      if (flavor === myFavoriteFlavor) {return true;}
      
    }
    return false;
  }
  
  const hasVanilla = hasFavFlav('vanilla', icecreams);
  
  console.log(hasVanilla)

//Here's another way to do it with a for loop.

  function hasFavFlav(myFavoriteFlavor, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (myFavoriteFlavor === arr[i]) return true;
    }
    return false;
  }
  
//   const hasVanilla = hasFavFlav('vanilla', icecreams);
  
//   console.log(hasVanilla)

//   const icecreams = ['rocky road', 'vanilla', 'cookies & cream', 'moose tracks'];

// function example1(arr) {
//   arr.forEach(function(flavor){
//     console.log(`forEach: ${flavor}`)
//   })
// }

// example1(icecreams);


// function example2(arr) {
//   for(flavor of arr) {
//     console.log(`for of: ${flavor}`)
//   }
// }

// example2(icecreams);

// Ok, so how do you mutate an array?

const flavors = ['rocky road', 'vanilla', 'cookies & cream', 'moose tracks']

for(let i = 0; i < flavors.length; i++) {
    flavors[i] = null 
}

console.log(flavors);

// This is not desirable for the purist. It's sort of an unwritten rule to never modify an array.

//3.4 practice problem redux

function updateUserInfo(array, propertyKey, propertyValue, newEmail, newName) {
    for(i = 0; i < array.length; i++) {
      if(array[i][propertyKey] === propertyValue) {
        array[i].email = newEmail;
        array[i].name = newName;
      }
    }
    return array;
    }

//How would I do a forEach here?

function updateUserInfo(array, propertyKey, propertyValue, newEmail, newName) {
    array.forEach((element) => {
        if (element[propertyKey] === propertyValue) {
            element.email = newEmail;
            element.name = newName;

        }
    })
return array
}