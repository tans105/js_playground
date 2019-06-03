function StopWatch() {

	let duration = 0, started = false;
	let timeout = null;

	this.start = function() {
		if(started) {
			console.log("Stop Clock is already Started ! ");
		} else {
			console.log("Starting now! ");
			started = true;
			timeout = setInterval(function() {
				duration += 1;	
			}, 1000);
		}
	};

	this.stop = function() {
		if(!started){
			console.log("Stop Clock is already Stopped");
		} else {
			console.log("Stopped");
			clearInterval(timeout);
			started = false;
		}
	};

	Object.defineProperty(this, 'duration', {
		get: function() {
			return duration;
		}
	});

	this.reset = function() {
		duration = 0;
		started = false;
	};

}

let sw = new StopWatch();
sw.start();
setTimeout(function() {
	sw.stop();
	console.log(sw.duration);
}, 6000);
