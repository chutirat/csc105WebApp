package com.earth.inventorysystem.controller.stock;

import com.mysql.cj.x.protobuf.MysqlxPrepare;

import java.sql.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.earth.inventorysystem.util.MySqlConnection;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stock")

public class ProductOperation {
    Connection connection;
    PreparedStatement preparedStatement;
    ResultSet resultSet;
    Product product;

    @PostMapping(path = "/incresestock")

    public Map<String, Object>  incresestock(@RequestParam  int stock_id, @RequestParam int updateAmount) {
        int originalAmount;
        int newAmount = 0;
        Map<String, Object> res = new HashMap<>();

        try {
            connection = MySqlConnection.getConnection();
            preparedStatement = connection.prepareStatement("SELECT amount FROM `stock`");
            originalAmount = resultSet.getInt("stock_id");
            preparedStatement = connection.prepareStatement("UPDATE stock SET Amount = Amount+?   WHERE stock_id = ? ");
            preparedStatement.setInt(1, updateAmount);
            preparedStatement.setInt(2, stock_id);
            preparedStatement.execute();

            preparedStatement = connection.prepareStatement("SELECT * FROM stock WHERE stock_id = ?");
            preparedStatement.setInt(1, stock_id);
            ResultSet rs = preparedStatement.executeQuery();
            rs.next();
            res.put("amount",rs.getInt("amount"));
            return res;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            try {
                connection.close();
                preparedStatement.close();
                resultSet.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return res;
    }

    @PostMapping(path = "/decresestock")
    public Map<String, Object>  decresestock(@RequestParam int stock_id, @RequestParam int updateAmount) {
        int originalAmount = 0;
        int newAmount = 0;
        Map<String, Object> res = new HashMap<>();

        try {
            connection = MySqlConnection.getConnection();
            preparedStatement = connection.prepareStatement("SELECT amount FROM `stock`");
            originalAmount = resultSet.getInt("stock_id");
            preparedStatement = connection.prepareStatement("UPDATE stock SET Amount = Amount-?   WHERE stock_id = ? ");
            preparedStatement.setInt(1, updateAmount);
            preparedStatement.setInt(2, stock_id);
            preparedStatement.execute();

            preparedStatement = connection.prepareStatement("SELECT * FROM stock WHERE stock_id = ?");
            preparedStatement.setInt(1, stock_id);
            ResultSet rs = preparedStatement.executeQuery();
            rs.next();
            res.put("amount",rs.getInt("amount"));
            return res;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            try {
                connection.close();
                preparedStatement.close();
                resultSet.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return res;


    }
    @PostMapping(path = "/buying")
    public Map<String, Object>  buying(@RequestParam int stock_id,@RequestParam int amount,@RequestParam int user_id){
        Timestamp now = new Timestamp(new Date().getTime());
        Map<String, Object> res = new HashMap<>();

        try {
            connection = MySqlConnection.getConnection();
            preparedStatement = connection.prepareStatement("INSERT into buying (date,amount,user_id,stock_id) values (?,?,?,?) ");
            preparedStatement.setTimestamp(1, now);
            preparedStatement.setInt(2, amount);
            preparedStatement.setInt(3, user_id);
            preparedStatement.setInt(4, stock_id);
            preparedStatement.execute();

            res.put("success",true);
            return res;

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            try {
                connection.close();
                preparedStatement.close();
                resultSet.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return res;
    }

    @GetMapping(path = "/user")
    public Map<String, Object> user(@RequestParam int user_id){
        Map<String, Object> res = new HashMap<>();

        try{
            connection = MySqlConnection.getConnection();
            preparedStatement = connection.prepareStatement("SELECT * FROM buying INNER JOIN stock ON buying.stock_id = stock.stock_id WHERE buying.user_id = ? ");
            preparedStatement.setInt(1,user_id);
            ResultSet rs = preparedStatement.executeQuery();
            ArrayList <Object> arr = new ArrayList<>();

            while(rs.next()){
                Map<String, Object> order = new HashMap<>();
                order.put("date",rs.getDate("date"));
                order.put("user_id",rs.getInt("user_id"));
                order.put("stock_name",rs.getString("stock_name"));
                order.put("amount",rs.getInt("amount"));
                arr.add(order);

            }
            res.put("order",arr);
            return res;

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return res;
    }
}