//  hide element Id
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show element Id
function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}


function setTextElementValueById(elementId,value) {
    const element=document.getElementById(elementId);
    element.innerText=value;
}


function getRandomAlphabet() {
    // get or create a alphabet array
    const AlphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const Alphabets = AlphabetString.split('');
    // console.log(Alphabets);

    // get a random index between 0 to 25
    const randomNumbers = Math.random() * 25;
    const index = Math.round(randomNumbers);

    const alphabet = Alphabets[index];
    return alphabet;


}

