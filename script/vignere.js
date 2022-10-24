import addition from "./methods/cipher/addition.js"

import alphabet from "./methods/references/alphabet.js"
import values from "./methods/references/values.js"

import indexOfCoincidence from "./methods/validation/indexOfCoincidence.js"
import score from "./methods/validation/score.js"

const q = (a) => { return document.querySelector(a) }

const x = {
    input: q("textarea.input"),
    output: q("textarea.output"),
    encrypter: q("button.encrypt"),
    decrypter: q("button.decrypt"),
    bruteForce: q("button.brute-force"),
    keyword: q("input.keyword")
}

const keywordify = (keyword) => {
    const array = []
    const split = keyword.toLowerCase().split("")

    for (let i = 0; i < split.length; i++) {
        array.push(alphabet.findIndex(x => x == split[i]))
    }

    return array
}

const encrypt = (text, keyword) => {
    const shifts = keywordify(keyword)
    const split = text.toLowerCase().split("")

    let result = ""

    for (let i = 0; i < split.length; i++) {
        result += addition(split[i], shifts[i % shifts.length])
    }

    return result.toUpperCase()
}

const decrypt = (text, keyword) => {
    const shifts = keywordify(keyword)
    const split = text.toLowerCase().split("")

    let result = ""

    for (let i = 0; i < split.length; i++) {
        result += addition(split[i], - shifts[i % shifts.length])
    }

    return result.toLowerCase()
}

const bruteForce = (text) => {
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < i; j++) {

        }
    }
}

x.encrypter.onclick = () => { x.output.value = encrypt(x.input.value, x.keyword.value) }
x.decrypter.onclick = () => { x.output.value = decrypt(x.input.value, x.keyword.value) }

x.bruteForce.onclick = () => { [x.output.value, x.keyword.value] = bruteForce(x.input.value)}