import {
	faDollyFlatbed,
	faSearch,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../css/ProductList.css";
import CardList1 from "./CardList1";
import Left from "./Left";
const ProductList1 = () => {
	const [invs, setInvs] = useState([
		{
			title: "Orange",
			img: "/img/orange.jpg",
		},
		{
			title: "Banana",
			img: "/img/banana.jpg",
		},
		{
			title: "Mango",
			img: "/img/mango.jpg",
		},
		{
			title: "Coconut",
			img: "/img/coconut.jpg",
		},
		{
			title: "Cherry",
			img: "/img/Cherry.jpg",
		},
		{
			title: "Water Melon",
			img: "/img/watermelon.jpg",
		},
		{
			title: "Durian",
			img: "/img/durian.jpg",
		},
		{
			title: "Rose Apple",
			img: "/img/roseapple.jpg",
		},
		{
			title: "Pine Apple",
			img: "/img/pineapple.jpg",
		},
		{
			title: "Papaya",
			img: "/img/papaya.jpg",
		},
		{
			title: "Apple",
			img: "/img/apple.jpg",
		},
		{
			title: "Strawberry",
			img: "/img/strawberry.jpg",
		},
	]);

	return (
		<div className="inventory">
			<Left />
			<div className="right">
				<Box
					display="flex"
					justifyContent="space-between"
					height="64px"
					alignItems="center"
					padding="10px 20px"
				>
					<h3>In-Stock Product</h3>

					<div className="search">
						<FontAwesomeIcon icon={faSearch} className="Search" />
						&nbsp; &nbsp;
						<TextField
							id="outlined-basic"
							label="Search"
							size="small"
							variant="outlined"
						/>
					</div>
				</Box>
				<div
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid container spacing={2} style={{ padding: "0 24px" }}>
						{invs.map((el) => (
							<Grid item xs={4}>
								<CardList1 title={el.title} img={el.img} />
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default ProductList1;
