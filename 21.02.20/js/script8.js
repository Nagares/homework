 /*

 8. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:


function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, 
чтобы ее вызов возвращал отформатированное имя пользователя


userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().


*/


let user = {
	name : 'Pedro',
	lastname: 'Holis'
}


function format(start, end) {
    console.log(start + this.name + end)
}
/*
let userFormat = format.bind(user)

userFormat('<<<', '>>>');

*/


function format(start, end) {
    console.log(start + this.name + end)
}

let userFormat = function (start, end) {
   format.apply(user, [start,end])
}

userFormat('<<<', '>>>')
