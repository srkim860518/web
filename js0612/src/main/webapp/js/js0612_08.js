//for문
// 구구단

var i = 2;
var j = 1;
//for(var i=2;i<=9;i++){
//document.write("[ "+ i +" 단 ]","<br>");
//	for( var j=1;j<=9;j++){
//document.write(i+" * "+j+"="+(i*j));
//----------------------------------------

var htmlData = "<table>";
for(var i=2;i<=9;i++){
	htmlData+="<tr>";
	htmlData+="<td colspan='5'>"+i+"단</td>";
	htmlData+="<tr>";
	for( var j=1;j<=9;j++){
		htmlData +="<tr>";
		htmlData +="<td>"+i+"</td>";
		htmlData +="<td>*</td>";
		htmlData +="<td>"+j+"</td>";
		htmlData +="<td>=</td>";
		htmlData +="<td>"+(i*j)+"</td>";
		htmlData +="</tr>";		

	}
}

htmlData +="</table>";
document.write(htmlData);
		