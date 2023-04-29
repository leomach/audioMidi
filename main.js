function playAudio (idAudio) {
    const element = document.querySelector(idAudio).play()
    if (element != null && element.localName === 'audio') {
        element.play()
    } else {
        console.log('Elemento não encontrado ou inapropriado')
    }
}

const buttonsList = document.querySelectorAll('.tecla');

for (let i = 0; i < buttonsList.length; i++) {
    const buttom = buttonsList[i] 
    const idAudio = buttom.classList[1];

    buttonsList[i].addEventListener('click', function () {
        playAudio(`#som_${idAudio}`)
    });

    buttom.addEventListener('keydown', function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            buttom.classList.add('ativa')
        }
    })
    buttom.addEventListener('keyup', function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            buttom.classList.remove('ativa')
        }
    })
}