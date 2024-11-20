let entryList =  [
    document.getElementById("entry1"),
    document.getElementById("entry2"),
    document.getElementById("entry3"),
    document.getElementById("entry4"),
    document.getElementById("entry5"),
    document.getElementById("entry6"),
    document.getElementById("entry7"),
    document.getElementById("entry8"),
    document.getElementById("entry9"),
    document.getElementById("entry10"),
    document.getElementById("entry11"),
    document.getElementById("entry12"),
    document.getElementById("entry13"),
    document.getElementById("entry14"),
    document.getElementById("entry15"),
    document.getElementById("entry16"),
    document.getElementById("entry17"),
    document.getElementById("entry18"),
    document.getElementById("entry19"),
    document.getElementById("entry20"),
    document.getElementById("entry21"),
    document.getElementById("entry22"),
    document.getElementById("entry23"),
    document.getElementById("entry24")
    ];
const entryInputList = document.getElementById("entries");
const addEntryButton = document.getElementById("button");

const brick = document.getElementById("brick");

addEntryButton.onclick = add;
let i = 25;
function add() {
    const inputBox = document.createElement("input");
    inputBox.type = "text";
    entryInputList.lastChild.after(inputBox,entryInputList.lastChild)
    entryInputList.lastElementChild.id = "entry"+i;
    entryList.push(entryInputList.lastElementChild);
    i+=1;
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

function save() {
    let g = entryList.length;
    while(g>0){
        localStorage.setItem("entry"+g,entryList[g-1].value)
        g-=1
    }
}
