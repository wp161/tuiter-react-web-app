import React from "react";
import whoArray from '../data/who.json';
import WhoToFollowItem
	from "./who-to-follow-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
	const whoArray = useSelector(state => state.who)
	return(
		<ul className="list-group">
			<li className="list-group-item">
				<div className="fw-bolder">
					Who to follow
				</div>
			</li>
			{
				whoArray.map(who =>
					<WhoToFollowItem
						key={who._id}
						who={who}/>
				)
			}
		</ul>
	);
};

export default WhoToFollowList;