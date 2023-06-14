package com.java.www;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/BirthComfirm")
public class BirthComfirm extends HttpServlet {
	
  protected void doAction(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	  //form 모든데이터 ->request
	  request.setCharacterEncoding("UTF-8");
	  System.out.println("doAction");
	  String birth= request.getParameter("birth");
	  int num_birth = Integer.parseInt(birth);
	  Date today  = new Date(System.currentTimeMillis());
	  int year = today.getYear();
	  
	  //today.getYear();// 줄그어있는것은 요즘 잘 안쓴다는 뜻!! 요즘은 Calender로 사용
	 // Calendar cal = Calendar.getInstance();  요즘은 Calender로 사용
	  
	  int age = 2023 - num_birth;
	  System.out.println("년도 : "+year);
	  System.out.println("당신의 나이 : "+age);
	  String content="";
	  if(age>=18) {
		  content ="<h2 style = 'color:red; font-weigth:600;'>주류 판매가 가능합니다.</h2>";
	  }else {		 
		  content="<h2 style = 'color:red; font-weigth:600;'>미성년자! 주류판매 금지합니다</h2>";
	  }
	  
	  response.setContentType("text/html; charset=utf-8");
	  PrintWriter writer = response.getWriter();
	  writer.println("<html>");
	  writer.println("<head><title>미성년자 확인</title></head");
	  writer.println("<body>");
	  writer.println(content);
	  writer.println("</body>");
	  writer.println("<html>");
	  writer.close();
	  
	  
  }
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet");
		doGet(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost");		
		doPost(request, response);
	}

}
