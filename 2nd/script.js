// // toggle practice using line through
// let ul = document.querySelector("ul")
// ul.addEventListener("click", function(dets){
//     dets.target.classList.toggle("lt")
// })



// // live word counter using addEventListener input
// let textarea = document.querySelector("textarea");
// let span = document.querySelector("span");
// let btn = document.querySelector("#submit-btn")
// textarea.addEventListener("input", function(dets){
//     span.textContent=textarea.value.length;

//     if (textarea.value.length>20) {
//         span.style.color="red"
//         btn.disabled=true;
//     }else{
//         span.style.color="black"
//         btn.disabled=false;
//     }
// })


// Form Validation 
let form = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let pass = document.querySelector("#password")
form.addEventListener("submit", function(dets){
    dets.preventDefault();
    console.log(email.value);
    console.log(pass.value);

    let emailError = document.querySelector("#emailError").textContent="";
    let passError = document.querySelector("#passwordError").textContent="";

    const mailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const strongPwdRegex = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    let mailAns = mailRegex.test(email.value);
    let paswdAns = strongPwdRegex.test(pass.value);
    
    isValid = true;

    if(!mailAns){
        document.querySelector("#emailError").textContent="Mail is Encorrect";
        document.querySelector("#emailError").style.display="initial";
        isValid = false;
    }
    if (!paswdAns) {
        document.querySelector("#passwordError").textContent="Password is Incorrect";
        document.querySelector("#passwordError").style.display="initial";
        isValid = false;
    }

    if (isValid == true) {
        document.querySelector(".result").textContent="EveryThing Is Correct"
    }

})

