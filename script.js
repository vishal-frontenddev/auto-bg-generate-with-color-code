function randomColor() {
    let randNum = "ABCDEF0123456789";
    let hax = "#";

    for (let i = 0; i < 6; i++) {
        hax += randNum[Math.floor(Math.random() * 16)]
    }
    return hax;
}

let colorCode;

document.querySelector("#on").addEventListener("click", ()=> {

    colorCode = setInterval(() => {
        
       document.querySelector("body").style.backgroundColor = randomColor();
       document.querySelector(".code").innerHTML = randomColor();

    }, 1000);
})

document.querySelector("#off").addEventListener("click", ()=> {
    clearInterval(colorCode);
})
