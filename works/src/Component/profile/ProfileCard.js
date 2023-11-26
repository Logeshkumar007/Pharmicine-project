import React from "react";
import "./ProfileCard.css";
import avatar from '../imagesh/image-diabi.png';

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src='https://static.thenounproject.com/png/3039079-200.png' alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name}
			</h1>
			<h2 className="normal-text">{props.email}</h2>
			<div className="social-container">
				<div className="likes">
					<h1 className="bold-text">Coimbatore</h1>
					<h2 className="smaller-text">Location</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">{props.phn}</h1>
					<h2 className="smaller-text">Phone</h2>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
