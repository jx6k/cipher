const textarea = document.querySelector("textarea.input")
const canvas = document.querySelector("canvas.output")

const button = document.querySelector("button.analyse")

const resize = () => {
    canvas.width = Math.min(window.innerWidth * 0.8, 576)
    canvas.height = Math.min(window.innerHeight * 0.4, 324)
}
window.onresize = resize
resize()

const drawGraph = (canvas, values) => {
    const context = canvas.getContext("2d")

    const sortedValues = []

    for (let i = 0; i < values.length; i++) { sortedValues.push(values[i].value) }

    const maxValue = sortedValues.sort((a, b) => { return b - a })[0]

    const yOffset = - 8
    const padding = 24
    const gap = 4
    const width = (canvas.width - (padding * 2) - (gap * (values.length - 1))) / values.length
    const scale = (canvas.height - (padding * 2)) / maxValue

    context.fillStyle = "#ffffff"
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = "#7DDCD3"

    for (let i = 0; i < values.length; i++) {
        context.fillRect(
            Math.floor(padding + (i * width) + ((i - 1) * gap)),
            Math.floor(canvas.height - padding) + yOffset,
            Math.ceil(width),
            Math.ceil(- values[i].value * scale)
        )
    }
    
    context.fillStyle = "#101010"
    context.font = "16px Consolas"

    for (let i = 0; i < values.length; i++) {
        context.fillText(
            values[i].name,
            Math.floor(padding + (i * width) + ((i - 1) * gap)) + 4,
            Math.floor(canvas.height - padding) + 8
        )
    }
}

const analyse = (text) => {
    const frequencies = []
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

    for (let i = 0; i < alphabet.length; i++) {
        frequencies.push({
            value: 0,
            name: alphabet[i]
        })
    }

    const splitText = text.split("")

    for (let i = 0; i < splitText.length; i++) {
        const current = frequencies.find(o => o.name == splitText[i])
    
        if (current) { current.value += 1 }
    }

    return frequencies
}

button.addEventListener("click", () => {
    const frequencies = analyse(textarea.value)

    frequencies.sort((a, b) => { return b.value - a.value })

    drawGraph(canvas, frequencies)
})