// function play() {
//     // step-1: hide the home screen.to hide the screen add the class hidden to the home section
//          const homeSection=document.getElementById('home-screen');
//          homeSection.classList.add('hidden'); 


function HandleKeyboardButtonPress(event) {
  const PlayerPressed = event.key;
  console.log('Player pressed:', PlayerPressed);

  // get the expected to press
  const currentAlphabet = document.getElementById('current-alphabet');
  const TargetAlphabet = currentAlphabet.innerText;
  const expectedAlphabet = TargetAlphabet.toLowerCase();
  // console.log(PlayerPressed, expectedAlphabet);



  // check matched or not
  if (PlayerPressed === expectedAlphabet) {
    console.log('you get a point');

    const currentScore=getTextElementValueById('current-score');
    const updatedScore=currentScore+1;   
    setTextElementValueById('current-score',updatedScore);
   
    



    // -------------------------------------------------------------------
  //   //  score update:
  //   // step-1: get the current 
    
  //   const currentScore=document.getElementById('current-score');
  //   const currentScoreValue=currentScore.innerText;
  //   const scoreIntNumber=parseInt(currentScoreValue);
  //   console.log(scoreIntNumber);


  //   // step-2: increase the score by 1

  //   const newScore=scoreIntNumber+1;
    
  //   // step-3: set the updated score

  //   currentScore.innerText=newScore;


    // start a new round 
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else {
    console.log('you missed.you lost a life');
    const currentScore=getTextElementValueById('life-score');
    const updatedScore=currentScore-1;   
    setTextElementValueById('life-score',updatedScore);
    if(updatedScore===0){
      console.log('Game over');
      hideElementById('play-ground');
      
    }

    // const lifeScore=document.getElementById('life-score');
    // const lifeScoreValue=lifeScore.innerText;
    // const lifeIntNumber=parseInt(lifeScoreValue);
    // const reduceLifeScore=lifeIntNumber-1;
    // lifeScore.innerText=reduceLifeScore;
  }
}

//  capture keyboard key press
document.addEventListener('keyup', HandleKeyboardButtonPress);



function continueGame() {
  // step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  // set background color
  //    setBackgroundColorById(alphabet);
  setBackgroundColorById(alphabet);
}
function play() {
  hideElementById('home-screen');
  showElementId('play-ground');
  continueGame();
}
