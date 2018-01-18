$(function(){
	var product = new Product()
	product.name = 'ipad112'
	
	product.price = 8700
	// 团购价
	product.youhuijia = 6700
	// 描述
	product.des = 'sdfgegghgdg';
	// 图片
	product.images = [
		{small:'s1',big:'b1'},
		{small:'s2',big:'b2'},
		{small:'s3',big:'b3'}
	]
	product.bindBasic()
	product.bindPrice()
	product.bindYouhuijia()
	product.bindDes()
	product.bindImages()




	var cart = new Cart()
	
	cart.bindBasice()
	cart.bindList()

});
