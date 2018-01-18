// 方法


	
	function Product(){
		// 名称
		this.name = ''
		// 原价
		this.price = 0
		// 团购价
		this.youhuijia = 0
		// 描述
		this.des = ''
		// 图片
		this.images = [{small:'',big:''},{small:'',big:''},{small:'',big:''}]
		Object.defineProperty(this,'name',{
			value:'wwww',
			writable:false,
		});
		Object.defineProperty(this,'youhuijia',{
			get:function(){
				return youhuijia = 300
			},
			set:function(value){
				if(value>6000){
					alert('大于6000了')
				}
				
			}
		})

	}
	Product.prototype = {
		// 绑定基本信息
		bindBasic:function(){
			$('#pname').html(this.name)
		},
		bindPrice:function(){
			$('#sprice').html(this.price)
		},
		bindYouhuijia:function(){
			$('#youhuijia').html(this.youhuijia)
		},
		bindDes:function(){
			$('#des').html(this.des)
		},
		// 绑定图片列表
		bindImages:function(){

			var str = ''
			for (var i = 0; i < this.images.length; i++) {
				
				str+='<img src="" title="'+this.images[i].small+'" class="bigimg">'
				str+='<img src="" title="'+this.images[i].small+'" class="bigimg">'
				str+='<img src="" title="'+this.images[i].small+'" class="bigimg">'

			}
			$('#imgdiv').html(str)

		}

	} 

