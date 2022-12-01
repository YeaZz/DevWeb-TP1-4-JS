let message = document.getElementById("message")
let email = document.getElementById("email")

const regex = new RegExp(/[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}/)

email.addEventListener("keyup", event => {
    if(regex.test(email.value))
        message.style.display = "block"
    else
        message.style.display = "none";
})

let submitButton = document.getElementById("submitButton")
let inputs = document.getElementsByClassName("input")

submitButton.disabled = true;

Array.from(inputs).forEach(input => {
    input.addEventListener("keyup", event => {
        submitButton.disabled = !areInputsfilled()
    })
});

function areInputsfilled() {
    let filled = true;
    Array.from(inputs).forEach(input => {
        if (input.value == "") {
            filled = false
        }
    });
    return filled;
}
