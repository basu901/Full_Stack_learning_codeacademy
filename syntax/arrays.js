const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);

//The following line won't through an error but will print 'undefined'
console.log(famousSayings[3]);



//Notice the change between the const and let declarations for arrays
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//Both these updates are possible
condiments[0] = 'Mayo';
utensils[3] = 'Spoon';

//We are re-assigning the condiments variable to refer to a new array. This is allowed.
condiments = ['Mayo'];
console.log(condiments);

//We cannot re-assign the utensils array which is a const variable
utensils = ['Spoon'];

//The following line will throw an error.
console.log(utensils);



//Push and Pop in arrays
const chores = ['wash dishes', 'do laundry', 'take out trash'];

//Notice that multiple items can be pushed to chores and mutate the array
chores.push("Clean room","Wash utensils");
console.log(chores);

chores.pop(); //Removes a the last element in the array


//Slice, shift, unshift, indexOf

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // Removes the first element of the array
console.log(groceryList);

groceryList.unshift('popcorn'); //Adds the argument to the beginning of the array. You can add multiple items to the beginnig of the array.

console.log(groceryList.slice(1,4)); //slice creates a shallow copy of the groceryList. Hence the array does not get mutated.
									 //The last index in the argument of the function is not included in the slice.
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta'); //Provides the index of the element in the array.
console.log(pastaIndex);



//Arrays are passed by reference in the function calls
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); //['arrays', 'can', 'be', 'MUTATED']

function removeElement(newArr)
{
  newArr.pop();
}

removeElement(concept); 
console.log(concept); //['arrays', 'can', 'be']