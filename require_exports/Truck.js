module.exports = class Truck{
	constructor(num_wheels, carriage_len)
	{
		this.num_wheels = num_wheels;
		this.carriage_len = carriage_len;
	}

	details()
	{
		console.log(`The number of wheels on the Truck is ${this.num_wheels} with a carriage length of ${this.carriage_len}`);
	}
}