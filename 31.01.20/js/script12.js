var x = prompt('x', 0);
var error = null;

switch (x) {
    case '0': error = 'На ноль делить нельзя';break;
    case '1': error = 'На единицу делить бессмысленно';break;
    case 'NaN': error = 'Не математическая операция';break;
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}
