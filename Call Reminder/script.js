let closs = document.querySelector(".closs");
let formdiv = document.querySelector(".form-div");
let addicon = document.querySelector(".plus");
let form = document.getElementById("myForm");
let submit = document.querySelector(".submit");

let img = document.querySelector("image");
let name = document.querySelector("name")
let category = document.querySelector("category");
let callreason = document.querySelector("callreason")
let disc = document.querySelector("disc")
let date = document.querySelector("date")
let container = document.querySelector(".container")
let arrowUpBtn = document.querySelector('.arrowUp');
let arrowDownBtn = document.querySelector('.arrowDown');
let activeIndex = -1;
const STORAGE_KEY = 'your_key_name';

function generateId(){
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,9);
}

closs.addEventListener("click", function () {
    formdiv.style.display = "none";
})

addicon.addEventListener("click", function () {
    formdiv.style.display = "initial";
})

function createCard(dets) {
    const card = document.createElement("div");
    card.className = "card";

    if(!dets.id) dets.id = generateId();
    card.dataset.id = dets.id;
    const imageDiv = document.createElement("div");
    imageDiv.className = "image-div";

    const img = document.createElement("img");
    img.className = "Image";
    img.src = dets.imageurl;
    img.alt = "Card-img";
    imageDiv.appendChild(img);

    const nameCateDiv = document.createElement("div");
    nameCateDiv.className = "name-cate";

    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.textContent = dets.name;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";
    categoryDiv.textContent = dets.category;

    nameCateDiv.append(nameDiv, categoryDiv);

    const callReasonDiv = document.createElement("div");
    callReasonDiv.className = "call-reason";

    const callReasonSpan = document.createElement("span");
    callReasonSpan.className = "callreason";
    callReasonSpan.textContent = dets.callreason;

    callReasonDiv.innerHTML = `&quot;`;
    callReasonDiv.appendChild(callReasonSpan);
    callReasonDiv.innerHTML += `&quot;`;

    const discDiv = document.createElement("div");
    discDiv.className = "disc";
    discDiv.textContent = dets.disc || dets.description || "";

    const dateDiv = document.createElement("div");
    dateDiv.className = "date-div";

    const dateInput = document.createElement("p");
    dateInput.className = "date";
    dateInput.textContent=dets.date;

    dateDiv.appendChild(dateInput);

    card.append(imageDiv, nameCateDiv, callReasonDiv, discDiv, dateDiv);

    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.type = 'button';
    del.textContent = 'Delete';
    del.addEventListener('click', function(e){
        e.stopPropagation();
        deleteCard(dets.id);
    });
    card.appendChild(del);

    container.appendChild(card);
    const cardsNow = document.querySelectorAll('.card');
    activeIndex = cardsNow.length - 1;
    updateDeck();
    console.log(dets);
    
}


window.addEventListener("DOMContentLoaded", () => {
    let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let changed = false;
    savedData = savedData.map(d => {
        if(!d.id){ d.id = generateId(); changed = true; }
        return d;
    });
    if(changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    savedData.forEach(dets => createCard(dets));
    updateDeck();
});

function deleteCard(id){
    let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const idx = savedData.findIndex(it => it.id === id);
    if(idx !== -1){
        savedData.splice(idx,1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
    }

    const node = document.querySelector(`.card[data-id="${id}"]`);
    if(node) node.remove();


    const cards = Array.from(document.querySelectorAll('.card'));
    if(cards.length === 0){ activeIndex = -1; }
    else if(activeIndex > cards.length - 1) activeIndex = cards.length - 1;
    updateDeck();
}

function updateDeck(){
    const cards = Array.from(document.querySelectorAll('.card'));

    cards.forEach(c => c.classList.remove('is-top','stack-1','stack-2'));
    if(cards.length === 0){
        activeIndex = -1;
        return;
    }

    if(activeIndex < 0 || activeIndex > cards.length - 1){
        activeIndex = cards.length - 1;
    }

    cards.forEach((c, i) => {
        if(i === activeIndex) c.classList.add('is-top');
        if(i === activeIndex - 1) c.classList.add('stack-1');
        if(i === activeIndex - 2) c.classList.add('stack-2');
    });
}

function showNextCard(){
    const cards = document.querySelectorAll('.card');
    if(cards.length === 0) return;
    activeIndex = (activeIndex + 1) % cards.length;
    updateDeck();
}

function showPrevCard(){
    const cards = document.querySelectorAll('.card');
    if(cards.length === 0) return;
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateDeck();
}

if(arrowUpBtn) arrowUpBtn.addEventListener('click', showNextCard);
if(arrowDownBtn) arrowDownBtn.addEventListener('click', showPrevCard);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);

    let imageurl = data.img_url?.trim() || "";
    let name = data.name?.trim() || "";
    let category = data.category?.trim() || "";
    let description = data.descr?.trim() || "";
    let callreason = data.call_reason?.trim() || "";
    let date = data.date?.trim() || "";

    if (imageurl === "" ||
        name === "" ||
        category === "" ||
        description === "" ||
        callreason === "" ||
        date === "") {
        alert("Please Fill The All Fields First");
        return;
    }

    const entry = { id: generateId(), imageurl, name, category, description, callreason, date };

    let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!Array.isArray(savedData)) savedData = [];

    savedData.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));

    alert("Form data saved successfully!");
    console.log(localStorage);

    createCard(entry);

    form.reset();

});

