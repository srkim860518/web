/**
 * 
 */
var openPop ;

function idConfirm(){
	opener.document.getElementById("id").value = document.getElementById("checkId").value;
	window.close();
}

function IdCheck(){
	document.getElementById("span01").innerText = "입력한 아이디는 사용 가능합니다";
}

function idCheck(){
	//alert("아이디 중복체크 창이 열립니다.");
    openPop = window.open("idCheckform.html","id","width=350px, height=500px,scrollbars=no"); // 전역변수, 공동 설정
}

