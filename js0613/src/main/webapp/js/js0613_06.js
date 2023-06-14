/**
 * 
 */

//시간 가져오기
var a=0;		//변수
let aaa = 0;   //변수
const bbb = 0; //상수


var interval;

function start(){	
	interval = setInterval(function(){
		var today =new date();	
		var hours = today.getHours();
		var minutes = today.getMinute();
		var seconeds = today.getSeconds();
		var seconds = today.getseconds();
		var seconds2 = today.get
		document.getElementById("h01").innerText = hours+":"+minutes+":"+seconds;
},1000);

}
