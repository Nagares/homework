/* 

5. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv.
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида 
‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора.
*/




let calculator = {
	_error(){
		alert('it\'s ancorekt'); 
		return
	},
	read(){

		let x = +prompt('Write first number', '');
		let y = +prompt('Write twice number', '');
		console.log(x +" "+ y)
		if(isNaN(y)) this._error();
		if(isNaN(x)) this._error();

		calculator._x = x;
		calculator._y = y;
		
	},
	sum(){
		let sumxy = this._x + this._y;
		calculator._sumxy = sumxy;
		return sumxy
	},
	multi(){
		let multiyx = this._x * this._y;
		calculator._multiyx = multiyx;
		return multiyx
	},
	diff(){
		let diffyx = this._x - this._y;
		calculator._diffyx = diffyx;
		return diffyx
	},
	div(){
		let divyx = this._x / this._y;
		calculator._divyx = divyx;
		return divyx
	}

}



let som = {
	_x: calculator._x,
	_y: calculator._y,
	getSum(){
		alert( `${_x} + ${calculator._y}= ${calculator._sumxy}` )

	},

 	getDiff(){
	alert( `${calculator._x} * ${calculator._y}= ${calculator._multiyx}` )

 	},
 	getMulti(){
	alert( `${calculator._x} - ${calculator._y}= ${calculator._diffyx}` )

 	}, 
 	getDiv(){
	alert( `${calculator._x} / ${calculator._y}= ${calculator._divyx}` )

 	}
}


console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.multi());
console.log(calculator.diff());
console.log(calculator.div());
som.getSum()
som.getMulti()
som.getDiff()
som.getDiv()


