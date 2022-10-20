import greatestCommonDivisor from "./greatestCommonDivisor.js"

const multiplicitiveInverse = (a, b) => {
    if (greatestCommonDivisor(a, b) != 1) {
        return undefined
    }

    let c = b
    let d = undefined

    while (d == undefined) {
        if ((c + 1) % a == 0) {
            d = (c + 1) / a
        }

        c += b
    }

    return d
}

export default multiplicitiveInverse