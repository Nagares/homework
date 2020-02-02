
 var x =prompt('Что будем делать?' +'\n'+'USD-UAH или UAH-USD', 'UAH-USD'), y, z, q;



switch (x) {
	case "USD-UAH":q=y=(+prompt('USD-UAH'+'\n'+ 'Введите сумму','101')*25.05+'UAH'); break;
	case "UAH-USD":q=z=(+prompt('UAH-USD'+'\n'+ 'Введите сумму','1')*0.04+'USD'); break;
	  
}
alert (q);