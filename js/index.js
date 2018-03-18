var show = document.getElementsByClassName("show")[0],
	showSize = show.children,
	showImg = document.querySelectorAll("#contain .newProduct ul .show div img"),
	leftButt = document.getElementsByClassName("left")[0],
	rightButt = document.getElementsByClassName("right")[0],
	arrImg = ["0","1","2","3","4"],
	num = 0,
	boo1 = false,
	boo2 = true;
	leftButt.onclick = leftButton;
	rightButt.onclick = rightButton;
	function leftButton(){
		for(var j=0;j<5;j++){
			num++;
			if(num>4)num = 0;
			if(boo1){
				if(num!=4){
					num=num+1;
					boo1 = false;
					boo2 = true;
				}else{
					num = 0;
					boo1 = false;
					boo2 = true;
				}
			}
			showImg[j].src = "images/切图2/切图"+arrImg[num]+".png";
		}	
		num++;
		if(num>4)num=0;
	}
	function rightButton(){
		for(var j=4;j>=0;j--){
			num--;
			if(num<0)num = 4;
			if(boo2){
				if(num!=0){
					num=num-1;
					boo2 = false;
					boo1 = true;
				}else{
					num = 4;
					boo2 = false;
					boo1 = true;
				}
			}
			showImg[j].src = "images/切图2/切图"+arrImg[num]+".png";
		}	
		num--;
		if(num<0)num=4;
	}
