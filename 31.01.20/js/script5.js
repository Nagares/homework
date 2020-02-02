var x = prompt('Что за маршрутка едет?', '220');

switch (x) {
	case '7': 
	case '225': 
	case '255':alert('Это твоя, едь домой'); break;
	
	default: alert('Жди дальше');
}