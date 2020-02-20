/* 

5. Создайте объект, описывающий html-разметку. 
Напишите функцию, которая добавляет разметку в произвольный контейнер на странице.

*/




methods=[
	{article:[
			{
			teg:'h1', 
			content:'Array.prototype.every()'
			},
			{
			teg:'p',
			content:'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.'
	}]},
	{article:[
			{
			teg:'h1',
			content:'Array.prototype.some()'
			},
			{
			teg:'p',
			content:'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.'
	}]},
	{article:[
		{
		teg:'h1',
		content:'Array.prototype.reduce()'
		},
		{
		teg:'p',
		content:'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.'
	}]},
	{article:[
		{
		teg:'h1',
		content:'Array.prototype.reduceRight()'
		},
		{teg:'p',
		content:'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.',
	}]}]


function buildTree(data, target = 'body') {
	data.forEach(item => {
		const additem = $(`<${item.teg}>`)
						.appendTo(target)
						.text(item.content);
		
		if ('article' in item && item.article.length) {
			buildTree(item.article, additem);	
		}
	});
}

buildTree(methods, '.conteiner')
