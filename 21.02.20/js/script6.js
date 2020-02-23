/*

6. “Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText.
 Метод appendTo с помощью jQuery добавляет абзац в контейнер, 
 переданный в параметре метода. Метод appendText может дописывать текст в добавленный элемент.
  Создайте массив строк и запустите цикл по этому массиву. 
  С периодичностью, определенной в свойстве delay, 
  в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива. 
  Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву. Live preview


*/


let mashin = {
	_delay : 2000,
	appendTop(){
		const p = $('<p>').appendTo('.container');
	},
	appendText(mes){
		
		console.log (mes)
		let getmes = $('.container p').last().html(mes);
			
		

	},
}



var country = ['name','Ukraine','language','ukrainian','capital','Kyiv','population','area']

for (let i = 0; i < country.length; i++) {
	setTimeout(function() {
	mashin.appendTop();
	mashin.appendText(country[i])
	}.bind(this),mashin._delay*i)		
}


