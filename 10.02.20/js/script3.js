/* Создайте массив из минимум 100 случайных целых чисел. 
Переберите массив и сгенерируйте на его основе новый,
 который содержит только уникальные (неповторяющиеся) значения исходного массива. 
 Решите, используя только цикл for.

*/
	var arr=[];
	for(let i=0; i<100; i++){
		let item=+Math.random().toFixed(3);
		arr.push(item);
	}
	var newarr=[];
	for(let y=0; y<arr.length; y++){
		newarr[y]=arr[y];
	}
	console.log(newarr);

	for(let k=0;  k < arr.length ; k++){
	for(let j=k+1; j<arr.length; j++){
	newarr[k]==newarr[j]? newarr.splice(newarr[k],1): false; 
	}}

	console.log(newarr);


