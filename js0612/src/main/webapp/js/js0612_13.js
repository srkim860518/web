/*
*배열
*/
//함수
function pop(){
		alert("함수 pop()이 연결되었습니다.");
		//alert("함수" pop()이 연결되었습니다.");
		window.open("popup.html","pop1","width=400,height=600,left=0,top=0");
}
function dateDelete(){
	//alert("삭제 함수가 호출되었습니다.");
	if(confirm("게시글을 삭제하시겠습니까?")){
	alert("게시글을 삭제 하였습니다.");
	//alert("삭제코드를 추가하면됨");
}else{
	alert("삭제가 취소되었습니다.");
}
}


// document.getElementById('').innerHTML=htmlData;
