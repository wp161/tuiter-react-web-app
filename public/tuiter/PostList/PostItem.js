const getComment = (comment, mentioned, position) => {
	return comment.slice(0, position) +
		"<span style='color: rgb(56, 140, 205)'>"
		+ mentioned
		+ "</span>"
		+ comment.slice(position)
}

const getPanel = (img, ttl, ctnt, link) => {
	if(ttl === ''){
		return (`
			<div class="pt-2">
			<img src= "${img}"
			class="rounded-4 border border-secondary"
			style="border-color:rgb(25, 26, 29) !important;"
			width='100%'>
			</div>
		`)
	}
	else{
		return (`
			<div class="pt-2">
			<img src= "${img}"
			class="rounded-4 border border-secondary"
			style="border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important;border-color:rgb(25, 26, 29) !important;"
			width='100%'>
			</div>
			
			<div class="rounded-4 border border-secondary"
			style="border-top-right-radius: 0 !important; border-top-left-radius: 0 !important;border-color:rgb(25, 26, 29) !important;">
				<div class='fs-6 pt-2 ps-3 pe-3 pb-2' style='color: white'>
					${ttl}
				</div>
				<div class='text-secondary ps-3 pe-3 pb-2'>
					${ctnt}
				</div>
				<div class='text-secondary ps-3 pe-3 pb-2'>
					&#128279
 					${link}
				</div>
			</div>
		`)
	}
}

const getStats = (reply, retuit, like) => {
	return (`
			<div class="row p-3">
                <div class="col-3">
                	<i class="fa-regular fa-comment text-secondary fs-6"></i>
                    <span class="ps-2 text-secondary"
                    style="vertical-align: top"> ${reply} </span>
                </div>
                <div class="col-3">
                	<i class="fa-solid fa-retweet text-secondary fs-6"></i>
                    <span class="ps-2 text-secondary"
                    style="vertical-align: top"> ${retuit} </span>
                </div>
                <div class="col-3">
                	<i class="fa-regular fa-heart text-secondary fs-6"></i>
                    <span class="ps-2 text-secondary"
                    style="vertical-align: top"> ${like} </span>
                </div>
                <div class="col-3">
                	<i class="fa-solid fa-arrow-up-from-bracket fs-6 text-secondary"></i>
                </div>
            </div>
	`)
}

const PostItem = (post) => {
	return (`
		<li class="list-group-item "
		style="border-color:black !important; border-bottom-color:rgb(25, 26, 29) !important;background-color: black !important;">
			<div class="row">
<!--			User Profile Pic COlumn-->
			    <div class=" col-1 ">
                	<img class="rounded-circle pe-1"
                		src="${post.avatar_path}" height="40px">
             	</div>
             	
<!--             	Content Column-->
				<div class=" col-11 ">
<!--					Title and comment-->
					<div class="fw-bolder">
                    	${post.userName} <i class="fa-solid fa-circle-check"></i>
                        <span class="text-secondary fw-normal">
                        	${post.handle} · ${post.time}
                        </span>
                         
                        <span class="float-end pe-2" style="font-weight: 800;">
                        	<i class="fa-solid fa-ellipsis"></i>
						</span>
                    </div>
                    <div style="color: white">
                    	${getComment(post.comment, post.mentioned, post.mentioned_position)}
                    </div>
                    
<!--                    Picture and url-->
		        ${getPanel(post.image, post.title, post.content, post.url)}
				${getStats(post.reply_count, post.retuit_count, post.liked_count)}
                </div>
            </div>
        </li>
	`)
}


export default PostItem;