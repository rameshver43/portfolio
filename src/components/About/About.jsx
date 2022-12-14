import React from "react";
import "./About.css";
import Paper from "@material-ui/core/Paper";
import AboutMore from "./components/AboutMore/AboutMore";
import Box from "@material-ui/core/Box";
const Intro = () => {
	return (
		<Box className="about" id="about">
			<div className="aboutheading">About</div>
			<div className="i-left">
				<div className="i-name">
					I am Rameshver. I am from Meerut. I have completed B.Tech from IIT
					Jodhpur with the department of Computer Science & Engineering. I
					interest includes competetive coding. I have good knowledge of C++,
					React, JavaScript and Pyhton. I am a passionate coder with a creative
					mind. I love problem-solving and coming up with innovative solutions
					to problems. My aim is to make the world better in every way I can, by
					the use of technology and innovation. Currently I am working in
					Samsung Research Institute Delhi as Software Developemt Engineer. I am
					working on Desktop application using dot net. I am also working on
					website as fullstack developer. I am looking forward to hear from you
					any suggestion or any guidence.
				</div>
				<AboutMore />
			</div>
			<div className="i-right"></div>
		</Box>
	);
};

export default Intro;
