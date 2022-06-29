package com.servelets;
import java.sql.*;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.h2h.DBConnection;
import com.pojo.Response;


/**
 * Servlet implementation class AddServer
 */
@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try
		{
			
			DBConnection db = new DBConnection();
			Connection con = db.getConnection();
			Response c = new Response(); 
			Gson gson = new Gson();
			c = gson.fromJson(request.getReader(),Response.class);
			String query = "INSERT INTO winter_internship (business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, c.getBusiness_code());
			st.setInt(2, c.getCust_number());
			st.setString(3, c.getClear_date());
			st.setInt(4, c.getBuisness_year());
			st.setString(5,c.getDoc_id());
			st.setString(6, c.getPosting_date());
			st.setString(7, c.getDocument_create_date());
			st.setString(8, c.getDue_in_date());
			st.setString(9, c.getInvoice_currency());
			st.setString(10,c.getDocument_type());
			st.setInt(11,c.getPosting_id());
			st.setDouble(12, c.getTotal_open_amount());
			st.setString(13, c.getBaseline_create_date());
			st.setString(14, c.getCust_payment_terms());
			st.setInt(15, c.getInvoice_id());
			st.executeUpdate();
			con.close();
		}catch(SQLException e){
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		doGet(request, response);
	}

}