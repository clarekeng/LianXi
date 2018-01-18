function Cart(){
	this.sum = 0
	this.allPrice = 0
	this.products = []
}
Cart.prototype = {
	bindBasice:function(){
		$('.carsum').html(this.getSum())
		$('.allPrice').html(this.getAllPrice())


	},
	bindList:function(){
		var str = ''
		for (var i = 0; i < this.products.length; i++) {
			str+='<li><img src="" title="'+this.products[i].images[0].small+'" class="bigimg"></li>'
			
		}
		$('.ulList').html(str)

	},

	getAllPrice:function(){
		var sum = 0;
		for (var i = 0; i <this.products.length; i++) {
			sum +=this.products[i].allPrice
		}
		return sum;
	},
	getSum:function(){
		return this.products.length;
	}
	
	
}