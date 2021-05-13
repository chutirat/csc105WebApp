import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";
import { Home } from "./pages/Home";
import Navbar from "./component/Navbar";
import ProductList1 from "./component/ProductList1";
import { Box } from "@material-ui/core";
import Dashboard from "./component/Dashboard";
import History from "./pages/History";

export default function App() {
	return (
		<Router>
			<Navbar />

			<Box marginTop="64px">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/next/right1">
						<ProductList1 title="All products" list="list" />
					</Route>
					<Route path="/next/right2">
						<ProductList1 title="In-stock products" list="inlist" />
					</Route>
					<Route path="/next/right3">
						<ProductList1 title="Out of stock products" list="outlist" />
					</Route>
					<Route path="/history">
						<History />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Box>
		</Router>
	);
}
