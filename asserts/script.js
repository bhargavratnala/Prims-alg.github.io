let more = document.getElementById("more");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let navList = document.getElementById("navList");
more.addEventListener("click", ()=>{
    line1.classList.toggle("cross");
    line2.classList.toggle("cross");
    line3.classList.toggle("cross");
    navList.classList.toggle("nav-visible");
});
function openlive(url){
    let frame = document.getElementById("pro-frame");
    let framebut = document.getElementById("proframeclosebut");
    frame.classList.remove("close");
    framebut.classList.remove("close");
    frame.setAttribute("src", url);
}
function closeproframe(){
    let frame = document.getElementById("pro-frame");
    let framebut = document.getElementById("proframeclosebut");
    frame.classList.add("close");
    framebut.classList.add("close");
}

const observer = new IntersectionObserver(entry =>{
    console.log(entry)
    entry.forEach(e=>{
        console.log(e)
        if(e.isIntersecting){
            e.target.classList.add("show-project-card");
        }
        else{
            e.target.classList.remove("show-project-card");
        }
    })
})
const elements = document.getElementsByClassName("project-card");
for(i=0; i<elements.length; i++)
observer.observe(elements[i]);