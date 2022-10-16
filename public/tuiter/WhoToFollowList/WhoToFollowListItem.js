
const WhoToFollowListItem = (account) => {
	return (`
		<li class="list-group-item ">
			<div class="row">
				<div class="col-2">
	                            <img class="float-start rounded-circle"
	                                 src="${account.avatarIcon}" height="50px">
	                        </div>
	            <div class="col-6 text-nowrap">
	                            <div class="fw-bolder">
	                            	${account.userName} <i class="fa-solid fa-circle-check"></i>
	                            </div>
	                            <div>
	                                @${account.handle}
	                            </div>
	                        </div>
	            <div class="col-4">
	                            <button class="btn btn-primary mt-2 w-100 rounded-pill">
	                            	Follow
	                            </button>
	                        </div>
	        </div>
	    </li>
	`)
}


export default WhoToFollowListItem;