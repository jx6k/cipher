import addition from "./methods/cipher/addition.js"
import score from "./methods/cipher/score.js"

const q = (a) => { return document.querySelector(a) }

const x = {
    input: q("textarea.input"),
    output: q("textarea.output"),
    encrypter: q("button.encrypt"),
    decrypter: q("button.decrypt"),
    bruteForce: q("button.brute-force"),
    shift: q("input.shift")
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const encrypt = (text, a) => { return addition(alphabet, text, a).toUpperCase() }
const decrypt = (text, a) => { return addition(alphabet, text, - a).toLowerCase() }

const bruteForce = (text) => {
    let best = 0
    let winner = -1

    for (let i = 0; i < alphabet.length; i++) {
        const current = score(addition(alphabet, text, i))
        if (current > best) {
            winner = i
            best = current
        }
    }

    return [addition(alphabet, text, winner), winner]
}

x.encrypter.onclick = () => { x.output.value = encrypt(x.input.value, parseInt(x.shift.value)) }
x.decrypter.onclick = () => { x.output.value = decrypt(x.input.value, parseInt(x.shift.value)) }

x.bruteForce.onclick = () => { [x.output.value, x.shift.value] = bruteForce(x.input.value)}