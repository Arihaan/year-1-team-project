i = 59

function onTimer() {
    document.getElementById('countdown').innerHTML = i;
    i--;
    if (i < 0) {
        alert('You ran out of time!');
        window.location.href='choose.html';
    }
    else {
        setTimeout(onTimer, 1000);
    }
}

onTimer();

function wrongAns() {
    alert("You chose the wrong answer!");
    window.location.href='choose.html';
}


function youWin() {
    alert("You win!");
    window.location.href='index.html';
}

