import tuits from "./tuits.js";
import tabs from "./tabs.js";

function mainContent() {
	return (`
		<div class="row">
        <!--Search-->
        	<div class="col-11">
            	<div class="position-relative">
                	<i class="position-absolute fa-solid fa-magnifying-glass"
                           style="bottom: 10px; left: 17px"></i>
                    	<input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter">
                </div>
            </div>
            <div class="col-1">
                <i class="fa-solid fa-gear float-end"
                       style=" padding-top: 0.2rem; font-size: 2.1em; color: rgb(52,83,253); vertical-align: middle;"></i>
                </div>
            </div>

	<!--\tTabs  -->
		${tabs()}

<!--\tContent sec-->
<!--\tStarship Pic-->
            <div class="position-relative">
                <img src="../../images/starship.jpg" width="100%">
                <h1 class="position-absolute bottom-0 text-white" style="left:15px">
                \tSpaceX's Starship
                </h1>
            </div>
            <!--\tList of contents-->
	<ul class="list-group" style="border-top-left-radius: 0px; border-top-right-radius: 0px;">
		${
			tuits.map(tuit => (`
				<li class="list-group-item ">
                    <div class="row">
                        <div class=" col-9 col-md-10 ">
                            <div class="text-secondary">
                            ${tuit.title}
                            </div>
                            <div class="fw-bolder">
                            ${tuit.topic} <i class="fa-solid fa-circle-check"></i>
                                <span class="text-secondary fw-normal">
                                    - 2h
                                </span>

                            </div>
                            <div class="fw-bolder">
                            ${tuit.tuit}
                            </div>
                        </div>
                        <div class=" col-3 col-md-2 ">
                            <img class="float-end  rounded-4"
                                 src="../../images/react.svg" height="90px">
                        </div>
                    </div>
                </li>
			
			`) ).join("")
		
	}

            </ul>
	`)
}

export default mainContent;