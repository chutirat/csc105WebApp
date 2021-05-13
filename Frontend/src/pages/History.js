import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

const History = () => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8080/lists/history").then((response) => {
			if (response.data.success) {
				setRows(response.data.lists);
			} else {
				alert("Unable to fetch stock list.");
			}
		});
	}, []);

	return (
		<div style={{ maxWidth: "550px", margin: "128px auto" }}>
			<Typography variant="h4" gutterBottom>
				Update History
			</Typography>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Username</TableCell>
							<TableCell align="right">Stock</TableCell>
							<TableCell align="right">Amount</TableCell>
							<TableCell align="right">Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={Math.random()}>
								<TableCell component="th" scope="row">
									{row.username}
								</TableCell>
								<TableCell align="right">{row.stock}</TableCell>
								<TableCell
									align="right"
									style={{ color: row.amount < 0 ? "indianred" : "green" }}
								>
									{row.amount}
								</TableCell>
								<TableCell align="right">{row.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default History;
