/*Найдите и исправьте ошибки в коде:

for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; i++) {
		console.log(i + j);
	}
}
*/

for (var i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(i + j);
	}
}
