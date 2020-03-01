/*

1. Расширьте глобальный объект Date методом getWeek, 
с помощью которого можно узнать номер недели в году.
А также добавьте в прототип метод getQuarter - для получения номера годового квартала


*/



let d = new Date();


Date.prototype.getWeek = function (){

	let time = new Date();
	let oneweek= 3600000*24*7;
	let nowtime =(new Date(time.getFullYear(),0,1)).getTime();
	let yerstime =time.getTime();
	let howhour =  yerstime - nowtime ;
	let weeknow = Math.trunc(howhour / oneweek+1);

	return weeknow

}





Date.prototype.getQuarter = function(){
let month = new Date();

let x = month.getMonth();


if( x<6 ){ x < 3 ?   x= "Quarter 1 " : x= "Quarter 2"}
else { x < 9 ? x= "Quarter 3 " : x= "Quarter 4"}
return x
}


console.log(d.getQuarter())