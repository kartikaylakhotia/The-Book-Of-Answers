const book = document.querySelector("#book")
const output = document.querySelector("#output")
const button = document.querySelector(".button")
let answers = []
let count = 0
let isBookOpen = false
button.style.display = "none"
async function loadAnswers() {
    const response = await fetch("/api")
    answers = await response.json()
    const answer = answers.answers[Math.floor(Math.random()*50)]
    output.textContent = answer
}


book.addEventListener('click', () => {
    loadAnswers()
    isBookOpen = !isBookOpen
    count++;
    book.classList.toggle('book-open', isBookOpen)
    if (isBookOpen && count!==0) {
        button.style.display = "";
    } else {
        button.style.display = "none"
    }
})

button.addEventListener('click', () => {
    isBookOpen = !isBookOpen
        if (isBookOpen) {
        button.style.display = "";
    } else {
        button.style.display = "none"
    }
    output.textContent = "";
    book.classList.remove('book-open')
})