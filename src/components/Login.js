import React, { useState } from 'react';
import { firebase, auth } from '../Firebase';

const Login = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
			setfinal(result);
			alert("code sent")
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			// success
		}).catch((err) => {
			alert("Wrong code");
		})
	}

	return (
		<div style={{ "marginTop": "200px" }}>
			<center>
				<div style={{ display: !show ? "block" : "none" }}>
					<h2 style={{marginLeft:"-1rem"}}>Login Now </h2>
					<input value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						placeholder="Enter your phone number" style={{height:"30px",padding:"2px",border:"1px solid grey",width:"20vw",borderRadius:"4px"}}/>
					<br /><br />
					<div id="recaptcha-container"></div>
					<button style={{width:"10vw",height:"4vh",borderRadius:"2px",background:"rgb(33, 77, 209)",color:"white",border:"none"}} onClick={signin}>Send OTP</button>
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input type="text" placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<button style={{width:"10vw"}} onClick={ValidateOtp}>Verify</button>
				</div>
			</center>
		</div>
	);
}

export default Login;
