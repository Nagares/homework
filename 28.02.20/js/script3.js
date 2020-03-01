/*
 В прототипном стиле напишите класс Warrior для создания игроков “файтинга”.
 Игроки должны иметь свойство health - которое определяет базовые боевые возможности игрока 
 (выносливость), и power - сила удара. Оба свойства определяются при создании экземпляра класса. 
 Также игрок должен иметь метод hit для нанесения удара другому игроку. 

 При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, 
 который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
 Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.

 Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями. 
 И напишите пример боя, используя соответствующие методы и свойства
*/




function Warrior(health, power, stamina) {
	this._name = prompt('Введите имя героя')|| 'Sombody';
	this._health = health;
	this._power = power;
	this._stamina = stamina;
	this._youDei = false;

	addMes = function(mes){
	let p = document.createElement('p');
			 document.body.append(p);
			 p.append(`${mes}`)	
	}

	this.hit = function(user) {
		if(this._stamina == 0) {

			 addMes(`${this._name} не может нанесли удар, запас энергии ${this._stamina}`) 
			 return

		} else {
				if( user._health > 0 ) {
				if(user._health >= this._power){

					let crit = 0;

					if( Math.random() > 0.8 && this._stamina > 1) {
						crit = Math.trunc(Math.random()*10-1);
						this._stamina--;

					}

					
					user._health = user._health - this._power - crit;
					
					this._stamina--;
					user._stamina++;

					
    				addMes(`${this._name} нанес удар силой ${this._power + crit}  ${user._name}.`+ '\n'+` У ${user._name} осталось ${user._health} здоровья`);

    				if ( 0 >= user._health ) { 

    						confirm(`${this._name} победил`);
    						user._youDei = true; 
    				}
    			}

				else {
					confirm(`У пративника ${user._name},осталось ${user._health} здоровья, пощадить его?`) ? alert(`${this._name} пощадил ${user._name}`) :  alert(`${this._name} жестоко расправилясь с ${user._name}`);
					user._youDei = true; 
				}
			}
		}
	}

	this.heal = function(){
		if( this._stamina < 2 ) {

			 addMes(`${this._name} не может лечиться, запас энергии ${this._stamina}`)

		} else {

		this._health+=5+Math.trunc(Math.random()*10-1);

		addMes(`${this._name} лечиться, запас здоровья увеличен на ${this._health}`);

		this._stamina-=2
	}


	}
};


let user1; 
let user2 ;


switch( prompt('Выбериле героя для игрока 1'+ '\n' +'1 - Tитан '+ '\n' +'2 - Маг '+ '\n' +'3 - Ельф ')) { 

	case '1':user1 = new Warrior(25,2,3); break;
	case '2':  user1 = new Warrior(10,5,5); break;
	case '3': user1 = new Warrior(15,4,4); break;
	default : confirm('Не такого нет '); break;
};


switch( prompt('Выбериле героя для игрока 2'+ '\n' +'1 - Tитан '+ '\n' +'2 - Маг '+ '\n' +'3 - Ельф ')) { 

	case '1': user2= new Warrior(25,2,3); break;
	case '2': user2 = new Warrior(10,5,5); break;
	case '3': user2 = new Warrior(15,4,4); break;
	default : confirm('Не такого нет '); break;
};



while ((user1._youDei === false) && (user2._youDei === false) ) {

	
	switch( prompt(`Выберите действие для ${user1._name}` + '\n' +'1 - удар '+ '\n' +'2 - востановить здоровье ')) { 
		case '1': user1.hit(user2); break;
		case '2': user1.heal(); break;
		default : confirm('Не такого нет '); break;
	};

	if(user2._youDei === false ){
	switch( prompt(`Выберите действие для ${user2._name}`+ '\n' +'1 - удар '+ '\n' +'2 - востановить здоровье ')) { 

		case '1': user2.hit(user1); break;
		case '2':  user2.heal(); break;
		default : confirm('Не такого нет '); break;
	}
	};

};



