const body=document.querySelector("body"),
hour=document.querySelector(".hour"),
min=document.querySelector(".min"),
sec=document.querySelector(".sec"),
modeswitch=document.querySelector(".mode-switch");

if(localStorage.getItem("mode")==="Dark Mode"){
    body.classList.add("dark");
    modeswitch.textContent="Light Mode";
}


modeswitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
    const isDarkMode=body.classList.contains("dark");
    modeswitch.textContent=isDarkMode?"Light Mode":"Dark Mode";
    localStorage.setItem("mode",isDarkMode?"Dark Mode":"Light Mode");
})
const updateTime=()=>{
    // console.log("time");
    let date=new Date(),
    secToDeg=(date.getSeconds()/60)*360,
    minToDeg=(date.getMinutes()/60)*360,
    hrToDeg=(date.getHours()/12)*360;
    sec.style.transform=`rotate(${secToDeg}deg)`
    min.style.transform=`rotate(${minToDeg}deg)`
    hour.style.transform=`rotate(${hrToDeg}deg)`
}
setInterval(updateTime,10);
updateTime;