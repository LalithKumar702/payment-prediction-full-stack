package com.h2h;

import java.sql.*;
import java.sql.SQLException;

public class DBConnection {
	public  Connection getConnection() {
		 Connection con =null;
		 String url ="jdbc:mysql://localhost:3306/grey_goose";
		 String user = "root";
		 String pass ="Lalith@2705";
				try {
					Class.forName("com.mysql.cj.jdbc.Driver");
					con = DriverManager.getConnection(url,user,pass);
				} catch (ClassNotFoundException e) {		
					e.printStackTrace();
				} catch (SQLException e) {
					e.printStackTrace();
				}		
				return con;
	}
}
