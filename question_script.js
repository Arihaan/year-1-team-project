i = 59

function onTimer() {
    document.getElementById('countdown').innerHTML = i;
    i--;
    if (i < 0) {
        alert('You ran out of time!');
    }
    else {
        setTimeout(onTimer, 1000);
    }
}

onTimer();
