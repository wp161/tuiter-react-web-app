import React from "react";
import TuitsList from "./tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
	return (
		<>
			<h4>Home</h4>
			<WhatsHappening/>
			<TuitsList/>
		</>
	);
}

//
// const HomeComponent = () => {
// 	return (
// 		<>
// 		<h2>Home</h2>
//     	<ul className="list-group">
// 		    {
// 			    tuitsArray.map(tuit =>
// 				    <TuitItem
// 					    key={tuit.post_id} tuit={tuit}/>)
// 		    }
//
//         </ul>
// 		</>
// 	);
// }

export default HomeComponent;