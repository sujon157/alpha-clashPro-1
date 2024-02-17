// function play() {
//     // step-1: hide the home screen.to hide the screen add the class hidden to the home section
//          const homeSection=document.getElementById('home-screen');
//          homeSection.classList.add('hidden');

// //     // show the playground
//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// }
function continueGame(){
    // step-1: generate a random alphabet
    const alphabet= getRandomAlphabet();
    
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
     
    // set background color
    //    setBackgroundColorById(alphabet);
     setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementId('play-ground');
    continueGame()
}
