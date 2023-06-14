/**
 * 
 */
var count=1;
var interval;
function setIn(){
	interval= setInterval(function(){	
	count +=1;
	console.log("숫자: ",count);
	},1000); // 1/1000ch 1000=1초
	
	//alert("test");
	//var htmlData="<tr><th>번호</th></tr>";
	//docoumet.getElementById("t01").append("1");
}

//setInterval 삭제
function setOut(){
	console.log("멈춤");
	clearInterval(interval);
}
