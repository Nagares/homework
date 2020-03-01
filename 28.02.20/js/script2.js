/*
2 .
Добавьте в прототип конструктора Array метод,
позволяющий поменять элементы массива местами по индексам.
Метод изменяет исходный массив.

*/












	var arr1 = [2,1,3,5,4,0]
	
Array.prototype.chendgIndex = function( ...arr2 ) {
	let arr = this

	for( let x,y,k, i=0, j=0 ; i<=arr2.length; i++, j++ ) {
  
 		x = arr.indexOf( arr2[i] );
  		y = arr.indexOf( arr2[i+1] );
  		k = ( arr2[i] );

  			if (x !== -1 && y !== -1) {
 				 arr[x]= arr[y];
 				 arr[y]= k;
			}
	}

 return arr
}

console.log( arr1.chendgIndex(5,3,4,1) )

