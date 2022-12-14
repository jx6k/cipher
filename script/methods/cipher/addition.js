import modulus from "../modular/modulus.js"

import alphabet from "../references/alphabet.js"

const addition = (text, shift) => {
    let result = ""

    const split = text.toLowerCase().split("")

    for (let i = 0; i < split.length; i++) {
        const j = alphabet.findIndex(x => x == split[i])

        if (j == -1) {
            result += split[i]
        }
        else {
            result += alphabet[modulus(j + shift, alphabet.length)]
        }
    }

    return result
}

export default addition