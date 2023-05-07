function copyText()
{
    console.log("copyed");
    navigator.clipboard.writeText("9989215406");
}
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