 /*Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. 
 С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, 
 и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, 
 которое также запрашивается из prompt.
*/


var person={ 
height: '170 cm',
weight: '65 kg',
age: 34,
children: 'no',
pet: 'cat',
hobby: 'football',
name: 'John',
surname: 'Dou',
};

for(let k, i=1; i>0; i++){
k=prompt('Проверите наличие свойства в person','name');
if(k===null) {break};
if (  k in person) {
	let l=person[k];
	alert(k+' '+l);
}
else {person[prompt('Такого свойства нет, добавте его','city')] = prompt('Добавте значение для этого свойства','Kharkiv');};
}
console.log(person);


/*Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...), 
не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.*/

var phone={ 
brand:'',
model:'',
resolution:'',
color:'',
};

 phone.brand= prompt('Добавьте значение для phone - brand','iphone');
 phone.model= prompt('Добавьте значение для phone - model','5C');  
 phone.resolution= prompt('Добавьте значение для phone - resolution','412 x 732');
 phone.color= prompt('Добавьте значение для phone - color','black');
for(let  i=1; i>0; i++){
	if((confirm('Есть что добавить к phone?'))===true){
	phone[prompt('Добавьте свойства для phone','made in')] = prompt('Добавьте значение','Ukrain');	
	}
	else{break}
}
console.log(phone);
person.phone=phone;
console.log(person);


/*  Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update.
  В зависимости от указанного действия, удаляйте или добавляйте (редактируйте)
  свойство в объекте персоны (которая уже имеет телефон). 
  Какое именно свойство удалять или добавлять - также читается из prompt. 
  Какое значение будет у добавленного свойства - тоже берется из prompt. 
  При нажатии на Отмена при появлении prompt редактирование person заканчивается.
 И обновленные данные распечатываются в консоли.*/

 for (let k, i = 1; i>0; i++) {
	k=prompt('Это редактор person, чтобы удалить свойства впишите delete, update-редактируйте свойства.'+'\n'+'Для выхода нажмите Отмена','')
	
	if (k=='delete') {delete person[prompt('Какое значение вы хотите удалить из person?','')];
		alert('Операция прошла успешною')}
	if(k=='update') person[prompt('Какое значение вы хотите редактировать в person','')] = prompt('Добавте новое значение','');	
	if(k===null)break;
 }
 console.log(person);

 /*Динамически (скриптом) создайте HTML элемент <dl>.
  Переберите в цикле (for..in) сгенерированный ранее объект person, 
  добавляя dt - для имени свойства и dd - для значения свойства 
  (работа с DOM - с использованием методов Native JS).
*/

let container = document.querySelector('.container');
let dl=document.createElement('dl')
container.appendChild(dl);

for (let key in person) {

	let dt = document.createElement('dt');
	let dd = document.createElement('dd');
	dt.innerText = key;
	dd.innerText = person[key];
	dl.appendChild(dt);
	if(key == 'phone'){
		let container_phone = document.querySelector('.container');
	    let dl_phone=document.createElement('dl')
	    container_phone.appendChild(dl_phone);
		for (let key in phone){
		let dt_phone = document.createElement('dt');
	    let dd_phone = document.createElement('dd');
		dt_phone.innerText = key;
		dd_phone.innerText = phone[key];
		dl_phone.appendChild(dt_phone);
		dl_phone.appendChild(dd_phone);}}
	else{dl.appendChild(dd);}

	
}
