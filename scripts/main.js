// Night Mode Toggle
let nightModeButton = document.querySelector("#myButton4");

nightModeButton.onclick = () => {
    document.body.classList.toggle("night-mode");
    document.documentElement.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
        localStorage.setItem("nightMode", "enabled");
    } else {
        localStorage.setItem("nightMode", "disabled");
    }

    if (document.body.classList.contains("night-mode")) {
        nightModeButton.textContent = "Switch to Day Mode"; 
    } else {
        nightModeButton.textContent = "Switch to Night Mode"; 
    }
};

const storedNightMode = localStorage.getItem("nightMode");
if (storedNightMode === "enabled") {
    document.body.classList.add("night-mode");
    document.documentElement.classList.add("night-mode");
    nightModeButton.textContent = "Switch to Day Mode"; 
}





const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const obj = document.querySelector("img");
obj.onclick = () => {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            if (i % 2 !== 0) {
                obj.setAttribute("src", "images/images-2.jpeg");
            } else {
                obj.setAttribute("src", "images/firefox2.png");
            }
        }, i * 100);
    }
};

let myButton = document.querySelector("#changeUserButton");
let myButton1 = document.querySelector("#changeUserList");
let myButton2 = document.querySelector("#changeUserP1");
let myButton3 = document.querySelector("#changeUserP2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

myButton2.onclick = () => {
    const newCaption = prompt("Enter Your New Caption:");
    if (newCaption) {
        const p = document.getElementById("p1");
        p.textContent = newCaption;
        localStorage.setItem("caption", newCaption);
    }
};

const p = document.getElementById("p1");

p.textContent = "";

const storedCaption = localStorage.getItem("caption");
if (storedCaption) {
    p.textContent = storedCaption;
}

myButton3.onclick = () => {
    const newParagraph = prompt("Enter Your New Paragraph:");
    if (newParagraph) {
        const p1 = document.getElementById("p2");
        p1.textContent = newParagraph;
        localStorage.setItem("paragraph", newParagraph);
    }
};

const p1 = document.getElementById("p2");
p1.textContent = "";

const storedParagraph = localStorage.getItem("paragraph");
if (storedParagraph) {
    p1.textContent = storedParagraph;
}

myButton1.onclick = () => {
    const listInput = prompt("Enter new list items separated by commas (e.g., item 1, item 2, item 3):");
    if (listInput) {
        const listItems = listInput.split(",");
        ul.innerHTML = "";
        listItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.trim();
            ul.appendChild(li);
        });
        localStorage.setItem("list", JSON.stringify(listItems));
    }
};

const ul = document.getElementById("myList");
ul.innerHTML = "";

const storedList = localStorage.getItem("list");
if (storedList) {
    const listItems = JSON.parse(storedList);
    listItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}


