/*Level Up
Сформируйте строку в виде треугольника-елочки:

.....#.....
....###....
...#####...
..#######..
.#########.
###########
*/


for (var q='',g=1, i=5 , j='.'; i>(-1); i--, g+=2 ) {
	
	for (var y=0, r=i ;y<r; y++)
	 {q+=j;};


	for (var  w=0, k='#' ; w<g; w++){
		q=q+k
	}

	for (y=0, r=i ;y<r; y++)
	 {q+=j;};

	 q+='\n';  
}
console.log(q);

