score = 0;
var thename = 'Anirudha Lakshamn';
document.getElementById('the-name').innerHTML = (thename + " - " + score).toString();

function namesub() {
    n = document.getElementById('user-name').value;
    document.getElementById('the-name').innerHTML = (n + " - " + score).toString();
    document.getElementById('player').style.display = 'none';
}

function rock() {
    choosen = rock;
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissor').style.display = 'none';
}

function paper() {
    choosen = paper;
    document.getElementById('rock').style.display = 'none';
    document.getElementById('scissor').style.display = 'none';
}

function scissor() {
    choosen = scissor;
    document.getElementById('paper').style.display = 'none';
    document.getElementById('rock').style.display = 'none';
}

function rand() {
    a = Math.floor(Math.random() * 3);
    if (a == 0 && choosen != rock) {
        document.getElementById('rock').style.display = 'flex';
    }
    if (a == 1 && choosen != paper) {
        document.getElementById('paper').style.display = 'flex';
    }
    if (a == 2 && choosen != scissor) {
        document.getElementById('scissor').style.display = 'flex';
    }
}

function thescore() {
    if (choosen == rock && a == 2) {
        score += 1;
        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissor').style.pointerEvents = 'none';
    } else if (choosen == rock && a == 1) {
        score -= 1;
        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissor').style.pointerEvents = 'none';
    }
    // else if (choosen == rock && a == 0) {
    //     thereset();
    // }

    if (choosen == paper && a == 0) {
        score += 1;
        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissor').style.pointerEvents = 'none';
    } else if (choosen == paper && a == 2) {
        score -= 1;
        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissor').style.pointerEvents = 'none';
    }
    // else if (choosen == paper && a == 1) {
    //     thereset();
    // }

    if (choosen == scissor && a == 1) {
        score += 1;
        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissor').style.pointerEvents = 'none';
    } else if (choosen == scissor && a == 0) {
        score -= 1;
        document.getElementById('rock').style.pointerEvents = 'none';
        document.getElementById('paper').style.pointerEvents = 'none';
        document.getElementById('scissor').style.pointerEvents = 'none';
    }
    // else if (choosen == scissor && a == 2) {
    //     thereset();
    // }

    document.getElementById('the-name').innerHTML = (n + " - " + score).toString();
    // document.getElementById('rock').style.pointerEvents = 'none';
    // document.getElementById('paper').style.pointerEvents = 'none';
    // document.getElementById('scissor').style.pointerEvents = 'none';
}
document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        thereset();
    }
}

function thereset() {
    document.getElementById('rock').style.display = 'flex';
    document.getElementById('paper').style.display = 'flex';
    document.getElementById('scissor').style.display = 'flex';

    document.getElementById('rock').style.pointerEvents = 'initial';
    document.getElementById('paper').style.pointerEvents = 'initial';
    document.getElementById('scissor').style.pointerEvents = 'initial';
}

function therestart() {
    document.getElementById('player').style.display = 'block';
    score = 0
    document.getElementById('the-name').innerHTML = (n + " - " + score).toString();

    document.getElementById('rock').style.display = 'flex';
    document.getElementById('paper').style.display = 'flex';
    document.getElementById('scissor').style.display = 'flex';

    document.getElementById('rock').style.pointerEvents = 'initial';
    document.getElementById('paper').style.pointerEvents = 'initial';
    document.getElementById('scissor').style.pointerEvents = 'initial';
}