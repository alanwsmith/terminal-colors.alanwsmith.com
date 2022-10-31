const colors = {
    fg: {
        number: 1,
        hex: '#ffffff',
    },
    bg: { number: '#000000', hex: '#000000' },
}

const loadText = () => {
    const theTerminal = document.getElementById('terminal')
    theTerminal.style.backgroundColor = colors.bg.hex
    theTerminal.style.color = colors.fg.hex

    const newTextBlock = `DETAILS

Guess the results from the first scores.

A salt pickle tastes fine with ham.
These thistles bend in a high wind.

The tree top waved in a graceful way.

The spot on the blotter was made by green ink.
The cigar burned a hole in the desk top.
He broke a new shoelace that day.

The coffee stand is too high for the couch.
The urge to write short stories is rare.

The pencils have all been used.

The sofa cushion is red and of light weight.

The jacket hung on the back of the wide chair.

At that high level the air is pure.
The office paint was a dull sad tan.
Steam hissed from the broken valve.

There was a sound of dry leaves outside.
Torn scraps littered the stone floor.

We admire and love a good cook.
Corn cobs can be used to kindle a fire.

Where were they when the noise started.
The paper box is full of thumb tacks.

The petals fall with the next puff of wind.

Bring your best compass to the third class.
A fresh start will work such wonders.
He wrote his last novel there at the inn.

It is hard to erase blue or red ink.

Write at once or you may forget it.

The doorknob was made of bright clean brass.

They took the axe and the saw to the forest.
Jazz and swing fans like fast music.
`
    const splitLines = newTextBlock.split('\n')

    document.getElementById('the-text').innerText = newTextBlock
}

const handleBgButtonClick = (event) => {
    const theButton = event.target
    document.getElementById('terminal').style.backgroundColor =
        theButton.dataset.color
}

const handleFgButtonClick = (event) => {
    const theButton = event.target
    document.getElementById('terminal').style.color = theButton.dataset.color
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
