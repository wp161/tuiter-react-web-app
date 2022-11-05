import {Link}
	from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar
	from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import "./explore/index.css";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import {Provider} from "react-redux";
import postsReducer from "./reducers/summary-reducer";
import tuitsReducer from "./reducers/tuits-reducer";

const store = configureStore(
	{
		reducer: {
			who: whoReducer,
			posts: postsReducer,
			tuits: tuitsReducer
		}
	}
)

function Tuiter() {
	return (
		<Provider store={store}>
			<div className="row mt-2">
				{/*<div className="wd-col-xs-customize wd-col-sm-customize wd-col-md-customize col-lg-1 col-xl-2 col-xxl-2">*/}
				<div className="wd-col-xs-customize wd-col-sm-customize wd-col-md-customize col-lg-1 col-xl-2 col-xxl-2">
					{/*<NavigationSidebar active="explore"/>*/}
					<NavigationSidebar active="home"/>
				</div>
				<div className="col-10 col-lg-7 col-xl-6"
				     style={{"position": "relative"}}>
					<Routes>
						{/*<Route index element={<ExploreComponent/>}></Route>*/}
						<Route index element={<HomeComponent/>}></Route>
						<Route path="home"    element={<HomeComponent/>}/>
						<Route path="explore" element={<ExploreComponent/>}/>
					</Routes>
				</div>
				<div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
					<WhoToFollowList/>
				</div>
			</div>
		</Provider>
	)
}

export default Tuiter