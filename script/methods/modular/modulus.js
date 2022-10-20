const modulus = (a, b) => {
    return ((a % b) + b) % b
}

export default modulus