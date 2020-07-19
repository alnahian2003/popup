//start code
//19-JUL-2020
//Al Nahian , https://alnahian.xyz

//take variables
var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    x = document.querySelector(".X"),
    section = document.querySelector(".hero");

//add event listener when the button will be clicked
btn.addEventListener("click", visible);

function visible() {
    parent.style.display = "block";
    section.style.filter = "blur(10px)";
}

//add event listener when the X will be clicked
x.addEventListener("click", disappearX);

function disappearX() {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
}

//add event listener to disappear the modal
parent.addEventListener("click", disappearModal);

function disappearModal(e) {
    if (e.target.className == "modal-parent") {
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
    }

}

//end code