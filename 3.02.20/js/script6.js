/*
Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, 
чтобы получилась шахматный узор. 
Для перевода строки используйте символ \n. 
Код должен поддерживать легкое изменение размеров доски.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#

*/

var q='',sizex=+prompt('Какая ширина доски?'), sizey=+prompt('Какая высота доски?');


for (var w=0; w > (-1); w++) {
q=q+'\n';
if (w==sizey){break};	
if((w%2)==0){for (var i=1, j='.', k='#'; i>0; i++ ) {
	if ((i%2)==0) 
		{q=q+j;}
	else 
		{q=q+k;};
	if (i==sizex) {
		i=(-1);}
}}
else{for (var i=1, j='.', k='#'; i>0; i++ ) {
	if ((i%2)==1) 
		{q=q+j;}
	else 
		{q=q+k;};
	if (i==sizex) {
		i=(-1);}
}}

}
console.log(q);
	  
