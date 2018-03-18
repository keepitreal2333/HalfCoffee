var list = document.getElementById("list"),
	box = list.getElementsByTagName("div"),
	i = 0;
var clearTime1 = setInterval(block,1000);
function block(){
	box[i].classList.add("on");
	if(box[i].classList.contains("introduce")){
		box[i].style.animation = "movetop 1s 1";
	}else if(box[i].classList.contains("left")){
		box[i].style.animation = "moveleft 1s 1";
	}else if(box[i].classList.contains("right")){
		box[i].style.animation = "moveright 1s 1";
	}
	i++;
	if(i>box.length-1){
		clearInterval(clearTime1);
	}
}