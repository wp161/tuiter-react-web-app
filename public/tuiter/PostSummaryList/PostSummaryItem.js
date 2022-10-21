const PostSummaryItem = (post) => {
	return (`
		<li class="list-group-item ">
			<div class="row">
				<div class=" col-9 col-md-10 ">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName} <i class="fa-solid fa-circle-check"></i>
                        <span class="text-secondary fw-normal">
                            - ${post.time}
                        </span>

                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
<!--                            <div class="text-secondary">  >-->
<!--                            	${post.tweets} Tweets  >-->
<!--                            </div>  >-->
                </div>
             	<div class=" col-3 col-md-2 ">
                	<img class="float-end  rounded-4"
                		src="${post.image}" height="90px">
             </div>
            </div>
        </li>
	`)
}


export default PostSummaryItem;