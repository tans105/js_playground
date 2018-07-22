var add=function(){
	var counter=0;
	return function(){
		console.log(counter);
		return ++counter;
	}
};

var add1= add();
add1();
add1();

