import './index.css';

const user = document.getElementById('inputName');
const score = document.getElementById('inputScore');
const submitBtn = document.getElementById('submitBtn');

const addName = async (user, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxeQ6enD2b5df5nFHNAr/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  document.getElementById('inputName').value = '';
  document.getElementById('inputScore').value = '';
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addName(user.value, score.value);
});

const table = document.getElementById('table');
const setName = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxeQ6enD2b5df5nFHNAr/scores/');
  const json = await response.json();
  json.result.forEach((game, index) => {
    const tr = document.createElement('tr');
    tr.classList = (index % 2) ? 'gray' : '';
    table.appendChild(tr);
    const td = document.createElement('td');
    td.innerHTML = `${game.user}:  ${game.score}`;
    tr.appendChild(td);
  });
  console.log(objName);
};

setName();