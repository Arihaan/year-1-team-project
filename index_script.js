
document.querySelector("#s-btn").addEventListener("click", function(){
    document.body.classList.add("settings-on");
    document.getElementsByClassName("menu_button")[0].disabled = true;
    document.getElementsByClassName("menu_button")[1].disabled = true;
});

document.querySelector("#close-btn").addEventListener("click", function(){
    document.body.classList.remove("settings-on");
    document.getElementsByClassName("menu_button")[0].disabled = false;
    document.getElementsByClassName("menu_button")[1].disabled = false;
});

audio_on = true

function changeImage() {
    if (audio_on){
        document.getElementById("audiobtn").src = "assets/audiooff.png";
        audio_on = false;
    } else {
        document.getElementById("audiobtn").src = "assets/audioon.png";
        audio_on = true;
    }
}
