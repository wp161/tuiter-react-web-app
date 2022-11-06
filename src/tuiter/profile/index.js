import React, {useState} from "react";
import user from '../data/profile.json';
import "./index.css"
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
	
	
	const profile = useSelector(state => state.profile);
	const navigate = useNavigate();
	
	const navigateEditProfile = () => {
		navigate('/tuiter/edit-profile');
	};
	
	return (
		<>
			<div className="border list-group wd-border">
					{/*Username, back arrow, and num of tuits*/}
				<div className="row mb-1 mt-1">
					<div className="col-2 pt-4 ps-5">
						<i className="fa-solid fa-arrow-left fs-4"></i>
					</div>
					<div className="col-10">
						<span className="fs-3 fw-semibold">
							{profile.firstName} {profile.lastName}
						</span>
						<div className="text-secondary">
							{profile.tuitsCount} Tweets
						</div>
					</div>
				</div>
					
					{/*Banner, profile pic, and edit profile button*/}
				<div>
					<div className="wd-pos-relative">
						<img className="wd-no-padding "
						     src={profile.bannerPicture} width="100%"/>
						<div className="wd-profile-position-xxl wd-profile-position-xl
						 wd-profile-position-l wd-profile-position-m
						 wd-profile-position-sm wd-profile-position-xs">
							<img className="rounded-circle"
							     src={profile.profilePicture} height="150px"/>
						</div>
					</div>
					<button className="btn rounded-pill fw-bold border float-end m-2 ps-3 pe-3"
					onClick={navigateEditProfile}>
						Edit profile
					</button>
				</div>
				<span className=".d-none .d-lg-block">
					<br/>
				</span>
				
				{/*Username, handle, and bio*/}
				<div className="ps-4 pe-4">
					<div className="fw-bold fs-5">
						{profile.firstName} {profile.lastName}
					</div>
					<div className="text-secondary">
						{profile.handle}
					</div>
					<div className="mt-2 mb-2">
						{profile.bio}
					</div>
				</div>
			
				{/*User demographic info*/}
				<div className="ps-4 pe-4  text-secondary">
					<span className="me-3">
						<i className="fa-regular fa-map"></i>
						<span className=" "
						      style={{"verticalAlign": "top"}}> {profile.location} </span>
					</span>
					<span className="me-3">
						<i className="fa-solid fa-cake-candles"></i>
						<span className=" "
						      style={{"verticalAlign": "top"}}> Born {profile.dateOfBirth} </span>
					</span>
					<span className="me-3">
						<i className="fa-solid fa-calendar-days"></i>
						<span className=" "
						      style={{"verticalAlign": "top"}}> Joined {profile.dateJoined} </span>
					</span>
				</div>
				
				{/*User Stats*/}
				<div className="ps-4 pe-4 mt-2 mb-3 text-secondary">
					<span className="fw-bold text-dark">
						{profile.followingCount}
					</span>
					  &nbsp;&nbsp;Following&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="fw-bold text-dark">
						{profile.followersCount}
					</span>
					&nbsp;&nbsp;Followers
				</div>
			</div>
		</>
	);
}

export default ProfileComponent