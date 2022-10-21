import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item";

const HomeComponent = () => {
	return (
    	<ul className="list-group">
		    {
			    postsArray.map(post =>
				    <PostItem
					    key={post.post_id} post={post}/>)
		    }

        </ul>
	);
}

export default HomeComponent;