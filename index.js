function produceDrivingRange(blockRange){
	return function(start, end){
		let diff = Math.abs(parseInt(start) - parseInt(end));
		let offset = Math.abs(blockRange - diff);
		if (diff < blockRange){
			return `within range by ${diff}`;
		} else if (diff > blockRange){
			return `${offset} blocks out of range`
		} else {
			return "Just made it!"
		}
	}
}

function produceTipCalculator(percentage){
	return function(total){
		return total*percentage;
	}
}

function createDriver(){
	let driverId = 0;
	return class {
		constructor(name){
			this.name = name;
			this.id = ++driverId;
		}
	}
}