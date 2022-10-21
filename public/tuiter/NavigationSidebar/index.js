var currentActiveTab = null;

const NavigationSidebar = (active) => {
// 	const tabs = ["Home", "Explore", "Notifications","Messages", "Bookmarks","Lists", "Profile", "More"];
// 	const icon_class = ["fa-house","fa-hashtag", "fa-bell", "fa-envelope", "fa-bookmark", "fa-list", "fa-user"]
//
// 	let html = ""
// 	currentActiveTab = active;
// 	for(let i = 0 ; i < tabs.length ;i++) {
// 		let a_class = "list-group-item list-group-item-action"
// 		let link = "#"
// 		if (tabs[i] === "Home") {
// 			link = "../HomeScreen/index.html"
// 		}
// 		else if (tabs[i] === "Explore") {
// 			link = "../ExploreScreen/index.html"
// 		}
// 		if (tabs[i] === active) {
// 			a_class += " active";
// 		}
// 		if (tabs[i] == "More") {
// 			html += `<a href="#"
// 			   class="${a_class} tab">
// 					<span class="fa-stack wd-stacked-icon">
// 						<i class="fa-solid fa-circle fa-stack-1x"
// 						   style="font-size: 15px;"></i>
// 						<i class="fa-solid fa-ellipsis fa-stack-1x"
// 						   style="color: black"></i>
// 					</span>
// 					<span class="d-none d-xl-inline-flex d-xxl-inline-flex">
// 						More
// 					</span>
// 			</a>
// `
// 		} else {
// 			html += `<a href="${link}" class="${a_class} tab">
// 				<i class="fa-solid ${icon_class[i]}"></i>
// 			<span class="d-none d-xl-inline-flex d-xxl-inline-flex">${tabs[i]}</span>
// 					</a>`
// 		}
// 	}
//
//
// 	return (`		<ul class="list-group">
// 			<div class="list-group-item list-group-item-action">
// 				<i class="fab fa-twitter fa-1x"></i>
// 			</div> ${html}			</ul>
// 			<button class="btn btn-primary mt-2 w-100 rounded-pill">
// 				Tuit
// 			</button>`)
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
						<i class="fa-solid fa-circle fa-stack-1x" style="font-size: 15px;"></i>
						<i class="fa-solid fa-ellipsis fa-stack-1x" style="color: black"></i>
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

$('#navigation-sidebar').append(`
	${NavigationSidebar("Explore")}
`);

export default NavigationSidebar;