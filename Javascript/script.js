let control = document.querySelector(".control")
let thumb = document.querySelector("#thumb-bar")

control.classList.toggle("hidden")


function looping() {
    let altarray = ["Eye", "Rock", "Purple Flowers", "Egyptian Art", "Butterfly"]
    for (let i = 1; i <= 5; i++) {
        let img = document.createElement("img");
        img.src = `images/pic${i}.jpg`
        img.alt = altarray[i - 1]
        thumb.appendChild(img)
    }
}


looping()