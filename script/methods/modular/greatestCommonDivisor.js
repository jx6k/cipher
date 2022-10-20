const greatestCommonDivisor = (a, b) => {
    if (a == 0 || b == 0) return 0
    if (a == b) return a
    if (a > b) return greatestCommonDivisor(a - b, b)
             
    return greatestCommonDivisor(a, b - a)
}

export default greatestCommonDivisor