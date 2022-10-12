const table = document.getElementById('table');

const setName = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4tfml0QLmgKTloHBYIf5/scores/');
  const json = await response.json();
  const jsonSort = json.result.sort((a, b) => b.score - a.score);
  table.innerHTML = '';
  jsonSort.forEach((game, index) => {
    const tr = document.createElement('tr');
    tr.classList = (index % 2) ? 'gray' : '';
    table.appendChild(tr);
    const td = document.createElement('td');
    td.innerHTML = `${game.user}:   ${game.score}`;
    tr.appendChild(td);
  });
};

export default setName;