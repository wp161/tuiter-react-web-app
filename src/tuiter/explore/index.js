import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
	return(
		<>
			<div className="row">
				<div className="col-11">
					<div className="position-relative">
						<i className="position-absolute fa-solid fa-magnifying-glass"
						   style={{"bottom": "10px", "left": "17px"}}>
							
						</i>
						<input className="ps-5 form-control rounded-pill"
						       placeholder="Search Tuiter"/>
					</div>
				</div>
				<div className="col-1">
					<i className="fa-solid bi-gear-fill float-end text-primary"
					   style={{"paddingTop": "0.2rem", "fontSize": "2.1em", "verticalAlign": "middle"}}>
						
					</i>
				</div>
			</div>
			
			
			<ul className="nav nav-pills mb-2 mt-2">
				<li className="nav-item">
					<a className="nav-link active">For You</a>
				</li>
				<li className="nav-item">
					<a className="nav-link">Trending</a>
				</li>
				<li className="nav-item">
					<a className="nav-link">News</a>
				</li>
			</ul>
			<div className="position-relative mb-2">
				<img src="/images/starship.jpg" className="w-100"/>
				<h1 className="position-absolute wd-nudge-up text-white">
					SpaceX Starship</h1>
			</div>
			<PostSummaryList/>
		</>
	);
};
export default ExploreComponent;