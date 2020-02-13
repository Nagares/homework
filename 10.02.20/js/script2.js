/*
Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”


*/
let arr=['AngularJS','jQuery'];
console.log(arr);
arr.unshift('Backbone.js');
console.log(arr);
arr[arr.length]='React';
arr[arr.length]='Vue.js';
console.log(arr);
arr.splice(2,-1,'CommonJS');
console.log(arr);
alert('' +arr.splice(arr.indexOf('jQuery'),1) );
console.log(arr);