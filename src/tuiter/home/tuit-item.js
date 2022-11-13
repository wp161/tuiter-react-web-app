import React from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
	const dispatch = useDispatch();
	
	return (
		<div className="row flex-nowrap pt-2">
			{/*replies*/}
			<div className="col-3">
				<i className="fa-regular fa-comment  fs-6 fw-light"/>
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {tuit.replies} </span>
			</div>
			{/*retuits*/}
			<div className="col-3">
				<i className="fa-solid fa-arrows-rotate  fs-6"/>
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {tuit.retuits} </span>
			</div>
			{/*likes*/}
			<div className="col-3">
				{/*cancel like*/}
				{tuit.liked && <i onClick={() => dispatch(updateTuitThunk({
					...tuit,
					likes: tuit.likes - 1,
					liked: false,
				}))}
					className="fa-solid fa-heart  fs-6 text-danger"/>}
				{/*likes a tuit*/}
				{!tuit.liked && <i onClick={() => dispatch(updateTuitThunk({
					...tuit,
					likes: tuit.likes + 1,
					liked: true,
				}))}
					className="fa-regular fa-heart  fs-6 fw-light"/>}
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {tuit.likes} </span>
			</div>
			{/*dislikes*/}
			<div className="col-3">
				{/*cancel dislike*/}
				{tuit.disliked && <i onClick={() => dispatch(updateTuitThunk({
					...tuit,
					dislikes: tuit.dislikes - 1,
					disliked: false,
				}))}
				                  className="fa-regular fa-thumbs-down  fs-6 text-primary"/>}
				{/*dislike a tuit*/}
				{!tuit.disliked && <i onClick={() => dispatch(updateTuitThunk({
					...tuit,
					dislikes: tuit.dislikes + 1,
					disliked: true,
				}))}
				                   className="fa-regular fa-thumbs-down  fs-6 fw-light"/>}
				{/*<i className="fa-regular fa-thumbs-down fs-6 "/>*/}
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {tuit.dislikes} </span>
			</div>
			{/*share*/}
			{/*<div className="col-3">*/}
			{/*	<i className="fa-solid fa-arrow-up-from-bracket fs-6 "/>*/}
			{/*</div>*/}
		</div>
	)
}

const TuitItem = ({tuit: tuit}) => {
	
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		// dispatch(deleteTuit(id));
		dispatch(deleteTuitThunk(id));
	}
	
	return (
		<li className="list-group-item">
			<div style={{display: "flex"}}>
				{/*User Profile Pic Column*/}
				<div className=" wd-col-customize-2">
					<img className="rounded-circle"
					     src={tuit.image} height="40px"/>
				</div>
				
				{/*Content Column-->*/}
				<div style={{flex: "1"}}>
					
					{/*Username, handle, and time-->*/}
					<div className="fw-bolder">
						{tuit.userName}
						&nbsp;&nbsp;
						<i className="fa-solid fa-circle-check text-primary"/>
						&nbsp;&nbsp;
						<span className=" fw-normal">
                        	{tuit.handle} · {tuit.time}
                        </span>
						{/*<span className="float-end">*/}
							<i className="bi bi-x-lg float-end"
							   onClick={() => deleteTuitHandler(tuit._id)}/>
						{/*</span>*/}
					</div>
					
					{tuit.content}
					
					<TuitStats
						tuit={tuit}/>
						{/*replies= {tuit.replies}*/}
						{/*retuits= {tuit.retuits}*/}
						{/*likes= {tuit.likes}*/}
						{/*liked= {tuit.liked}/>*/}
				</div>
			</div>
		</li>
	)
}


export default TuitItem;