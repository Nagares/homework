/*
2 .Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) 
   a) используя цикл
   b) используя рекурсию:

*/
function isMathpow(base,exponent=3){
	let y=1

		for (let i = 1; i <= exponent; i++) {
		y*=base}
	return y 
}


console.log(isMathpow(6))


function isMathpowfun(base,exponent=3){

if(exponent==1) return base

return  base * isMathpowfun( base, exponent - 1 );

}

console.log(isMathpowfun(6))
