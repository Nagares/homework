/*

6.  Дан массив, элементами которого могут быть любые значения, 
включая другие массивы. Напишите функцию flat, 
которая рекурсивно “разворачивает” переданный массив на глубину depth, 
указанную в параметре функции. 
По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан).


*/

var data1 = [1, 2, [3, 4, [5, 6]]];
var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];



console.log(delldepth(data1,2));
console.log(delldepth(data2,2));
console.log(delldepth(data1,3));
console.log(delldepth(data2,3));



function delldepth( mas,depth='1' ){
		let newarr = mas;
		for(let k=depth; k>0; k--){

			newarr = Array.prototype.concat.apply([], newarr);
			
		}
			return newarr
}




