import alphabet from "../references/alphabet.js"

import toLetters from "./toLetters.js"

const indexOfCoincidence = (text) => {
    let score = 0

    const letters = toLetters(text.toLowerCase())

    for (let i = 0; i < alphabet.length; i++) {
        const expression = new RegExp(alphabet[i], "g")
        const count = (letters.match(expression) || []).length

        score += (count / letters.length) * ((count - 1) / (letters.length - 1))
    }

    return score
}

console.log(indexOfCoincidence("To be, or not to be, that is the question— Whether 'tis Nobler in the mind to suffer The Slings and Arrows of outrageous Fortune, Or to take Arms against a Sea of troubles, And by opposing end them? William Shakespeare - Hamlet"))

export default indexOfCoincidence