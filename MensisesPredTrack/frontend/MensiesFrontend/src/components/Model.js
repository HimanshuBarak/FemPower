import React, { useContext, useEffect } from "react";
import "./model.css";
import { Bar } from "react-chartjs-2";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Model() {
	
	const data = {
		labels: ["menstrual", "follicular", "ovulation", "luteral"],
		datasets: [
			{
				label: "# of days",
				data: [
					 Math.floor(Math.random() * (6 - 3) + 3),
					Math.floor(Math.random() * (9 - 6) + 6),
					1,
					Math.floor(Math.random() * (14 - 10) + 10),
				],
				backgroundColor: [
					"rgb(255, 113, 103,0.7)",
					"rgb(120, 133, 165,0.7)",
					"rgb(100, 209, 168,0.7)",
					"rgb(24, 81, 92,0.7)",
				],
				borderColor: [
					"rgb(255, 113, 103,1)",
					"rgb(120, 133, 165,1)",
					"rgb(100, 209, 168,1)",
					"rgb(24, 81, 92,1)",
				],
				borderWidth: 1,
			},
		],
	};

	let options = {
		scales: {
			y: {
				ticks: {
					color: "white",
					font: {
						size: 14,
						weight: 300,
					},
				},
			},
			x: {
				ticks: {
					color: "white",
					font: {
						size: 16,
					},
				},
			},
		},
		plugins: {
			title: {
				display: true,
				text: "Number of days in each phase",
				color: "white",
				font: {
					size: 16,
				},
			},
		},
	};
	const styles = {
		card: {
			position: "relative",
			width: "350px",
			color: "red",
			//borderStyle: 'solid',
			//borderColor: 'yellowgreen'
			//boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px'
		},
		menu: {
			position: "absolute",
			right: "10px",
			top: "15px",
		},
		cardHeader: {
			paddingBottom: "40px",
		},
	};



	return (
		<div className="model-container">
			<Bar data={data} options={options} />
			<div className="phase-text mt-3">
				<h5>
					{" "}
					
				</h5>
			</div>

			<div className="phase-symptoms mt-4">
				<Card style={{ borderRadius: "10px" }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							<h4>Common Symptoms :</h4>
						</Typography>
						<Typography variant="h5" component="div">
							<p>Yet to be added and font also need fixing</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Model;