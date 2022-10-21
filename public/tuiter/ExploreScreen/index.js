import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
	$('#wd-explore').append(`
    	<div class="row mt-2">
<!--	        <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">-->
	        <div id="my-nav-bar" class="wd-col-xs-customize wd-col-sm-customize wd-col-md-customize col-lg-1 col-xl-2 col-xxl-2">
<!--	            NavigationSidebar-->
				${NavigationSidebar("Explore")}
	        </div>
	        <div class="col-10 col-lg-7 col-xl-6 ">
<!--	            ExploreComponent-->
				${ExploreComponent()}
	        </div>
	        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
<!--	        	WhoToFollowList-->
				${WhoToFollowList()}
	        </div>
  		</div>
  		<div> <br> <br> <br></div>
   `);
}
$(exploreComponent);

const setUpNavTriggers = () => {
	var tabs = $('.tab')
	for(let i = 0 ; i < tabs.length ; i++) {
		$(tabs[i]).click(() => {
			let children = $(tabs[i]).children();
			let selectedTab = $(children[1]).html().trim();
			// console.log(selectedTab);
			// console.log($(span).innerHTML + " is clicked");
			$("#my-nav-bar").html(NavigationSidebar(selectedTab))
			setUpNavTriggers();
		})
	}
}
$(document).ready(setUpNavTriggers)



