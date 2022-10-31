const colors = {
    fg: {
        number: 37,
        hex: '#00afaf',
        name: 'LightSeaGreen',
    },
    bg: { number: 0, hex: '#000000', name: 'Black (SYSTEM)' },
}

const loadText = () => {
    const newTextBlocks = [
        `DETAILS

Guess the results from the first scores.

A salt pickle tastes fine with ham.
These thistles bend in a high wind.

The tree top waved in a graceful way.
>`,

        `DETAILS

The coffee stand is too high for the couch.
The urge to write short stories is rare.

The pencils have all been used.

The sofa cushion is red and of light weight.
>`,

        `DETAILS

At that high level the air is pure.
The office paint was a dull sad tan.

Steam hissed from the broken valve.
There was a sound of dry leaves outside.
Torn scraps littered the stone floor.
>`,

        `DETAILS

We admire and love a good cook.
Corn cobs can be used to kindle a fire.
Where were they when the noise started.

The paper box is full of thumb tacks.

>`,

        `DETAILS

The doorknob was made of bright clean brass.

They took the axe and the saw to the forest.
Jazz and swing fans like fast music.

The map had an X that meant nothing.
>`,

        `DETAILS

A fresh start will work such wonders.

He wrote his last novel there at the inn.
It is hard to erase blue or red ink.

Write at once or you may forget it.
>`,

        `DETAILS
Some ads serve to cheat buyers.

On the islands the sea breeze is soft and mild.

Add salt before you fry the egg.
The houses are built of red clay bricks.

>`,

        `DETAILS
Ducks fly north but lack a compass.
>`,
    ]

    const detailsBlock = `BACKGROUND: ${colors.bg.number} - ${colors.bg.hex} - ${colors.bg.name}
FOREGROUND: ${colors.fg.number} - ${colors.fg.hex} - ${colors.fg.name}`

    newTextBlocks.forEach((block, blockIndex) => {
        block = block.replaceAll(/DETAILS/g, detailsBlock)
        const theTerminal = document.getElementById(`terminal-${blockIndex}`)
        console.log(theTerminal)
        const theText = document.getElementById(`the-text-${blockIndex}`)

        theTerminal.style.backgroundColor = colors.bg.hex
        theTerminal.style.color = colors.fg.hex
        theText.innerText = block

        console.log(blockIndex)
    })

    // document.getElementById('terminal').style.backgroundColor = colors.bg.hex
    // document.getElementById('terminal').style.color = colors.fg.hex

    // console.log(colors)
}

const handleBgButtonClick = (event) => {
    const theButton = event.target
    colors.bg.number = theButton.dataset.number
    colors.bg.hex = theButton.dataset.hex
    colors.bg.name = theButton.dataset.name
    loadText()
}

const handleFgButtonClick = (event) => {
    const theButton = event.target
    colors.fg.number = theButton.dataset.number
    colors.fg.hex = theButton.dataset.hex
    colors.fg.name = theButton.dataset.name
    loadText()
}

const init = () => {
    for (const bgButton of document.getElementsByClassName('bg-button')) {
        bgButton.addEventListener('click', handleBgButtonClick)
    }
    for (const fgButton of document.getElementsByClassName('fg-button')) {
        fgButton.addEventListener('click', handleFgButtonClick)
    }
    loadText()
}

document.addEventListener('DOMContentLoaded', init)
