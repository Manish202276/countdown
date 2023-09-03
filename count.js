const enddate="5 December 2023 09:00 AM"
document.querySelector(".head3").innerHTML=enddate
const select=document.querySelectorAll("input")

function clock(){
    const end=new Date(enddate);
    const currtime=new Date();
    diff=end-currtime;
    seconds=diff/1000;
    day=Math.floor(seconds/3600/24);
    select[0].value=day;
    hour=Math.floor(seconds/3600%24);
    select[1].value=hour;
    minutes=Math.floor(seconds/60%60);
    select[2].value=minutes;
    select[3].value=Math.floor(seconds%60)
}
setInterval(
    ()=>{
        clock()
    },
1000);