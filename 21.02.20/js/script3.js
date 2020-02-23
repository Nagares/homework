/*
Создайте объект array с методом инициализации начального значения массива, 
c методами добавления, удаления последнего элемента массива 
и методом возврата текущего состояния массива. 
Используйте концепцию chaining для создания цепочки вызовов.
*/


let array = {

setValue(x){
array._arr = x;
return this 
},
push(x){
this._arr.push(x);
return this
},
pop(x){
return this._arr

}};


let h=array.setValue([1])
	.push(5)
	.push(5)
	.pop();

console.log(h)