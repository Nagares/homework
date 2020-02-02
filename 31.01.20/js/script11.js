
 var x=new Date(), day=x.getDay(), lang=prompt('What\'s the langwich', 'ru'), result;
if (lang=='ru') {
switch (day) {
	case +"1": (result='Пн'); break;
	case +"2": (result='Вт'); break;
	case +"3": (resultn='Ср'); break;
	case +"4": (result='Чт'); break;
	case +"5": (result='Пт'); break;
	case +"6": (result='Сб'); break;
	case +"0": (result='Вс'); break;
}};
  if (lang =='en') {
 switch (day) {
	case +"1": (result='Mn'); break;
	case +"2": (result='Tu'); break;
	case +"3": (result='Wn'); break;
	case +"4": (result='Th'); break;
	case +"5": (result='Fr'); break;
	case +"6": (result='St'); break;
	case +"0": (result='Sn'); break;
}}
alert('It\'s ' +result) ;