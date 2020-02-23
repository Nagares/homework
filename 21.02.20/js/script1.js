/*

Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное


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
		return sumxy
	},
	multi(){
		let multiyx = this._x * this._y;
		return multiyx
	},
	diff(){
		let diffyx = this._x - this._y;
		return diffyx
	},
	div(){
		let divyx = this._x / this._y;
		return divyx
	}

}

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.multi());
console.log(calculator.diff());
console.log(calculator.div());