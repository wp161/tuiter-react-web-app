import React from "react";
import "../index.css"

const GetComment = ({comment, mentioned, position}) => {
	return [
		comment.slice(0, position),
		<span style={{"color": "rgb(56, 140, 205)"}}>
			{mentioned}
		</span>,
		comment.slice(position)

	]
}

const GetPanel = ({img, ttl, ctnt, link}) => {
	if(ttl === ""){
		return (
			<div className="pt-2">
			<img src= {img}
			className="rounded-4 border"
			width='100%'/>
			</div>
		)
	}
	else{
		return (
			<>
			<div className="pt-2">
			<img src= {img}
			className="border"
			style={{borderTopLeftRadius: "1rem",
			borderTopRightRadius: "1rem"}}
			width='100%'/>
			</div>

			<div className=" border"
			style={{borderBottomLeftRadius: "1rem",
				borderBottomRightRadius: "1rem"}}>
				<div className='fs-6 fw-bold pt-2 ps-3 pe-3 pb-2' >
					{ttl}
				</div>
				<div className='text-secondary ps-3 pe-3 pb-2'>
					{ctnt}
				</div>
				<div className='text-secondary ps-3 pe-3 pb-2'>
					{'\uD83D\uDD17'}
 					{link}
				</div>
			</div>
				
				{/*<div className="list-group">*/}
				{/*	<div className="list-group-item px-0 py-0">*/}
				{/*		<img src= {img}*/}
				{/*		     // className="img-fluid"/>*/}
				{/*		     style={{borderTopLeftRadius: "1rem",*/}
				{/*			     borderTopRightRadius: "1rem"}}*/}
				{/*		     width='100%'/>*/}
				{/*		*/}
				{/*	</div>*/}
				{/*	<div className="list-group-item">*/}
				{/*		<div className='fs-6 fw-bold pt-2 ps-3 pe-3 pb-2' >*/}
				{/*			{ttl}*/}
				{/*		</div>*/}
				{/*		<div className='text-secondary ps-3 pe-3 pb-2'>*/}
				{/*			{ctnt}*/}
				{/*		</div>*/}
				{/*		<div className='text-secondary ps-3 pe-3 pb-2'>*/}
				{/*			{'\uD83D\uDD17'}*/}
				{/*			{link}*/}
				{/*		</div>*/}
				{/*	*/}
				{/*	</div>*/}
				{/*</div>*/}
			</>
		)
	}
}

const TuitStats = ({replies, retuits, likes, liked}) => {
	return (
			<div className="row flex-nowrap p-3">
                <div className="col-3">
                	<i className="fa-regular fa-comment text-secondary fs-6"></i>
                    <span className="ps-2 text-secondary"
                    style={{"verticalAlign": "top"}}> {replies} </span>
                </div>
                <div className="col-3">
                	<i className="fa-solid fa-retweet text-secondary fs-6"></i>
                    <span className="ps-2 text-secondary"
                    style={{"verticalAlign": "top"}}> {retuits} </span>
                </div>
                <div className="col-3">
	                {liked && <i className="fa-regular fa-heart text-secondary fs-6 text-danger"></i>}
	                {!liked && <i className="fa-regular fa-heart text-secondary fs-6"></i>}
                    <span className="ps-2 text-secondary"
                    style={{"verticalAlign": "top"}}> {likes} </span>
                </div>
                <div className="col-3">
                	<i className="fa-solid fa-arrow-up-from-bracket fs-6 text-secondary"></i>
                </div>
            </div>
	)
}

const TuitItem = ({tuit: tuit}) => {
	return (
		<li className="list-group-item">
			<div style={{display: "flex"}}>
{/*User Profile Pic Column*/}
				<div className=" wd-col-customize-2">
                	<img className="rounded-circle"
	                     src={tuit.avatar_path} height="40px"/>
             	</div>
             	
{/*Content Column-->*/}
				<div style={{flex: "1"}}>
				
{/*Title and comment-->*/}
					<div className="fw-bolder">
                    	{tuit.userName}
						&nbsp;
						<i className="fa-solid fa-circle-check text-primary"></i>
						&nbsp;
                        <span className="text-secondary fw-normal">
                        	@{tuit.handle} · {tuit.time}
                        </span>
                        
                        <span className="float-end pe-2"
                              style={{"fontWeight": "800"}}>
                        	<i className="fa-solid fa-ellipsis"></i>
						</span>
                    </div>
                    <div>
                    	<GetComment
		                    comment = {tuit.comment}
		                    mentioned = {tuit.mentioned}
	                    position= {tuit.mentioned_position}/>
                    </div>
                    
{/*Picture and url-->*/}
		        <GetPanel
			        img = {tuit.image}
			        ttl = {tuit.title}
			        ctnt = {tuit.content}
			        link = {tuit.url}/>

				<TuitStats
					replies= {tuit.reply_count}
					retuits= {tuit.retuit_count}
					likes= {tuit.liked_count}/>
                </div>
            </div>
        </li>
	)
}


export default TuitItem;