let entryList =  [];

const entry = document.getElementById("entry")
const addEntryButton = document.getElementById("button");


addEntryButton.onclick = add;

function add() {
    entryList.push(entry.value);
    entry.value = "";
    document.getElementById("list").innerHTML = entryList;
    saveEntries()
}

function loadEntries() {
    entryLength = localStorage.getItem("entrylength")
    while (entryLength > 0) {
        entryLength -= 1;
        entryList.push(localStorage.getItem("entryList"+entryLength));
    }
    document.getElementById("list").innerHTML = entryList;
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
    box1.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box2.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box3.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box4.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box5.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box6.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box7.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box8.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box9.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box10.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box11.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box12.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box14.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box15.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box16.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box17.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box18.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box19.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box20.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box21.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box22.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box23.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box24.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]
    box25.innerHTML = entryList[Math.floor(Math.random()*entryList.length)]

    console.log(entryList)
    console.log(entryList[Math.floor(Math.random()*entryList.length)])
}
const loadButton = document.getElementById("load");
loadButton.onclick = loadEntries;

function saveEntries() {
    for (i in entryList) {
        localStorage.setItem("entryList"+i,entryList[i]);
    }
    localStorage.setItem("entrylength",entryList.length)
}

