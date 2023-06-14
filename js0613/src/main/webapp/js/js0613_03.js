/**
 * 
 */
var openWin; // 전연변수, 공동 설정

function popupSend(){
	alert("부모창으로 값을 전달합니다.");
	opener.document.getElementById("recevie").value = document.getElementById("send");
}

function sendValue(){
	alert("자식창으로 값을 전달합니다");
	openWin.document.getElementById("reValue").value = document.getElementById("textInput").value
}/*열린창 openWin.*/

function popupOpen(){
	openWin=window.open("popup.html","popupForm","width=400px, heigth=550px, resizable=no ,scrollbar=no");
/*아래 맞는지 확인해주세요*/
	openWin.document.getElementById("reValue").value = document.getElementById("textInput").value
	}	
	

