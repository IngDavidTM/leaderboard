import './index.css';
import addName from './modules/add.js';
import setName from './modules/refresh.js';

const user = document.getElementById('inputName');
const score = document.getElementById('inputScore');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addName(user.value, score.value);
});

const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  setName();
  refresh.innerHTML = 'Refresh';
});
