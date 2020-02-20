/*
Напишите функцию extraCube, которая принимает в качестве параметра или число,
или массив числовых значений и возвращает либо куб числа, либо массив кубов,
в зависимости от типа входящего параметра (typeof).
Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.

*/

console.log(extraCube([0, 1, 2, 3],6))




function extraCube(n,y=3){
	console.log(typeof(n))

	if( typeof(n) === typeof([]) ){
		let newarr= [];

		for(let i=0; i<n.length; i++){

			newarr[i] = isMathpowfun( n[i], y )			

		}

		return newarr

	}

	return isMathpowfun( n,y );

}



function isMathpowfun(base,exponent=3){

if(exponent==1) return base

return  base * isMathpowfun( base, exponent - 1 );

}

