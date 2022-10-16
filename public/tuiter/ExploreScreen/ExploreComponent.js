import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
	return(`
    	<div class="row">
            <!--\tSearch & Gear-->
        	<div class="col-11">
                    <div class="position-relative">
                        <i class="position-absolute fa-solid fa-magnifying-glass"
                           style="bottom: 10px; left: 17px"></i>
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter">
                    </div>
                </div>
            <div class="col-1">
                    <i class="fa-solid fa-gear float-end"
                       style=" padding-top: 0.2rem; font-size: 2.1em; color: rgb(56,140,205); vertical-align: middle;"></i>
                </div>
        </div>
	    <!--\tTabs  -->
	    <ul class="nav nav-tabs mt-2 mb-2">
	        <li class="nav-item">
	                    <a class="nav-link active" href="for-you.html">For You</a>
	                </li>
	        <li class="nav-item">
	                    <a class="nav-link" href="trending.html">Trending</a>
	                </li>
	        <li class="nav-item">
	                    <a class="nav-link" href="news.html">News</a>
	                </li>
	        <li class="nav-item">
	                    <a class="nav-link" href="sports.html">Sports</a>
	                </li>
	        <li class="nav-item d-none d-md-block">
	                    <a class="nav-link" href="entertainment.html">Entertainment</a>
	                </li>
	    </ul>
        <!-- Starship Pic with overlaid text -->
        <div class="position-relative">
            <img src="../../images/starship.jpg" width="100%">
            <h1 class="position-absolute bottom-0 text-white" style="left:15px">
                SpaceX's Starship
            </h1>
        </div>
        ${PostSummaryList()}
    `);
}

$('#explore-component').append(`
	${ExploreComponent()}
`);

export default ExploreComponent;
