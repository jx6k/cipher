const input = document.querySelector("textarea.input")
const output = document.querySelector("textarea.output")

const encrypter = document.querySelector("button.encrypt")
const decrypter = document.querySelector("button.decrypt")

const shift = document.querySelector("input.shift")

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const mod = (a, b) => {
    return ((a % b) + b) % b
}

const encrypt = (initial, a) => {
    const splitnitial = initial.toLowerCase().split("")
    let final = ""

    for (let i = 0; i < splitnitial.length; i++) {
        const position = alphabet.findIndex(o => o == splitnitial[i])

        console.log(position + a)

        if (position != -1) {
            final += alphabet[mod(position + a, alphabet.length)]
        }
        else {
            final += splitnitial[i]
        }
    }

    return final
}

const decrypt = (initial, a) => {
    const splitnitial = initial.toLowerCase().split("")
    let final = ""

    for (let i = 0; i < splitnitial.length; i++) {
        const position = alphabet.findIndex(o => o == splitnitial[i])

        if (position != -1) {
            final += alphabet[mod(position - a, alphabet.length)]
        }
        else {
            final += splitnitial[i]
        }
    }

    return final
}

encrypter.onclick = () => {
    output.value = encrypt(input.value, parseInt(shift.value))
}
decrypter.onclick = () => {
    output.value = decrypt(input.value, parseInt(shift.value))
}