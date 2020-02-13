/*
Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. 
Разбейте ее на массив слов, и переставьте слова в правильном порядке
 с помощьюлюбых методов массива (indexOf, splice ...). 
Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

*/


let text='Как однажды Жак звонарь - сломал городской фонарь';
arrtext=text.split(' ',);
console.log(arrtext);
let x=arrtext.splice(arrtext.indexOf('-'),1)[0];
arrtext.splice(arrtext.indexOf('звонарь'),0,x);
let y=arrtext.splice(arrtext.indexOf('городской'),1)[0];
arrtext.splice(arrtext.indexOf('сломал'),0,y)[0];
text=arrtext.join(' ',)
console.log(text);
