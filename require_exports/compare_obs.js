/*
	Truck and Car are local modules as opposed to Core modules. Using require makes it possible to 
	create objects of the Truck and Car class. Note that the name used for the class need not be the
	same as the ones defines in the respective .js files. The module.exports syntax MUST be included
	in the .js files to allow extraction of the class and create its objects in a separate module.

*/

let Tr = require('./Truck.js');
let Cr = require('./Car.js');

let checker = (t,c) =>{
	if(t.num_wheels>c.num_wheels)
		t.details();
	else
		console.log(`The car has more wheels with ${c.num_wheels} wheels`);
}

let t1 = new Tr(10,8);
let c1 = new Cr(5,6,"red");

checker(t1,c1);


let t2 = new Tr(6,8);
let c2 = new Cr(8,6,"red");

checker(t2,c2);

