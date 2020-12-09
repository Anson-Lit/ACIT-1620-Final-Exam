let control = document.querySelector(".control")
let thumb = document.querySelector("#thumb-bar")
let submit = document.querySelector("button")
let effect = document.querySelector("#effect")
let image = document.querySelector(".displayed-img")
let altarray = ["Eye", "Rock", "Purple Flowers", "Egyptian Art", "Butterfly"]

function addImages() {
    for (let i = 1; i <= 5; i++) {
        let img = document.createElement("img");
        img.src = `images/pic${i}.jpg`
        img.alt = altarray[i - 1]
        thumb.appendChild(img)
    }
}
addImages()


thumb.addEventListener("mouseover", enlargePhoto)

function showFormElements() {
    control.classList.remove("hidden")
}

function enlargePhoto(evt) {
    image.src = evt.target.src
    console.log(image.src)
    image.alt = evt.target.alt
    showFormElements()
}


submit.addEventListener("click", checkInput)

function checkInput() {
    let inputValue = effect.value
    effect.value = ""
    if (inputValue === "blur") {
        for (let i = 1; i <= 5; i++) {
            if (image.alt === altarray[i - 1]) {
                image.src = `images/pic${i}B.jpg`
            }
        }
    } else {
        alert("Enter valid command")
    }
}