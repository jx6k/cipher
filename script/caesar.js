import addition from "./methods/cipher/addition.js"

const q = (a) => { return document.querySelector(a) }

const x = {
    input: q("textarea.input"),
    output: q("textarea.output"),
    encrypter: q("button.encrypt"),
    decrypter: q("button.decrypt"),
    shift: q("input.shift")
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

const encrypt = (text, a) => { return addition(alphabet, text, a) }
const decrypt = (text, a) => { return addition(alphabet, text, - a) }

x.encrypter.onclick = () => { x.output.value = encrypt(x.input.value, parseInt(x.shift.value)) }
x.decrypter.onclick = () => { x.output.value = decrypt(x.input.value, parseInt(x.shift.value)) }