/*
4. Создайте функцию hello(), которая выводит приветствие пользователю. 
Создайте два объекта, содержащие поля firstname, lastname. 
Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.

*/

function hello(){
	alert('Hello, '+ this.firstname+ ' ' + this.lastname )
}

let user1 = {
	firstname : 'Pedro',
	lastname: 'Holis'
}

let user2 = {
	firstname: 'Lopke',
	lastname: 'Mortine'
}

hello.call(user1);
hello.call(user2);

