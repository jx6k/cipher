import bigrams from "../references/bigrams.js"

import toLetters from "./toLetters.js"

const generateNGrams = (text, n) => {
    const array = []
    const split = text.split("")

    for (let i = 0; i < text.length - (n - 1); i++) {
        array.push("")

        for (let j = 0; j < n; j++) {
            array[i] += split[i + j]
        }
    }

    return array
}

const score = (text) => {
    const currentBigrams = generateNGrams(toLetters(text.toLowerCase()).toUpperCase(), 2)
    let score = 0

    for (let i = 0; i < currentBigrams.length; i++) {
        score += bigrams[bigrams.findIndex(x => x.a == currentBigrams[i])].b
    }

    return score / currentBigrams.length
}

export default score