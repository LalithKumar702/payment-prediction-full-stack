package com.servelets;

import java.io.IOException;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.h2h.DBConnection;
import com.pojo.Response;

/**
 * Servlet implementation class EditServer
 */
@WebServlet("/EditInvoice")
public class EditInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 * 
	 */
    private void configResponse(HttpServletResponse response)
    {
       response.setContentType("application/json");
       response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
       response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
       response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {
			// response.addHeader("Access-Control-Allow-Origin", "*");
			DBConnection db = new DBConnection();
			Connection con = db.getConnection();
			configResponse(response);
		     response.getWriter();
			Gson gson = new Gson();
			Response c = new Response();
			c = gson.fromJson(request.getReader(), Response.class);
			String query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms=? WHERE sl_no = ?;";
			PreparedStatement st = con.prepareStatement(query);
				st.setString(1, c.getInvoice_currency());
				st.setString(2, c.getCust_payment_terms());
				st.setInt(3, c.getSl_no());
				st.executeUpdate();
				
				con.close();
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		doGet(request, response);
	}

}