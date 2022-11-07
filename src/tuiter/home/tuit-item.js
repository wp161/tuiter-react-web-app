import React from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitStats = ({replies, retuits, likes, liked}) => {
	return (
		<div className="row flex-nowrap pt-2">
			<div className="col-3">
				<i className="fa-regular fa-comment  fs-6 fw-light"/>
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {replies} </span>
			</div>
			<div className="col-3">
				<i className="fa-solid fa-arrows-rotate  fs-6"/>
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {retuits} </span>
			</div>
			<div className="col-3">
				{liked && <i className="fa-solid fa-heart  fs-6 text-danger"/>}
				{!liked && <i className="fa-regular fa-heart  fs-6 fw-light"/>}
				<span className="ps-2 "
				      style={{"verticalAlign": "top"}}> {likes} </span>
			</div>
			<div className="col-3">
				<i className="fa-solid fa-arrow-up-from-bracket fs-6 "/>
			</div>
		</div>
	)
}

const TuitItem = ({tuit: tuit}) => {
	
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id));
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
						replies= {tuit.replies}
						retuits= {tuit.retuits}
						likes= {tuit.likes}
						liked= {tuit.liked}/>
				</div>
			</div>
		</li>
	)
}


export default TuitItem;