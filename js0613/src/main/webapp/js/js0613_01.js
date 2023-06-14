/**
 * 
 */
function input(){
	var num = prompt("숫자를 입력하세요");
	var num2 = prompt("2번째 숫자를 입력하세요");
	console.log(num);
	add(num,num2);
	sub(num,num2);
}
function add(){
	console.log("결과값: ",(num+num2));
}


function sub(){
	console.log("빼기 결과값: ",(num-num2));
}
