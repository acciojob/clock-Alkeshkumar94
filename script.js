//your JS code here. If required.
let para=document.querySelector("#timer")
function currentTime() {
	let date= new Date();
	let day=date.getDay();
	let month=date.getMonth();
	let min=date.getMinutes();
	let hour=date.getHours();
	let sec=date.getSeconds();
	let year=date.getFullYear();
	let time=hour+":"+min+":"+sec
	para.innerHTML=`${day}/${month}/${year},${time}`
}
setInterval(currentTime,1000);