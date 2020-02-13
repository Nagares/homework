 /*Level Up
Создайте структуру(ы) для хранения данных, 
из которых можно составить таблицу соответствия значениям переменной (value) 
в логическом контексте (истина, ложь). Изобразите на странице.
*/

let arr = [true,false,1,0,'','1','0',null,undefined,{},[],NaN];
let man =[5,4,,2,1,'Иванов','Петров','', ];
let woman=['1','0',null,undefined,{},[],NaN,'','Вин Дизель', ,'Чубайс'];
let mas=[arr,man,woman];
let $table = $('<table>').appendTo('.item');

/*
'это быkа попытка поймать название но у меня ничего не вышло'

for (let i = 0; i < 1; i++) {
	let $tr = $('<tr>').appendTo($table);



	for (let key in mas[i]) {
		
			let u=[''+mas[i][key]]
         console.log(u)
		$('<td>')
			.appendTo($tr)
			.text(u)
		    .css({'background':'#999'})}
	
		}	


*/

for (let i = 0; i < mas.length; i++) {
	let $tr = $('<tr>').appendTo($table);



	for (let key in mas[i]) {
		if ((Boolean(mas[i][key])===false)||(mas[i][key]===undefined)){
		$('<td>')
			.appendTo($tr)
		    .css({'background':'#f1c7c2',})}
		else {  $('<td>')
			.appendTo($tr)
		    .css({ 'background': '#bbe1ce'})
		}	
}}
