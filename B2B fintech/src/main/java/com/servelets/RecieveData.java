package com.servelets;

import java.sql.*;
import java.io.IOException;
import java.sql.Connection;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.h2h.DBConnection;
import com.pojo.Response;
//import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class FetchServer
 */
@WebServlet("/RecieveData")
public class RecieveData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RecieveData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.setContentType("application/json");
		try {
			
			DBConnection db = new DBConnection();
			Connection con = db.getConnection();
			Statement st=con.createStatement();
			String query="select * from winter_internship;";
			ResultSet rs= st.executeQuery(query);
			
			ArrayList<Response> cliList= new ArrayList<Response>();
			while(rs.next()) {
				Response c= new Response();
				
				c.setSl_no(rs.getInt("sl_no"));
				c.setBusiness_code(rs.getString("business_code"));
				//c.setBusiness_name(rs.getString("business_name"));				
				c.setCust_number(rs.getInt("cust_number"));
				c.setClear_date(rs.getString("clear_date"));
				c.setBuisness_year(rs.getInt("buisness_year"));
				c.setDoc_id(rs.getString("doc_id"));
				c.setPosting_date(rs.getString("posting_date"));
				c.setDocument_create_date(rs.getString("document_create_date"));
				c.setDocument_create_date1(rs.getString("document_create_date1"));
				c.setDue_in_date(rs.getString("due_in_date"));
				c.setInvoice_currency(rs.getString("invoice_currency"));
				c.setDocument_type(rs.getString("document_type"));
				c.setPosting_id(rs.getInt("posting_id"));
				c.setArea_business(rs.getString("area_business"));
				c.setTotal_open_amount(rs.getDouble("total_open_amount"));
				c.setBaseline_create_date(rs.getString("baseline_create_date"));
				c.setCust_payment_terms(rs.getString("cust_payment_terms"));
				c.setInvoice_id(rs.getInt("invoice_id"));
				c.setIsOpen(rs.getInt("isOpen"));
				c.setAging_bucket(rs.getString("aging_bucket"));
				c.setIs_deleted(rs.getInt("is_deleted"));
				
				cliList.add(c);
			}
			Gson gson = new Gson();
			String s = gson.toJson(cliList);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			try {
				 response.getWriter().write(s);
			}
			catch(IOException e) {
				e.printStackTrace();
			}
			rs.close();
			st.close();
			con.close();
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}