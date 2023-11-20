preloder
setTimeout(() => {
    document.getElementById("preloder").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
}, 2000);

let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let bgbody = document.querySelector(".bg-bodys");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("showme")
    menubar.classList.toggle("max-xl:-left-[100%]")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    bgbody.classList.toggle("over-flow")
})

finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.toggle("showme")
        menubar.classList.toggle("max-xl:-left-[100%]")
        fix1.classList.toggle("fixer1")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        bgbody.classList.toggle("over-flow")
    })
});