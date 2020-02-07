 /*С помощью цикла for с пустым телом сформируйте строку, представляющую из себя 
 ряд Фибоначчи: 0 1 1 2 3 5 8 13... 
for (var  str = '',a=1, b=1, i = 0; i <25 ; i++ , c = a+b, a=b, b=c, str+=c+" ") { 
}

console.log(str);*/
for (var  a=0, b=1, str =a+' '+b ,i = 0; i<25 ; i++ ,c = a + b, a=b, b = c, str+=" "+c) { 
}

console.log(str);