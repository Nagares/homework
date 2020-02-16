
/*
1. Создайте функцию p и a, которые будут служить короткими именами для prompt и alert 
соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское 
сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить 
коротким именем для debugger, то есть запускать процесс отладки. 
Используя эти псевдонимы получите значение из prompt и отобразите в alert. 
А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.

*/


var a = alert;
var p = prompt;

	function d() {
 		debugger
 	} 


d()
var x = p( 'What\'s up?', 'OK' );
a( x );




/*
2. спользуя стрелочный синтаксис ES6, 
напишите функцию max (аналог Math.max),
 которая сравнивает два числа и возвращает большее:
*/

 function max( x,y ){
 	

 	if( x < y ) return y;
 	if( x > y ) return x;
 	else { return " Числа равны" }
 }

alert( max( 5,-6 ))



/*
3. Используя синтаксис ES5, напишите функцию-аналог Math.min(). 
Функция принимает любое количество чисел и возвращает меньшее из них:
*/



function masmin( ... min ){
   
	var item = min[0];

	for(let i=2; i < min.length; i++){
	 let k = min[i-1];

		if( k >= min[i] ) continue;
	 	if( k <= min[i] ){

	 		if( k <= item) item = k;
	 	}
	 
	}
return item
}

console.log(masmin(2,4,5,7,8,9,0,5,-5,5))



/*
4. Изучите перебирающие методы массивов: forEach, filter, map. 
Создайте массив объектов users (~10 объектов), 
каждый объект имеет поля firstname, lastname, age с разными значениями, 
у некоторых есть поле middlename. Используя встроенные функции массивов:

	a.Отфильтруйте пользователей младше 18 лет
	b.Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
	c.Сформируйте новый массив, который содержит только полное имя пользователей
	


*/


let user1 = {
		firstname: 'Jon',
		lastname: 'Corn',
		age: 35,},
	user2 = {
		firstname: 'Jond',
		lastname: 'Cornd',
		age: 21,
		middlename: 'Hun',},
	user3 = {
		firstname: 'Jonld',
		lastname: 'Cor',
		age: 41,},
	user4 = {
		firstname: 'Jonpo',
		lastname: 'Corli',
		age: 11,},
	user5 = {
		firstname: 'Jondo',
		lastname: 'Como',
		age: 61,
		middlename:'Opiym',}
	user6 = {
		firstname: 'JD',
		lastname: 'Cornd',
		age: 32,},
	user7 = {
		firstname: 'Joi',
		lastname: 'Condor',
		age: 33,},
		
	user8 = {
		firstname: 'Jorem',
		lastname: 'Cat',
		age: 34,},
	user9 = {
		firstname: 'Jem',
		lastname: 'Cbi',
		age: 7,},
	 user10 = {
		firstname: 'Jon',
		lastname: 'Corbon',
		middlename: 'Houp',
		age: 38,},
	user11 = {
		firstname: 'Klon',
		lastname: 'Klon',
		age: 64,};

let	users=[ user1,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11]

 let x=dofullName(users);
 console.log( fullName(x) )

	function dofullName(mas){

		for (let i = 0; i < mas.length; i++) {
			let mas = users[i];
		
			let fullName = [];
		
			if ('lastname' in mas) fullName.push(mas.lastname);
			if ('firstname' in mas) fullName.push(mas.firstname);
			if ('middlename' in mas) fullName.push(mas.middlename);
	
			delete mas.lastname;
			delete mas.firstname;
			delete mas.middlename;
	
			mas.fullName = fullName.join(' ');
		}

		return mas
	}

	function dellyung(mas){

		for ( let i = 0; i < mas.length; i++ ) {

			let mas1 = mas[i];

			if ( mas1['age'] < 18 ) delete mas.splice(i,1);
			console.log( mas1['age'])
	
		}

		return mas	
	}


function  fullName(mas){
	let full = [];

 for ( let i = 0; i < mas.length; i++ ) {

			let mas1 = mas[i];
		   
			full.push(mas1.fullName);
			
	
		}

		return 	 full

	}

/*



5. Не используя методы массива, напишите функцию аналог метода shift. 
Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.


*/

function isShift(mas){
	let newmas = [];

	for( let i=0; i<( mas.length )-1; i++ ){
		newmas[i] = mas[i+1]
	} 

return newmas

}

let oldmas = [4,5,3,6,4,2,1,0];

console.log(oldmas);
console.log(isShift(oldmas))






/*
 6. Не используя методы массива, напишите функцию аналог метода массива push.
 Функция добавляет в конец переданного в параметре массив
 произвольное количество элементов.

*/

let somemas = ['lol','koko','tea'];
console.log(somemas)

function isPush( arr,...mas ){
	console.log(mas)

	for( let j=0, i=arr.length; j<mas.length; i++, j++ ){
		arr[i] = mas[j];

	}
	return arr
}
  
  console.log( isPush(somemas,4,6,7,9,6,3,7) );
 

/*

  7.  Напишите функцию аналог метода ES6 Object.assign(). 
  Первый параметр функции - целевой объект, 
  поля которого будут изменены или расширены. 
  Остальные параметры - объекты-источники, 
  полями которых будет расширяться целевой объект.
  */


var user1 = { name: 'John', age: 26, position: 'developer', company: 'Google' };
var user2 = { a: 1, b: 2, c: 3 };

console.log( isObject( {}, user1 , user2 ) )

  function isObject( target,...sources ){
  	let obj = target;

  	for( let i=0; i < sources.length; i++ ){
  		for( let key in sources[i] ){
  			obj[key] = sources[i][key];
  		}

  	}
  	return obj
  }


 
/*
 8. Напишите функцию ask с тремя параметрами: question, defaultValue, callback. 
Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. 
Что делать с полученным значением - определяет callback

*/
 

 console.log( ask( 'How old are you?', '10',alert ) );


function ask(question, defaultValue='10', callback) {
    let x = callback;

	if(( question = prompt('Question please', )) ==='' ) question = alert( 'You don\'t write anything ' ); 
    
    x( question +' it\'s '+defaultValue );

};


/*
9.Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом,
находит максимальное и минимальное и возвращает их
*/



var result = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";

function isNumber(x){

	let arr = ( x.split(/ \s*/) );
	
	let y = Math.max.apply(null, arr) +' '+Math.min.apply(null, arr);
 
 	return y ;

}

console.log( isNumber(result) )

/*
10. Напишите функцию checkNumber, 
которая получает на вход как параметр массив любых значений и возвращает true, 
если все элементы - числа, и false - если в массиве хотя бы  одно не число. 
Для проверки массива используйте метод every или some

*/
console.log( checkNumber(1, 2, '3', '6') )
console.log( checkNumber(1, 2, '3', 'd') )

function checkNumber(...mas){
	
	return mas.every(Number);

}
