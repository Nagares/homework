/*
4. Напишите функцию, которая вызывается и работает следующим образом:

console.log( multi(2)(3)(4) ); // 24

*/


function multi(a){
	return function(b){
		return function(c){
			return a*b*c;
		}
	}
}


console.log(multi(5)(5)(2));
