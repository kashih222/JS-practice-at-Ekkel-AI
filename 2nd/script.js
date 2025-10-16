// toggle practice using line through
let ul = document.querySelector("ul")
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt")
})



// live word counter using addEventListener input
let textarea = document.querySelector("textarea");
let span = document.querySelector("span");
textarea.addEventListener("input", function(dets){
    console.log(textarea.value.length)
    span.textContent=textarea.value.length
})


