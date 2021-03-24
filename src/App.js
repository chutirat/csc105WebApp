import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";
import { Home } from "./pages/Home";
import Navbar from "./component/Navbar";
import ProductList1 from "./component/ProductList1";
import { Footer } from "./component/Footer";
import ProductList2 from "./component/ProductList2";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/next/right1">
            <ProductList1 />
          </Route>
          <Route path="/next/right2">
            <ProductList2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
