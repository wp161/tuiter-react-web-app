function navigation() {
	return (`
		<ul class="list-group">
			<div class="list-group-item list-group-item-action">
				<i class="fab fa-twitter fa-1x"></i>
			</div>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<i class="fa-solid fa-house"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Home
					</span>
				</a>
				<a href="#"
					class="list-group-item list-group-item-action active">
					<i class="fa-solid fa-hashtag"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Explore
					</span>
				</a>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<i class="fa-solid fa-bell"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Notifications
					</span>
				</a>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<i class="fa-solid fa-envelope"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Messages
					</span>
				</a>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<i class="fa-solid fa-bookmark"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Bookmarks
					</span>
				</a>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<i class="fa-solid fa-list"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Lists
					</span>
				</a>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<i class="fa-solid fa-user"></i>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">Profile
					</span>
				</a>
				<a href="#"
				   class="list-group-item list-group-item-action">
					<span class="fa-stack wd-stacked-icon">
						<i class="fa-solid fa-circle fa-stack-1x"></i>
						<i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
					</span>
					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">More
					</span>
				</a>
			</ul>
			<button class="btn btn-primary mt-2 w-100 rounded-pill">
				Tuit
			</button>
	`)
}


export default navigation;