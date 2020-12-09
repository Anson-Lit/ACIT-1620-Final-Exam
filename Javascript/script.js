let control = document.querySelector(".control")
let thumb = document.querySelector("#thumb-bar")




function addImages() {
    let altarray = ["Eye", "Rock", "Purple Flowers", "Egyptian Art", "Butterfly"]
    for (let i = 1; i <= 5; i++) {
        let img = document.createElement("img");
        img.src = `images/pic${i}.jpg`
        img.alt = altarray[i - 1]
        thumb.appendChild(img)
    }
}
addImages()


thumb.addEventListener("mouseover", enlargephoto)
thumb.addEventListener("mouseover", showFormElements)

function showFormElements() {
    control.classList.toggle("hidden")
    thumb.removeEventListener("mouseover", showFormElements)
}

function enlargephoto(evt) {
    let image = document.querySelector(".displayed-img")
    image.src = evt.target.src
}