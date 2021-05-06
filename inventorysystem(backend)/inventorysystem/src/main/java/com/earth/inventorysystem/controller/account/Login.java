package com.earth.inventorysystem.controller.account;


import com.earth.inventorysystem.util.MySqlConnection;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/account")
public class Login {
    @PostMapping(path = "/login")
    public Map<String, Object> login(@RequestParam String username, @RequestParam String password){

        Map<String, Object> res = new HashMap<>();
        try{
            Connection connection = MySqlConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * from user where username=? and password=?");
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            ResultSet resultSet = preparedStatement.executeQuery();

            if(resultSet.next()){
                Map<String, Object> user = new HashMap<>();
                user.put("username", resultSet.getString("username"));
                user.put("email",resultSet.getString("email"));
                user.put("user_id",resultSet.getInt("user_id"));
                res.put("user", user);
                res.put("isLogin", true);
            }
            else {
                res.put("isLogin", false);
                res.put("error", "username or password incorrect");
            }
        }catch (SQLException e){
            e.printStackTrace();
            res.put("success", false);
        }
        return res;
    }
}