import WhoToFollowListItem from "./WhoToFollowListItem.js";
import accounts from "./accounts.js"


const WhoToFollowList = () => {
	return (`
        <ul class="list-group">
        
        <li class="list-group-item">
        	<div class="fw-bolder">
            	Who to follow
            </div>
        </li>
        
        ${accounts.map(account => {return (WhoToFollowListItem(account));}).join('')}
        </ul>
	`);
}


$('#who-to-follow-list').append(`
	${WhoToFollowList()}
`);

export default WhoToFollowList;