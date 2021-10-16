import React from "react";
import "./main.css";
import Symptoms from "./components/Symptoms";
import Model from "./components/Model";
import Calendar from "./components/Calendar";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Main() {
	const [view, setView] = React.useState("list");
	const [toggle, setToggle] = React.useState(true);
	const handleChange = (event, nextView) => {
		setView(nextView);
	};
	return (
		<>
			{toggle ? (
				<div className="row">
					<div className="col-lg-1">
						<ToggleButtonGroup
							orientation="vertical"
							value={view}
							exclusive
							onChange={handleChange}
							style={{ marginTop: "200px", marginLeft: "25px" }}
						>
							<ToggleButton
								value="list"
								aria-label="list"
								style={{ color: "white" }}
							>
								<ViewListIcon />
							</ToggleButton>
							<ToggleButton
								value="module"
								aria-label="module"
								style={{ color: "white" }}
							>
								<ViewModuleIcon />
							</ToggleButton>
							<ToggleButton
								value="quilt"
								aria-label="quilt"
								style={{ color: "white" }}
							>
								<ViewQuiltIcon />
							</ToggleButton>
							<ToggleButton
								value="quilt"
								aria-label="quilt"
								style={{ color: "white" }}
							>
								<ViewQuiltIcon />
							</ToggleButton>
						</ToggleButtonGroup>
					</div>
					<div className="col-lg-11">
						<div className="container">
							<div className="row  l-5">
								<div className="col-lg-3 mt-4 mb-3">
									<Symptoms />
								</div>
								{/* the visualising box */}
								<div className="col-lg-7 mt-3  model">
									<Model />

									<div className="reference  mt-3">
										<ul className="mb-3">
											<li>
												{" "}
												<div className="circle follicula"></div>{" "}
												follicular
											</li>
											<li>
												<div className="circle ovulating"></div>{" "}
												Ovulation
											</li>
											<li>
												<div className="circle luteral"></div>{" "}
												luteral
											</li>
											<li>
												<div className="circle menstrual"></div>{" "}
												menstrual
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="calender">
							<Calendar />
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default Main;
