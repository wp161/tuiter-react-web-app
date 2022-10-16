import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"


const PostSummaryList = () => {
	return (`
    	<ul class="list-group"
        	style="border-top-left-radius: 0px; border-top-right-radius: 0px;">
			${posts.map(post => {return (PostSummaryItem(post));}).join('')}
        </ul>
	`);
}


$('#post-summary-list').append(`
	${PostSummaryList()}
`);

export default PostSummaryList;