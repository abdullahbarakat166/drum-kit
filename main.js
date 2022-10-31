const keys = document.querySelectorAll('.key');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function () {
        const audio = document.querySelector('audio[data-key="' + this.getAttribute("data-key") + '"]');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        this.classList.add('playing');

    })
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
})