const allBtns = document.querySelectorAll(".drum-pad");
const display = document.getElementById('display');

allBtns.forEach(btn=> {
	const currentKey = btn.querySelector('audio').id; 
	btn.addEventListener('click', ()=>{
		playSong(currentKey);
		display.textContent = btn.id.replace(/[-_]/g , (m)=> " ");
		setTimeout(() => {
			display.textContent = "";
		}, 5000);
	})
})


document.addEventListener('keydown', e=>{
	if (/[qweasdzxc]/i.test(e.key)){
		const uppCase = e.key.toUpperCase();
		const currElement = document.getElementById(uppCase);
		const btn = currElement.parentElement;
		playSong(uppCase);
		display.textContent = btn.id.replace(/[-_]/g , (m)=> " ");
		btn.classList.add("drum-pad-active");
		setTimeout(()=>{
			btn.classList.remove("drum-pad-active");
			display.textContent = "";
		}, 150);
	}
})

function playSong(key) {
	const audioEl = document.getElementById(key);
	audioEl.currentTime = 0;
	audioEl.play()
}