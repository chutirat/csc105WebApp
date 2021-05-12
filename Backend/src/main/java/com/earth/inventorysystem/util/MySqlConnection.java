package com.earth.inventorysystem.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConnection {
    private static final String db_url = "jdbc:mysql://mysql.cslab.bsthun.com:1205/inventory_system";

    private static Connection connection;

    public static Connection getConnection() throws SQLException {
        if (connection == null || !connection.isValid(200)) {
            return reConnect();
        }
        return connection;
    }

    public static Connection reConnect() throws SQLException {
        connection = DriverManager.getConnection(db_url, "aerith_1026", "1026");
        return connection;
    }
}