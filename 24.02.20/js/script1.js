/*

ООП в функциональном стиле

*/



function Figure( x,y,color ){
	 this._x = x;
	 this._y = y;
	 this._color = color;
};


function Line( x, y, x1, y1, color ){ 

 Figure.apply(this, [x, y,color] )
 this._x1 = x1;
 this._y1 = y1;

 this.draw = function(){
	 	let ctx = $('.canvas')[0].getContext('2d')

	 		ctx.beginPath();
	 		ctx.strokeStyle = this._color;
			ctx.moveTo(this._x, this._y);
			ctx.lineTo(this._x1, this._y1);
			ctx.lineTo(this._x1-this._y1, this._y1+this._x1*Math.random()*8);
			ctx.stroke(); 
	 		

	 }

};



function Circle( x, y, r, color ){

	Figure.apply(this, [x, y,color] )
	this._r = r;


	this.draw = function (){
	let ctx = $('.canvas')[0].getContext('2d');

		ctx.beginPath();
       	ctx.fillStyle = this._color;
   		ctx.arc(this._x, this._y, this._r, 0, Math.PI*2, true);
    	ctx.closePath();
    	ctx.fill();
 	}
};



function Rect( x, y, w, h, color ){
	Figure.apply(this, [x, y,color] )
	this._w = w;
	this._h = h;

	this.draw = function(){
		let ctx = $('.canvas')[0].getContext('2d');
			
       		 ctx.fillStyle = this._color;
       		 ctx.fillRect (this._x,this._y,this._w,this._h);

      		
     };

     this.clean = function(contexts){
     	let context = contexts;
     		let ctx = $('.canvas')[0].getContext('2d');
     		
     		ctx.clearRect(0, 0, context.getHeight(),context.getWidth());
     			
     }

};


function Canvas(){
	
	this.newCanvas = function(){
		const addcanvas = $(`<canvas>`)
						.addClass('canvas')
						.appendTo('body');

	};

	this.getHeight = function (){
			return this._height
		}

	this.getWidth = function (){
			return this._width
		}


	this.sizes = function(height,width){
		this._height = height;
		this._width = width;

		$(`.canvas`).css({
							'height': `${this._height}px`,
							'width': `${this._width}px`,
						})
	}
}

let canva = new Canvas()

canva.newCanvas();
canva.sizes(660,680);

let col = (Math.random()).toFixed(1)*10-2



let rect = new Rect(143,85,15,15,`#51${col}`);


let circle0 = new Circle(150, 75, 16,`#51${col}`);
let circle1 = new Circle(150, 105, 10,`#51${col}`);


let line0 = new Line(143,88,100,60, 'blak');
let line1 = new Line(143,92,90,70, 'blak');
let line2 = new Line(143,94,80,80, 'blak');
let line3 = new Line(143,96,70,90, 'blak');

let line4 = new Line(157,88,190,60, 'blak');
let line5 = new Line(157,92,180,70, 'blak');
let line6 = new Line(157,94,170,80, 'blak');
let line7 = new Line(157,96,160,90, 'blak');

let line = [line0, line1, line2, line3, line4, line5, line6, line7];
let paint = [ rect, circle0, circle1, line];


anim()

function anim(x='10'){ 

for (var j = 0; j < x; j++) {
				
			setTimeout(function(){
				
				rect.clean(canva);

				for(let i=0; i < paint.length; i++){

					if( Array.isArray(paint[i]) ){
						let mas = paint[i];

						for(let i = 0; i<mas.length; i++){

						letDraw(mas[i]);

						}
					}

					letDraw(paint[i]);
				}
				
			}, 600 * j);

	}
setTimeout(function(){
	if( confirm('Dance again ?'))	return anim()	
		}, 600 * x);
}


function letDraw(x){
	return x.draw()
}




