import multiplication from "./methods/cipher/multiplication.js"
import addition from "./methods/cipher/addition.js"

import score from "./methods/cipher/score.js"

import greatestCommonDivisor from "./methods/modular/greatestCommonDivisor.js"
import multiplicativeInverse from "./methods/modular/multiplicativeInverse.js"

const q = (a) => { return document.querySelector(a) }

const x = {
    input: q("textarea.input"),
    output: q("textarea.output"),
    encrypter: q("button.encrypt"),
    decrypter: q("button.decrypt"),
    bruteForce: q("button.brute-force"),
    gradient: q("input.gradient"),
    intercept: q("input.intercept")
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const encrypt = (text, a, b) => { return addition(alphabet, multiplication(alphabet, text, a), b).toUpperCase() }
const decrypt = (text, a, b) => { return multiplication(alphabet, addition(alphabet, text, -b), multiplicativeInverse(a, alphabet.length)).toLowerCase() }

const bruteForce = (text) => {
    let winning = { score: 0, a: 0, b: 0 }

    for (let a = 0; a < 26; a++) {
        if (greatestCommonDivisor(a, alphabet.length) == 1) {
            for (let b = 0; b < 26; b++) {
                const currentText = decrypt(text, a, b)
                const currentScore = score(currentText)

                if (winning.score < currentScore) {
                    winning.a = a
                    winning.b = b
                    winning.score = currentScore
                }
            }
        }
    }

    return [decrypt(text, winning.a, winning.b), winning.a, winning.b]
}

x.encrypter.onclick = () => { x.output.value = encrypt(x.input.value, parseInt(x.gradient.value), parseInt(x.intercept.value)) }
x.decrypter.onclick = () => { x.output.value = decrypt(x.input.value, parseInt(x.gradient.value), parseInt(x.intercept.value)) }

x.bruteForce.onclick = () => { [x.output.value, x.gradient.value, x.intercept.value] = bruteForce(x.input.value) }