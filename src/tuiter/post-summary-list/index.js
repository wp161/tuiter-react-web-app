import React from "react";
import PostSummaryItem
	from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
	
	const postsArray = useSelector(state => state.tuits)
	
	return(
		<ul className="list-group">
			{
				postsArray.map(tuit =>
					<PostSummaryItem
						key={tuit._id} tuit={tuit}/> )
			}
		</ul>
	);
};
export default PostSummaryList;