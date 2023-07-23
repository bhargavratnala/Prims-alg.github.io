window.addEventListener("scroll", scrollHandler);
let sections = document.getElementsByTagName("section");
let navItems = document.getElementsByClassName("nav-item");
let navItemscreen = document.getElementsByClassName("nav-item-screen");
let nav =document.getElementById("nav");
let navbut = document.getElementById("nav-but");
let followmouse = document.getElementById("followmouse");
let resumeTopics = document.getElementsByClassName("resume-topic");
let active = 0;

function scrollHandler(){
    let scrollHeight = window.scrollY;
    // console.log("scroll height : " + scrollHeight);
    active = 0;
    for(let i=0; i<sections.length; i++){
        let height = sections[i].offsetHeight;
        let offset = sections[i].offsetTop;
        // console.log("-------------------");
        // console.log(offset);
        // console.log(height);
        if(offset <= (scrollHeight+100) && scrollHeight < offset+height && active != 1){
            navItems[i].classList.add("active");
            navItemscreen[i].classList.add("active");
            active = 1;
        }
        else{
            navItems[i].classList.remove("active");
            navItemscreen[i].classList.remove("active");
        }
    }
}

navbut.addEventListener("click", closenav);

function closenav(){
    let navbarscreen = document.getElementById("nav-bar-screen");
    navbarscreen.classList.toggle("close-nav");
}

function toggleData(data, c){
    let resumeData = document.getElementById("resume-data");
    resumeData.className = 'resume-data ' + data;
    for(let i=0; i<resumeTopics.length; i++){
        if(i==c){
            resumeTopics[i].className = 'resume-topic resume-active';
        }
        else{
            resumeTopics[i].className = 'resume-topic';
        }
    }
}

window.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let tx = window.innerWidth;
    let ty = window.innerHeight;
    let px = (x/tx)*100 + "%"
    let py = (y/ty)*100 + "%"
    followmouse.style.left = px;
    followmouse.style.top = py;
})

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loading").style.display = 'none';
})