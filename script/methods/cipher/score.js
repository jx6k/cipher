import dictionary from "./dictionary.js"

const score = (text) => {
    let score = 0

    for (let i = 0; i < dictionary.length; i++) {
        score += text.split(dictionary[i]).length - 1
    }

    return score
}

export default score