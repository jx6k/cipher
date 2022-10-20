import modulus from "../modular/modulus.js"

const addition = (alphabet, text, shift) => {
    let result = ""

    console.log(text)

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