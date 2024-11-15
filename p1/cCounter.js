
let countValue = document.getElementById("count");
let inc = document.getElementById("in")
let dec = document.getElementById("de")
let reset = document.getElementById("reset")


reset.addEventListener("click", () => {


    count = 0
    display()
})

function display() {
    countValue.textContent = count;
}

let count = 0

dec.addEventListener("click", function () {
    count=count-5
    display()

})
inc.addEventListener("click", function () {
    count=count+5;
    display()
})




