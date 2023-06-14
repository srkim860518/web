	/*
*게시판 for 문
*/

var htmlData = ""; //선언

//htmlData += '<h2>학생성적 프로그램</h2><table><colgroup><col width="8%"><col width="14%"><col width="8%"><col width="8%"><col width="8%"><col width="10%"><col width="10%"><col width="7%"><col width="15%">	<col width="12%"></colgroup>';
//htmlData += "<tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>합계</th><th>평균</th><th>등수</th>	<th>작성일</th><th>관리자</th></tr>";
var random=0;

for(var i=0;i<10;i++){	
var kor =Math.floor(Math.random()*20)+81; //8
var eng =Math.floor(Math.random()*20)+81; //8
var math =Math.floor(Math.random()*20)+81; //8
}
//점수입력
total =kor+eng+math;
avg = (total/3.0);to.Fixed(2);

for(var i=0;i<10;i++){
	 // 81~100 랜덤함수를 이용해서 국어,영어,수학 점수를 입력받아 합계,평균을 추가해서 출력하시오.
 htmlData += "<tr>";
	 htmlData += "<td>"+(i+1)+"</td>";
	 htmlData += "<td>홍길동</td>";
	 htmlData += "<td>100</td>";
	 htmlData += "<td>100</td>";
	 htmlData += "<td>100</td>";
	 htmlData += "<td>300</td>";
	 htmlData += "<td>100.0</td>";
	 htmlData += "<td>1</td>";
	 htmlData += "<td>2023-06-12</td>";
	 htmlData += "<td>관리자</td>";
	 htmlData += "</tr>";
 }
 document.getElementById('tbody').innerHTML=htmlData; //id가 tbody인것을 여기에 넣어라

//htmlData +="</table>";
//document.write(htmlData);// body 사이에 내용을 html에서 다 지우고 와서 여기에 넣음


					