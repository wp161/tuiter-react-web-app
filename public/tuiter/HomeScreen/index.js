import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function HomeScreenComponent() {
	$('#wd-homescreen').append(`
    	<div class="row mt-2">
<!--	        <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">-->
	        <div id="my-nav-bar" class="wd-col-xs-customize wd-col-sm-customize wd-col-md-customize col-lg-1 col-xl-2 col-xxl-2">
<!--	            NavigationSidebar-->
				${NavigationSidebar("Home")}
	        </div>
	        <div class="col-10 col-lg-7 col-xl-6 ">
<!--	        	PostList-->
				${PostList()}
	        </div>
	        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
<!--				PostSummaryList-->
				${PostSummaryList()}
	        </div>
  		</div>
   `);
}

$(HomeScreenComponent);

const setUpNavTriggers = () => {
	var tabs = $('.tab')
	for(let i = 0 ; i < tabs.length ; i++) {
		$(tabs[i]).click(() => {
			let children = $(tabs[i]).children();
			let selectedTab = $(children[1]).html().trim();
			// console.log($(span).innerHTML + " is clicked");
			$("#my-nav-bar").html(NavigationSidebar(selectedTab))
			setUpNavTriggers();
		})
	}
}
$(document).ready(setUpNavTriggers)

export default HomeScreenComponent;
