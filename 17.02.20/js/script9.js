/*
9. Замыкания
 Используя замыкание, напишите функцию createTimer, 
 которая использует метод performance.now() 
 для получения текущей временной метки и служит для замера времени выполнения другого кода:

*/

function createTimer() {
	let x = performance.now();

	alert('1')

  return (function() {
  	let y = performance.now() 

      return y - x;
    })()
};


console.log( createTimer() )