let inputs = document.getElementsByClassName("form")
let errors = document.getElementsByClassName("error")

const postalRegex = new RegExp(/[0-9]{5}/)
const emailRegex = new RegExp(/[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}/)

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]
    let error = errors[i]
    if (input.value == "")
        error.innerHTML = "* Champ obligatoire"
    input.addEventListener("keyup", event => {
        let msg = ""
        if (input.value == "") {
            msg = "* Champ obligatoire"
        } else if (input.id == "email") {
            if (!emailRegex.test(input.value))
                msg = "* Format incorrect"
        } else if (input.id == "postal") {
            if (!postalRegex.test(input.value))
                msg = "* Format incorrect"
        }
        error.innerHTML = msg
    })
}

