

// function img(){
// 	a = '1'
// 	b = '2'
// 	c = '3'
// 	d = '4'
// 	e = '5'
// }

// img.prototype = {
// 	bindBasice:function(){
// 		this.a = a + b


// 	}
// }
// var imgs = new img()
// imgs.a = 



//如何画一个全家福


//1、画板
//2、笔


//一家五口				爷爷
//						爸爸 
//						 我

function Person(name)
{
	this.name = name || '无名';
	this.age = '30'
	this.head = '一头乌黑的头发'
	this.body = '健康的身体'
	this.foot = "健步如飞的"

	this.show = function(){
    	document.write("一个名为\"" + this.name + "\",大约" + this.age +"岁的人,"+"拥有"+this.head+"，和"+ this.body+",");
 	 }
}

Person.prototype.play = function(game) {
	this.show()
	document.write(this.foot + game+"</br>");
};

function Grandfather(){
    Person.call(this);
    this.name = "爷爷"
    this.age = "70"
    this.head = "满头白发"
    this.body = "多病的身躯"
    this.foot = "漫步阑珊的"

    this.show = function(){
    	document.write("爷爷住院了，不能");
 	 }
}
Grandfather.prototype = new Person();

function Father(){
    Person.call(this);
    //this.name = "父亲"
}
Father.prototype = new Person();

function Son(){
    Person.call(this);
    this.name = "儿子"
    this.age = "12"
    this.head = "满头锡纸烫"
    this.body = "敏捷的身躯"
    this.foot = "轻巧的步伐"
}
Son.prototype = new Person();


var yeye = new Grandfather()
yeye.play("打门球")

var daddy = new Father()
daddy.play("打篮球")

var son = new Son()
son.play("踢足球")