/*
Создайте объект dates для хранения дат.
 Первая дата – позавчера. 
 Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

*/

var dates={
	one:new Date(2020,1,7), 
	two:new Date(2019,1,7),
}

var dayx=new Date(prompt('Введите дату','yyy-MM-dd'));
console.log(dayx);
if(((dayx <= dates['one'])&&(dayx >= dates['two']))==true) {alert('Ура мы в диапазоне!')}
	else{ alert('О нет мы не попали в диапазон!')

}
console.log(dates);
 