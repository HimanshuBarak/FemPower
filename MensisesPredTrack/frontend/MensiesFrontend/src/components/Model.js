import React, { useContext, useEffect } from "react";
import "./model.css";
import { Bar } from "react-chartjs-2";
import PhaseContext from "../context/PhaseContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Model() {
	const { phase, setphase, day, setday, flowContext, setflowContext } =
		useContext(PhaseContext);
	const data = {
		labels: ["menstrual", "follicular", "ovulation", "luteral"],
		datasets: [
			{
				label: "# of days",
				data: [
					flowContext == "medium" || flowContext == "heavy"
						? Math.floor(Math.random() * (11 - 7) + 7)
						: Math.floor(Math.random() * (6 - 3) + 3),
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

	useEffect(() => {}, [phase]);

	return (
		<div className="model-container">
			<Bar data={data} options={options} />
			<div className="phase-text mt-3">
				<h5>
					{" "}
					{phase
						? `You are currently in ${phase} phase.`
						: `Press Submit to View your current Phase`}{" "}
				</h5>
			</div>

			<div className="phase-symptoms mt-4">
				<Card
					style={{ borderRadius: "10px", backgroundColor: "#feda9c" }}
				>
					<CardContent>
						{phase == "menstrual" && (
							<>
								<div className="col-lg-8 title-text2">
									<h2>Common Symptoms:</h2>
								</div>
								<div className="row">
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Extreme Cramps
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Tender Breasts
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Extreme Bloating
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Mood Swings
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Feverent Irritability
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Nausea & Headaches
											</b>
										</h2>
									</div>
								</div>
							</>
						)}
						{phase == "luteal" && (
							<>
								<div className="col-lg-8 title-text2">
									<h2>Common Symptoms:</h2>
								</div>
								<div className="row">
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Mood Changes
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Frequent Headaches
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Weight Gain
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Changes in Desire.
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Food Cravings
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Trouble Sleeping
											</b>
										</h2>
									</div>
								</div>
							</>
						)}
						{phase == "ovulation" && (
							<>
								<div className="col-lg-8 title-text2">
									<h2>Common Symptoms:</h2>
								</div>
								<div className="row">
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Rise in Temperature
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Thicker Discharge
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Extreme Ov-Pain
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Fertile Mucus
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Fertile Saliva
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Breast Tenderness
											</b>
										</h2>
									</div>
								</div>
							</>
						)}
						{phase == "follicular" && (
							<>
								<div className="col-lg-8 title-text2">
									<h2>Common Symptoms:</h2>
								</div>
								<div className="row">
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Higher Energy
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Glowing Skin
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Extremely Optimistic
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;More Socializing
											</b>
										</h2>
									</div>
									<div className="col-lg-4 title-text1">
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Can Exercise
											</b>
										</h2>
										<h2 className="title-text3">
											<b className="title-text2">•</b>
											<b className="title-text3">
												&nbsp;Explore Horizons
											</b>
										</h2>
									</div>
								</div>
							</>
						)}
						{!phase && (
							<>
								<div className="col-lg-8 title-text2">
									<h2>Common Symptoms:</h2>
								</div>

								<div className="col-lg-12 title-text1">
									<h2>
										<b>
											Press Submit to View the common
											symptoms in your current phase
										</b>
									</h2>
								</div>
							</>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Model;