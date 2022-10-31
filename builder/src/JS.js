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
}

document.addEventListener('DOMContentLoaded', init)
