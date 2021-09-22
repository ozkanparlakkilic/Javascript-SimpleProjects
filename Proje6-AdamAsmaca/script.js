
const word_element = document.getElementById('word');
const wrong_letters = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');

const correctLetters = [];
const wrong = [];
let selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript","java","python"];

    const rand = Math.floor(Math.random()*words.length);
    return words[rand];
}



function displayWord() {
    
    word_element.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </div>
    `).join('')}
    
    `;

    const correctWord = word_element.innerText.replace(/\n/g,'');

    if(correctWord === selectedWord){
        popup.style.display = 'flex';
        message_el.innerText = 'Tebrikler Kazandınız';
    }
}

function updateWrongLetters() {
    wrong_letters.innerHTML = `
    ${wrong.length > 0?'<h3>Hatalı Harfler</h3>':''}
    ${wrong.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item,index) => {
        const errorCount = wrong.length;

        if(index < errorCount) {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })

    if(wrong.length === items.length) {
        popup.style.display = 'flex';
        message_el.innerText = 'Kaybettiniz';
    }
}

function displayMessage(){
    message.classList.add('show');
    setTimeout(function(){
        message.classList.remove('show');
    },2000);
} 

playAgainBtn.addEventListener('click',function(){
    correctLetters.splice(0);
    wrong.splice(0);

    selectedWord = getRandomWord();

    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';
})

window.addEventListener('keydown',function(e){
    
    if((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 222) {
        const letter = e.key;

        if (selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
            }else{
                displayMessage();
            }
            displayWord();
        }else{
            if(!wrong.includes(letter)){
                wrong.push(letter);
                updateWrongLetters();
            }else{
                displayMessage();
            }
        }
    }
})

displayWord();