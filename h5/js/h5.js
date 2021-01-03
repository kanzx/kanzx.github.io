/*

问题笔记：
	向上向下滑动脚本思路错误
		待解决

*/

var main = document.getElementById('main'),
	content = document.getElementById('content'),
	page = document.getElementsByClassName('page'),
	page1 = document.getElementById('page1'),
	page2 = document.getElementById('page2'),
	page3 = document.getElementById('page3'),
	title_1 = document.getElementById('title_1'),
	title_2 = document.getElementById('title_2'),
	heart = document.getElementById('heart'),
	ye_1 = document.getElementById('ye_1'),
	ye_2 = document.getElementById('ye_2');
if (navigator.userAgent.match(/windows/i) != "Windows"){
	title_1.className="title_1_h5";
	title_2.className="title_2_h5";
	heart.remove();
	ye_1.remove();
	ye_2.remove();
	main.className="main_h5";
	content.className="content_h5";
	hua_dong.className="hua_dong_h5";
}
var main_item_height = main.offsetHeight;
var index = 0;
var moveY,
	endY,
	startY;
content.addEventListener('touchstart', content_start, false );
content.addEventListener('touchmove', content_move, false);
content.addEventListener('touchend', content_end, false);
function content_start(e) {
	console.log(e)
	var touch = e.touches[0];
	startY = touch.pageY;
	endY = content.style.webkitTransform;
	if(!endY){
		endY = 0;
	}else{
		endY = parseInt(endY.replace('translateY(',''));
	}
}
function content_move(e) {
	var touch = e.touches[0];
	moveY = touch.pageY - startY;
	index = Number(e.target.id.split('page')[1]);
	console.log("滑动："+index);
	//下一页
	if(moveY < 0) {
		if(index == 3) {
		  return false;
		}
		console.log("高度："+main_item_height);
		var index2 = index+1;
		// setTimeout(function(){},3000);
		// content.style.webkitTransform = 'translateY(-'+(main_item_height*index)+'px)';
		// document.getElementById('page'+index).style.animation="page_hua_dong 3s";
		
		for(var i=100;i=0;i--){
			console.log("百分比："+i+'%');
			document.getElementById('page'+index).style.height=i+'%';
			document.getElementById('page'+index).style.height=i+'%';
		}
		setTimeout(function(){document.getElementById('page'+index).style.display="none";},3000);
		document.getElementById('page'+index2).style.display="block";
		// setTimeout(function(){document.getElementById('page'+index+'_content').style.display="none"},3000);
		// document.getElementById('page'+index2+'_content').style.display="block";
	}
	//上一页
	else if(moveY > 0) {
		if(index == 1) {
		  return false;
		}
		var index2 = index-1;
		// content.style.webkitTransform = 'translateY('+(main_item_height+endY)+'px)';
		document.getElementById('page'+index).style.animation="page_hua_dong 3s";
		setTimeout(function(){document.getElementById('page'+index).style.display="none";},3000);
		document.getElementById('page'+index2).style.display="block";
		// setTimeout(function(){document.getElementById('page'+index+'_content').style.display="none"},3000);
		// document.getElementById('page'+index2+'_content').style.display="block";
	}
}
function content_end(e) {
	console.log(e);
}