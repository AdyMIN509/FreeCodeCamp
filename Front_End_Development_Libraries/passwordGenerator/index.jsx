const { useState, useEffect, useRef } = React;

const OTP_LIFETIME = 260;

export const OTPGenerator = () => {

	const [otp, setOtp] = useState('');
	const [timeLeft, setTimeLeft] = useState(null);

	let isActive = timeLeft !== null && timeLeft > 0;
	let isExpired = timeLeft === 0;

	let timerMessage = '';
	if(isActive) timerMessage = `Expires in: ${timeLeft} seconds`;
	if(isExpired) timerMessage = "OTP expired. Click the button to generate a new OTP."

	useEffect(()=>{
		if(timeLeft === null || timeLeft <= 0) return;
		const tick = setTimeout(()=>setTimeLeft(t=>t-1), 1000);
		return ()=> clearTimeout(tick);
	},[timeLeft])

	const handleSubmit = () => {
		setOtp(makeOtp());
		setTimeLeft(OTP_LIFETIME);
	}
	return (
		<div className="container">
			<h1 id="otp-title">OTP Generator</h1>
			<h2 id="otp-display">
				{otp || "Click 'Generate OTP' to get a code"}
			</h2>
			<p id="otp-timer" aria-live="polite">
				{timerMessage}
			</p>
			<button
				id="generate-otp"
				disabled={isActive}
				onClick={handleSubmit}
			>
				Generate OTP
			</button>
		</div>
	)
};

function makeOtp() {
	return Math.floor(Math.random() * 899999 + 100000);
}