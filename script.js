const body = document.querySelector('body')
const container = document.getElementById("container")
const heading = document.getElementById("heading")
const textInput = document.getElementById("numberInput")
const submitBtn = document.getElementById("submitBtn")
const p = document.querySelector('p')


body.style.backgroundColor = "beige"

heading.textContent = "¿ Guessing Game ?"
heading.style.color = "darkViolet"

// heading.appendChild(p)
p.style.color = "red"
p.textContent = "Guess a number between 1 and 10"

// console.log(p)
const randomNumber = Math.floor(Math.random() * 10) +1;
const tInput = document.getElementById('numberInput')
// const subInput = document.getElementById('submitBtn')

console.log(randomNumber);

function isSubmissionCorrect() {
    // console.log(e);
    const textValue = parseInt(tInput.value)
    // console.log(textValue)

    if(textValue === randomNumber){
        alert("YOU WON ")
    } else {
        alert("OOPS THE INPUT WAS WRONG...TRY AGAIN")
    }
    textInput.value = ''
}

submitBtn.addEventListener('click', isSubmissionCorrect)

