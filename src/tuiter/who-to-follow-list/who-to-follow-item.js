import React from "react";
const WhoToFollowItem = (
	{
		who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
	}
) => {
	return(
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img className="float-start rounded-circle" height={48}
					     src={`/images/${who.avatarIcon}`}/>
				</div>
				<div className="col-6 text-nowrap">
					<div className="fw-bold">
						{who.userName}
						&nbsp;
						<i className="fa-solid fa-circle-check"></i>
					</div>
					<div>@{who.handle}</div>
				</div>
				<div className="col-4">
					<button className="btn btn-primary rounded-pill float-end mt-2">Follow</button>
				</div>
			</div>
		</li>
	
	// <li className="list-group-item ">
	// 	<div className="row">
	// 		<div className="col-2">
	// 			<img className="float-start rounded-circle"
	// 			     src="${account.avatarIcon}" height="50px">
	// 		</div>
	// 		<div className="col-6 text-nowrap">
	// 			<div className="fw-bolder">
	// 				${account.userName} <i
	// 				className="fa-solid fa-circle-check"></i>
	// 			</div>
	// 			<div>
	// 				@${account.handle}
	// 			</div>
	// 		</div>
	// 		<div className="col-4">
	// 			<button className="btn btn-primary mt-2 w-100 rounded-pill">
	// 				Follow
	// 			</button>
	// 		</div>
	// 	</div>
	// </li>
	);
};
export default WhoToFollowItem;