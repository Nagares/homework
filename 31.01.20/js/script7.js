
 var name =prompt('What\'s your name', 'Lopke');

if (name==Number(name)){
	alert('try again')
} else{
switch (name) {
	case "NaN": 
	case "undefined":
	case "null":  
	case " ": alert('try again'); break;
	default: alert ('What\'s up ' + name);}
}