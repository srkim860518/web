/**
 * 
 */

//시간 가져오기

var today = new Date();
var a=0;		//변수
let aaa = 0;   //변수
const bbb = 0; //상수

var hours = today.getHours();
var minutes = today.getMinute();
var seconeds = today.getSeconds();
var millisecondes = today.getMilliseconds();

function start(){
	
	document.getElementById("h01").innerText = hours+":"+minutes+":"+seconds;
}