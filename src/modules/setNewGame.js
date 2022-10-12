const error = document.getElementById('error');
const createGame = async (davidGame) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: davidGame,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await response.json();
  if (json.error) {
    error.innerHTML = 'Something went wrong';
    setTimeout(() => { error.innerHTML = ''; }, 3000);
  }
};

export default createGame;