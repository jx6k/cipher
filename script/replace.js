const replacements_box = document.querySelector("textarea.replacements")

const input = document.querySelector("textarea.input")
const output = document.querySelector("textarea.output")

const button = document.querySelector("button.analyse")

const analyse = () => {
    const replacements = replacements_box.value.split("\n")

    for (let i = 0; i < replacements.length; i++) {
        replacements[i] = replacements[i].split(" > ")
    }

    let string = input.value.toLowerCase()

    for (let i = 0; i < replacements.length; i++) {
        string = string.replaceAll(replacements[i][0], replacements[i][1].toUpperCase())
    }

    output.value = string
}

button.onclick = () => {
    analyse()
}