package com.earth.inventorysystem.controller.stock;

import java.sql.ResultSet;

public class Product {
    String productId;
    String name;
    int amount;
    String type;
    String description;

    public Product(String productId, String name, int amount, String type, String description) {
        this.productId = productId;
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.description = description;
    }

    public String getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public int getAmount() {
        return amount;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Product(ResultSet rs) throws Exception {
        this.productId = rs.getString("Product_ID");
        this.name = rs.getString("Name");
        this.amount = rs.getInt("Amount");
        this.type = rs.getString("Type");
        this.description = rs.getString("Description");
    }
}


