/*
Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

*/

var tabl=[];
for(let k=1; k<=10; k++){

	let arr=[];
	for(let y, z=1; z<=10; z++){
		y= k+'*'+z+'='+(k*z);
		arr.push(y);
		console.log(arr);
	}
	tabl.push(arr);
	
}
	  
console.log(tabl);