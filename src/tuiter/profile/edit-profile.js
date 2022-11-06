import React, {useState} from "react";
import "./index.css"
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
	
	const profile = useSelector(state => state.profile);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const navigateProfile = () => {
		navigate('/tuiter/profile');
	};
	
	
	const [currentbio, setCurrentbio] = useState(profile.bio)
	const [currentName, setcurrentName] = useState(profile.firstName + " " + profile.lastName)
	const [currentLocation, setCurrentLocation] = useState(profile.location)
	const [currentWebsite, setCurrentWebsite] = useState(profile.website)
	const [currentDOB, setCurrentDOB] = useState(profile.dateOfBirth)
	const [editing, setEditing] = useState(false);
	
	const saveButtonHandler = () => {
		const currentProfile = {
			firstName: currentName.split(" ")[0],
			lastName: currentName.split(" ")[1],
			location: currentLocation,
			bio: currentbio,
			dateOfBirth: currentDOB,
			website: currentWebsite
		}
		dispatch(saveProfile(currentProfile))
		navigate('/tuiter/profile')
	}
	
	const ClickEditHandler = () => {
		console.log("before " + editing)
		setEditing(!editing)
		console.log("after " + editing)
	}
	
	
	return (
		<>
			<div className="border list-group wd-border">
				{/*Title, close button, and save button */}
				<div className="row mb-3 mt-3">
					<div className="col-2">
						<i className="fa-solid fa-xmark ms-5 mt-2 fs-3"
						onClick={navigateProfile}></i>
					</div>
					<div className="col-10">
						<span className="fs-3 fw-semibold">
							Edit profile
						</span>
						<button
							className="btn rounded-pill text-white bg-dark ps-3 pe-3 me-3 float-end"
							onClick={saveButtonHandler}>
							Save
						</button>
					</div>
				</div>
				
				{/*Banner, profile pic*/}
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
					<br/><br/><br/>
				</div>
				<span className=".d-none .d-lg-block">
					<br/>
				</span>
				
				{/*Input fields*/}
				<div className="ps-3 pe-3">
					
					{/*Name*/}
					<form className="form-floating">
						<input className="form-control"
						       id="floatingInputValue"
						       onChange={(event) => setcurrentName(event.target.value)}
						       placeholder="e.g. Jane Doe"
						       value={currentName}/>
						<label htmlFor="floatingInputValue">
							Name
						</label>
					</form>
					
					{/*Bio*/}
					<form className="form-floating mt-4 mb-4">
						<textarea className="form-control"
						          id="floatingInputValue"
						          onChange={(event) => setCurrentbio(event.target.value)}
						          value={currentbio}
						          style={{height: "100px"}}/>
						<label htmlFor="floatingInputValue">
							Bio
						</label>
					</form>
					
					{/*Location*/}
					<form className="form-floating mt-4 mb-4">
						<input className="form-control"
						       id="floatingInputValue"
						       onChange={(event) => setCurrentLocation(event.target.value)}
						       placeholder="e.g. New York, NY"
						       value={currentLocation}/>
						<label htmlFor="floatingInputValue">
							Location
						</label>
					</form>
					
					{/*Website*/}
					<input className="form-control pt-3 pb-3"
					       id="floatingInputValue"
					       onChange={(event) => setCurrentWebsite(event.target.value)}
					       placeholder="Website"
					       value={currentWebsite}/>
					<label htmlFor="floatingInputValue">
					</label>
					
					{/*Birthdate*/}
					<div className="ms-1 mb-3 wd-small-font text-secondary">
						Birth date · &nbsp;
						<span className="text-primary"
						onClick={ClickEditHandler}>
							Edit
						</span>
						{editing && <input
							id="birthdate"
							onChange={(event) => setCurrentDOB(event.target.value)}
							type="date"/>}
						<div className="text-dark fs-5">
							{currentDOB}
						</div>
					</div>
				
				</div>
			</div>
		</>
	);
}

export default EditProfileComponent