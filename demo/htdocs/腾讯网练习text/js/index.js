window.onload = function(){
	// 顶部下拉选项卡开始
	(function option(){
		var oHelp = document.getElementById('help');
		var oMeum = document.getElementById('help_option');
		var aLi = oMeum.getElementsByTagName('li');
		var oHelpClass = oHelp.className;
		var left = oHelp.offsetLeft;
		oHelp.style.left = left+'px';
		oHelp.onmouseover = over;
		oHelp.onmouseout = out;
		oMeum.onmouseover = over;
		oMeum.onmouseout = out;
		function over(){
			oHelp.className = oHelpClass+' active';
			oMeum.style.left = left+'px';
		}
		function out(){
			oHelp.className = oHelpClass;
			oMeum.style.left = -10000+'px';
		}
		for (var i =0;i<aLi.length; i++) {
			aLi[i].onmouseover = function(){
				this.style.background = '#f4f8fd';
			}
			aLi[i].onmouseout = function(){
				this.style.background = 'none';
			}	
		}
	})();
	// 顶部下拉选项卡结束
	// 头部下拉选项卡开始
	var oSbr = document.getElementById("s_bar");
	var oSbrClass = oSbr.className;
	var oSitem = document.getElementById("s_item");
	var oUl = oSitem.getElementsByTagName("ul")[0];
	var oSpan = oSitem.getElementsByTagName("span")[0];
	var oLl = oSitem.getElementsByTagName("li");
	var oSitemClass = oSitem.className;
	var oLiClass = oLl.className;

	oSbr.onmouseover = function(){
		oSbr.className =oSbrClass+ " active";
	}	
	oSbr.onmouseout = function(){
		oSbr.className =oSbrClass;
	}
	oSitem.onmouseover = function(){
		oSitem.className =oSitemClass+" change_bj";
		oUl.style.display="block";
	}
	oSitem.onmouseout = function(){
		oSitem.className = oSitemClass;
		oUl.style.display="none";
	}
	for (var i =0;i<oLl.length;i++) {
		oLl[i].onmouseover = function(){
			this.className =oLiClass+" chenge";
		}
		oLl[i].onmouseout = function(){
			this.className =oLiClass;
		}
		oLl[i].onclick = function(){
			oSpan.innerHTML = this.innerHTML;
			oSitem.className = oSitemClass;
			oUl.style.display="none";
			oSbr.className =oSbrClass;
		}

	}
	// 头部下拉选项卡结束
	

}