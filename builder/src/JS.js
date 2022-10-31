const handleBgButtonClick = (event) => {
    const theButton = event.target
    document.getElementById('terminal').style.backgroundColor =
        theButton.dataset.color
}

const init = () => {
    for (const bgButton of document.getElementsByClassName('bg-button')) {
        bgButton.addEventListener('click', handleBgButtonClick)
    }
}

document.addEventListener('DOMContentLoaded', init)
