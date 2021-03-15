const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answerArr = ['Yes!', 'No.', 'Maybe...', 'Hard to say...', 'You do not want to know the answer to that question :/'];

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
};

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'The question must end with "?"';
        answer.textContent = '';
    } else {
        error.textContent = 'You need to ask any question!';
        answer.textContent = '';
    };
    ball.classList.remove('shake-animation');
};

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Answer:<span> ${answerArr[number]}`;
};

ball.addEventListener('click', shakeBall);