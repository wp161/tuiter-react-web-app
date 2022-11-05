import React from "react";
import tuitsArray from '../data/tuits.json';
import TuitItem from "./tuit-item";

const TuitsList = () => {
	return (
			<ul className="list-group">
				{
					tuitsArray.map(tuit =>
						<TuitItem
							key={tuit.post_id} tuit={tuit}/>)
				}
			</ul>
	);
}

export default TuitsList;