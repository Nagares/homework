/*
10. Level Up
Используя дескрипторы свойств создайте объект для описания местности со свойствами latitude, 
longitude и title. Свойства latitude и longitude могут содержать только цифры, 
все, что будет попадать в эти поля, становится числом. 
Если при преобразовании к числу получается NaN, 
то в качестве значения записывается null. То же для поля title, 
только все данные будут преобразовываться к строке.

*/

//debugger 
let plase = {};



Object.defineProperties(plase, {
  latitude: {
  	 get: function() {

    	 return this.latitud 
    },

    set: function(x) {
    	
   		if (isNaN(+x)) return  this.latitud = null

    	 return this.latitud = +x
    }
  }
});



Object.defineProperties(plase, {
  title: {
   get: function() {
    	return this.titl 
    },
   set: function(x) {
    	return this.titl = `${x}`
    }
    
  }
});


plase.title='piniatta';
plase.latitude='5'


console.log(plase.title)
console.log(plase.latitude)