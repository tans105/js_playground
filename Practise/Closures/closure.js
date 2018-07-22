var add_gen = function(n) {
	var func= function(x) {
		console.log("n=: "+n);
		return n + x;
	};
	return func;
};

var add2 = add_gen(2);
console.log(add2);
console.log(add2(3));


var add = (function () {
    var counter = 0;
    return function () {
    	console.log(counter);
    	counter += 1; 
    	return counter
    }
})();

add();
add();
add();

