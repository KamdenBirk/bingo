let entryList =  [];
const entry = document.getElementById("entry")
const addEntryButton = document.getElementById("button");

addEntryButton.onclick = add;

function add() {
    entryList.push(entry.textContent);
    saveEntries()
}


const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");
const box10 = document.getElementById("10");
const box11 = document.getElementById("11");
const box12 = document.getElementById("12");
const box14 = document.getElementById("14");
const box15 = document.getElementById("15");
const box16 = document.getElementById("16");
const box17 = document.getElementById("17");
const box18 = document.getElementById("18");
const box19 = document.getElementById("19");
const box20 = document.getElementById("20");
const box21 = document.getElementById("21");
const box22 = document.getElementById("22");
const box23 = document.getElementById("23");
const box24 = document.getElementById("24");
const box25 = document.getElementById("25");

const randButton = document.getElementById("random");

randButton.onclick = randomize;

function randomize() {
    box1.textContent = entryList[Math.random()*entryList.length].textContent
    box2.textContent = entryList[Math.random()*entryList.length].textContent
    box3.textContent = entryList[Math.random()*entryList.length].textContent
    box4.textContent = entryList[Math.random()*entryList.length].textContent
    box5.textContent = entryList[Math.random()*entryList.length].textContent
    box6.textContent = entryList[Math.random()*entryList.length].textContent
    box7.textContent = entryList[Math.random()*entryList.length].textContent
    box8.textContent = entryList[Math.random()*entryList.length].textContent
    box9.textContent = entryList[Math.random()*entryList.length].textContent
    box10.textContent = entryList[Math.random()*entryList.length].textContent
    box11.textContent = entryList[Math.random()*entryList.length].textContent
    box12.textContent = entryList[Math.random()*entryList.length].textContent
    box14.textContent = entryList[Math.random()*entryList.length].textContent
    box15.textContent = entryList[Math.random()*entryList.length].textContent
    box16.textContent = entryList[Math.random()*entryList.length].textContent
    box17.textContent = entryList[Math.random()*entryList.length].textContent
    box18.textContent = entryList[Math.random()*entryList.length].textContent
    box19.textContent = entryList[Math.random()*entryList.length].textContent
    box20.textContent = entryList[Math.random()*entryList.length].textContent
    box21.textContent = entryList[Math.random()*entryList.length].textContent
    box22.textContent = entryList[Math.random()*entryList.length].textContent
    box23.textContent = entryList[Math.random()*entryList.length].textContent
    box24.textContent = entryList[Math.random()*entryList.length].textContent
    box25.textContent = entryList[Math.random()*entryList.length].textContent
}
const saveButton = document.getElementById("save");
saveButton.onclick = save;

function saveEntries() {

}

function save() {
    
}
