// 菜单栏
function menu(canshu1,canshu2){
	var menu1_1 = document.getElementById(canshu1);
	var menu1_2 = document.getElementById(canshu2);
	
	menu1_1.onmouseover = function(){
		menu1_2.style.display = "block"    
	}
	menu1_1.onmouseout = function(){
		menu1_2.style.display = "none"    
	}
}
menu("menu1_1","menu1_2")
menu("menu2_1","menu2_2")
menu("menu3_1","menu3_2")

//PC判断
if (navigator.userAgent.match(/windows/i) != "Windows"){
	var main_id = document.getElementById("main");
	main_id.style.width="100%";
}