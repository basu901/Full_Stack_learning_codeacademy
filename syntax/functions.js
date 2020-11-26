//The functions which do not have a name are called anonymous functions. The following has a declaration and is hence not anonymous
function greeting(name = 'Jane')
{
	console.log("Nice to meet you "+name+" !");
}


//Arrow functions emit the use of the function keyword an directly takes in the arguments.
const area = (width,height) =>{
	console.log("The calculated area is "+(width*height));
}

//A more condensed form of the arrow function where the function has only a single line in the code block.
const cube = num => num*num*num;


greeting("Davis");
area(6,5);
console.log("The value of the cube is "+ cube(7));

