const search = document.getElementById('search');
const userCards = document.querySelector('.user-cards');

search.addEventListener('input', (e) => {
  const searchVal = e.target.value;
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      let matches = data.filter((user) => {
        const regex = new RegExp(`${searchVal}`, 'gi');
        return user.name.match(regex) || user.email.match(regex);
      });

      if (!searchVal) {
        matches = [];
      }
      console.log(matches);
      userCards.innerHTML = '';
      matches.forEach((user) => createCard(user));
    });
});

const createCard = (user) => {
  const card = document.createElement('div');
  card.className = 'card';

  const name = document.createElement('h3');
  name.className = 'name';
  name.textContent = user.name;

  const info = document.createElement('p');
  info.className = 'info';
  info.textContent = user.email;

  card.appendChild(name);
  card.appendChild(info);

  userCards.appendChild(card);
};
