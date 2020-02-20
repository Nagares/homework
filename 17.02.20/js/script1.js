/*

Напишите функцию setComment с параметрами: date, message, author. 
Дата и текст сообщения - обязательные параметры, 
если какой-то из них или оба отсутствуют,
 то выполнение функции должно обрываться,
а пользователю выдаваться предупреждение (alert) о том,
что данные переданы некорректно. Параметр author - опциональный,
но должна происходить проверка: если параметр не передан,
то вместо него подставляется значение ‘Anonymous’.
Функция распечатывает на странице текст в формате: 
<имя_автора>, <дата>
<текст_сообщения>

*/


function setComment(date,message,author='Anonymous'){
	if(date && message === undefined) return  alert( 'ancorect' );

	const $newdiv = $('<div>')
					.addClass('comment')
					.appendTo('.conteiner')
					.css({
						border: '1px solid black',
						padding:'15px',
						
					});
	const authors = $(`<span>`)
					.appendTo('.comment')
					.text(author +', ')
					.css({
						'font-weight': '600',
					});
	const dates = $(`<span>`)
					.appendTo('.comment')
					.text(date)
					.css({
						'font-weight': '600',
					});;
	const massages = $(`<div>`)
					.appendTo('.comment')
					.text(message)
					.css({
						width: '100%',
						property2: 'value2'
					});

}


let datas = '05.09.12';
let name = 'Pedro';
let message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita cumque quas labore, quo! Nostrum esse voluptatem iure, ad tenetur, ipsum dolorem cupiditate fugiat, aspernatur quaerat ipsa velit necessitatibus eligendi. Deleniti.';
setComment( datas,message,name )



