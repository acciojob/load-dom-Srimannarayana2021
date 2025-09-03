//your JS code here. If required.

document.addEventListener("DOMContentLoaded" ,(e)=>{
	// console.log("DOM load success");
	const msg = document.createElement("div");
	msg.textContent = "DOM load success";
	document.body.appendChild(msg);
});