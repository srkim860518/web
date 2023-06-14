var num = Number(prompt("1번째 숫자를 입력해주세요"))
var num2 = Number(prompt("2번째 숫자를 입력해주세요"))


//document.write(typeof(num),"<br>");//string--> var num= Number()를 타입 변경하면 number
//document.write(typeof(num2),"<br>");//string
//document.write(num+num2,"<br>");//string

//document.write(Number(num)+Number(num2),"<br>");// type Number 설정: 숫자 // 30

//두 숫자를 입력받아 큰 수를 출력하시오.
//var result =a>b?"오답입니다..":"정답 입니다";
var result =num>num2?num:num2;

document.write("더 큰수는 : ",result,"<br>")
document.write(typeof(num),"<br>")
document.write(typeof(num1),"<br>")


