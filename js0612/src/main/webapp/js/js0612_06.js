/*랜덤함수
let,var,const : let권장함
*/
var random = Math.floor(Math.random()*10)+1; //1-100

var input = Number(prompt("1-100까지 숫자를 입력하세요."));//문자열

if(input===random){// == 같다 === type+같다, 3개 사용은 거의 없다
	document.write("정답입니다. 정답: ",input);
	
}else{
	alert("오답입니다. 정답: "+random);
	//document.write("오답입니다. 정답: ",random);
	location.reload(); // 오답일 경우 맞출때까지 재실행 
	
}
document.write("<br>")


