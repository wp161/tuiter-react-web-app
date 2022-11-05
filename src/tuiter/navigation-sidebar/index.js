import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "./index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = (
	{
		active
	}
) => {
	const {pathname} = useLocation();
	const paths = pathname.split('/')
	// let active = 'explore'
	// I followed the requirement of previous assignments and set explore component as the default page
	// 	(http://localhost:3000/tuiter/ will displays the explore component with "explore" tab selected from the navigation bar)
	if(paths.length > 2 && paths[2] != ''){
		active = paths[2];
	}
	
	return (
		<div>
			<ul className="list-group">
				<div className="list-group-item list-group-item-action">
					<i className="fab fa-twitter fa-1x"></i>
				</div>
					<Link to="/tuiter/home" className={`list-group-item list-group-item-action
					   ${active === 'home' ? 'active' : ''}`}>
						<i className="fa-solid fa-house"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;Home
						</span>
					</Link>
					<Link to="/tuiter/explore" className={`list-group-item list-group-item-action
						   ${active === 'explore' ? 'active' : ''}`}>
						<i className="fa-solid fa-hashtag"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;Explore
						</span>
					</Link>
					<Link to="/tuiter/notifications"className={`list-group-item list-group-item-action
							   ${active === 'notifications' ? 'active' : ''}`}>
						<i className="fa-solid fa-bell"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;Notifications
						</span>
					</Link>
					<Link to="/tuiter/messages"className={`list-group-item list-group-item-action
								   ${active === 'messages' ? 'active' : ''}`}>
						<i className="fa-solid fa-envelope"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;Messages
						</span>
					</Link>
					<Link to="/tuiter/bookmarks"className={`list-group-item list-group-item-action
								   ${active === 'bookmarks' ? 'active' : ''}`}>
						<i className="fa-solid fa-bookmark"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;&nbsp;Bookmarks
						</span>
					</Link>
					<Link to="/tuiter/lists"className={`list-group-item list-group-item-action
								   ${active === 'lists' ? 'active' : ''}`}>
						<i className="fa-solid fa-list"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;Lists
						</span>
					</Link>
					<Link to="/tuiter/profile"className={`list-group-item list-group-item-action
								   ${active === 'profile' ? 'active' : ''}`}>
						<i className="fa-solid fa-user"></i>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;Profile
						</span>
					</Link>
					<Link to="/tuiter/more"className={`list-group-item list-group-item-action
								   ${active === 'more' ? 'active' : ''}`}>
						{/*<span className="fa-stack wd-stacked-icon float-start padding-left: 0px">*/}
							<span className="fa-stack wd-stacked-icon float-start">
							<i className="fa-solid fa-circle fa-stack-1x" style={{"fontSize": "17px"}}></i>
							<i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
						</span>
						<span className="d-none d-xl-inline-flex d-xxl-inline-flex">
							&nbsp;&nbsp;More
						</span>
					</Link>
					<Link to="/" className="list-group-item list-group-item-action">
						Labs
					</Link>
				</ul>
				<button className="btn btn-primary mt-2 w-100 rounded-pill">
					Tuit
				</button>
		</div>
	);
};
export default NavigationSidebar;

