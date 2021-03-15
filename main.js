const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answerArr = ['Yes!', 'No.', 'Maybe...', 'Hard to say...', 'You do not want to know the answer to that question :/'];

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Answer:<span> ${answerArr[number]}`;
}

ball.addEventListener('click', generateAnswer);