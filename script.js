console.log("JS FILE LOADED");  //CHECKING FOR SUCCESSFUL LOADING OF JS FILE

/*FUNCTION FOR PLAYING MUSIC AND APLLYING ANIMATION TO THE BUTTONS*/


window.addEventListener("keydown", playMusic);

function playMusic(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //SELCTING ATTRIBUTES USING QUERY SELECTOR
    let key = document.querySelector(`.keys[data-key="${event.keyCode}"]`);
    //console.log(key);
    // console.log(audio);
    if (!audio) return;                         //stop the function from running while pressing unwanted keys 
    audio.currentTime = 0;                      //to ensure that whn presssing the key each time it shoud start from the first
    audio.play();
    key.classList.add("playing");
};





function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");               // this=>key in forEach statement
}
let keys = document.querySelectorAll(".keys")       // it returns the array
keys.forEach(key => key.addEventListener("transitionend", removeTransition));   //iterate the each item using forEach and add the event listener to the each item