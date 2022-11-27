let inputs = document.getElementsByClassName("form")
let errors = document.getElementsByClassName("error")

const postalRegex = new RegExp(/[0-9]{5}/, 'g');

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
        errors[i].innerHTML = "* Champ obligatoire"
    }
    inputs[i].addEventListener("keyup", event => {
        let input = inputs[i]
        let msg = "";
        if (input.value == "") {
            msg = "* Champ obligatoire"
        } else if (input.id == "postal") {
            if (!postalRegex.test(input.value))
                msg = "* Format incorrect"
        }
        errors[i].innerHTML = msg;
    })
}

