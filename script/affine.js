const input = document.querySelector("textarea.input")
const output = document.querySelector("textarea.output")

const encrypter = document.querySelector("button.encrypt")
const decrypter = document.querySelector("button.decrypt")

const gradient = document.querySelector("input.gradient")
const intercept = document.querySelector("input.intercept")

console.log(0 % 26 + 26 % 26)

const mod = (a, b) => {
    return ((a % b) + b) % b
}

const multiplicativeInverses = [
    [1, 1],
    [3, 9],
    [5, 21],
    [7, 15],
    [9, 3],
    [11, 19],
    [15, 7],
    [17, 23],
    [19, 11],
    [21, 5],
    [23, 17],
    [25, 25]
]

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const encrypt = (initial, a, b) => {
    const splitnitial = initial.toLowerCase().split("")
    let final = ""

    for (let i = 0; i < splitnitial.length; i++) {
        const position = alphabet.findIndex(o => o == splitnitial[i])

        if (position != -1) {
            final += alphabet[(position * a + b) % alphabet.length]
        }
        else {
            final += splitnitial[i]
        }
    }

    return final
}

const decrypt = (initial, a, b) => {
    const splitnitial = initial.toLowerCase().split("")
    let final = ""

    a = mod(a, alphabet.length)
    b = mod(b, alphabet.length)

    const inverse = multiplicativeInverses[multiplicativeInverses.findIndex(x => x[0] == a)][1]

    for (let i = 0; i < splitnitial.length; i++) {
        const position = alphabet.findIndex(o => o == splitnitial[i])

        if (position != -1) {
            final += alphabet[mod((position - b) * inverse, alphabet.length)]
        }
        else {
            final += splitnitial[i]
        }
    }

    return final
}

encrypter.onclick = () => {
    output.value = encrypt(
        input.value,
        parseInt(gradient.value),
        parseInt(intercept.value)
    )
}

decrypter.onclick = () => {
    output.value = decrypt(
        input.value,
        parseInt(gradient.value),
        parseInt(intercept.value)
    )
}