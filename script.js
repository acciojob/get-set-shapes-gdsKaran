//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height =  height;
	}

	get RecWidth(){
		return this.width;
	}

	get Recheight(){
		return this.height;
	}
	
	getArea(){
		return this.width * this.height;
	}
	
}

class Square extends Animal {
	constructor(side){
		super(width, height);
		this.side = side;
	}
	getPermeter(){
		return 4 * this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
