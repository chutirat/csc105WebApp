import React from "react";
import Navbar from "../component/Navbar";
import "../css/Home.css";
import Footer from "../component/Footer";
import BeforeFooter from "../component/BeforeFooter";

export const Home = () => {
  return (
    <>
      <div className="container1">
        <h1>Inventory System</h1>
        <p>- Online Warehouse Service -</p>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};
