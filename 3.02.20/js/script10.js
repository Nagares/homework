/*Найдите и исправьте ошибки в коде:
Поиск элементов DOM (объектной структуры документа) с использованием нативных методов JS

Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css, задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:

Таблица расположена посредине страницы, расстояния между ее ячейками нет
Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
Фон в ячейках первых шести строк –#106B63
Фон в ячейках строк 7-9 –#E7C610
Фон в ячейках строк 10-12 – #C64A08
Фон в ячейках строк 13-15 –#B43100
Фон в ячейках всех оставшихся строк –#102173
У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет

*/
//признаюсь честно это я делала через codepen, так как сяюда не смогла подключить jquery.
var $none=$('table:first tr');
var $table=$('#root table');
$('table:first tr:lt(6)').css('backgroundColor','#106B63');
$('table:first tr:nth-child(7)').css('backgroundColor','#E7C610');
$('table:first tr:nth-child(8)').css('backgroundColor','#E7C610');
$('table:first tr:nth-child(9)').css('backgroundColor','#E7C610');
$('table:first tr:nth-child(10)').css('backgroundColor','#C64A08');
$('table:first tr:nth-child(11)').css('backgroundColor','#C64A08');
$('table:first tr:nth-child(12)').css('backgroundColor','#C64A08');
$('table:first tr:nth-child(13)').css('backgroundColor','#B43100');
$('table:first tr:nth-child(14)').css('backgroundColor','#B43100');
$('table:first tr:nth-child(15)').css('backgroundColor','#B43100');
$('table:first tr:gt(14)').css('backgroundColor','#102173');
$('table:first').css('border-collapse','collapse');
$ ('table:first').css({
	margin:'auto'});
$('table:first  td').css({
   height:'10px',
   width:'10px',
   border:'1px solid #000'
});
$('div').css('backgroundColor','#eee');
$('table:first tr  td .none').css({
   backgroundColor:'transparent',
   border:'none'
});
$  ('tr').children('.none').css({
   backgroundColor:'#000',
   border:'none'});
