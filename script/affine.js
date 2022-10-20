import multiplication from "./methods/cipher/multiplication.js"
import addition from "./methods/cipher/addition.js"

import multiplicativeInverse from "./methods/modular/multiplicativeInverse.js"

const q = (a) => { return document.querySelector(a) }

const x = {
    input: q("textarea.input"),
    output: q("textarea.output"),
    encrypter: q("button.encrypt"),
    decrypter: q("button.decrypt"),
    gradient: q("input.gradient"),
    intercept: q("input.intercept")
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const encrypt = (text, a, b) => { return addition(alphabet, multiplication(alphabet, text, a), b).toUpperCase() }
const decrypt = (text, a, b) => { return multiplication(alphabet, addition(alphabet, text, -b), multiplicativeInverse(a, alphabet.length)).toLowerCase() }

x.encrypter.onclick = () => { x.output.value = encrypt(x.input.value, parseInt(x.gradient.value), parseInt(x.intercept.value)) }
x.decrypter.onclick = () => { x.output.value = decrypt(x.input.value, parseInt(x.gradient.value), parseInt(x.intercept.value)) }