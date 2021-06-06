const digital_clcok = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let clockFormat = "AM";
if (hours == 0) {
    hours = 12;
}
else if(hours > 12){
    hours = hours - 12;
    clockFormat = 'PM'
}
hours = hours < 10 ?  "0"  +hours : hours
minutes = minutes < 10 ?  "0" + minutes : minutes
seconds = seconds < 10 ?  "0" + seconds : seconds

let finaltime = `${hours}:${minutes}:${seconds}`
document.querySelector('#time').innerText = finaltime;
document.querySelector('small').innerText = clockFormat;
setInterval(digital_clcok, 1000)


}
digital_clcok()
