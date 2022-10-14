const error = document.getElementById('error');
const addName = async (user, score) => {
  if (user === '' || score === '') {
    error.innerHTML = 'Please fill all the required fields';
    setTimeout(() => { error.innerHTML = ''; }, 3000);
  } else {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yySF9tpxm64KsoDIlbes/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.status !== 201) {
      error.innerHTML = 'Something went wrong';
      setTimeout(() => { error.innerHTML = ''; }, 3000);
    }
    document.getElementById('inputName').value = '';
    document.getElementById('inputScore').value = '';
  }
};

export default addName;