 /*

 Найдите и исправьте ошибки в коде:

unction foo() {
	function bar(a) {
		i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21


*/

function foo() {


	function bar(a) {
		let i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
	return a
}

foo(); // 3 5 7 9 11 13 15 17 19 21
