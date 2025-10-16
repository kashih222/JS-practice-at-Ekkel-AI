// toggle practice using line through
let ul = document.querySelector("ul")
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt")
})



// live word counter using addEventListener input
let textarea = document.querySelector("textarea");
let span = document.querySelector("span");
let btn = document.querySelector("#submit-btn")
textarea.addEventListener("input", function(dets){
    span.textContent=textarea.value.length;

    if (textarea.value.length>20) {
        span.style.color="red"
        btn.disabled=true;
    }else{
        span.style.color="black"
        btn.disabled=false;
    }
})





