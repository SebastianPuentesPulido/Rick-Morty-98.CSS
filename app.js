const box = document.getElementById("box");
const url = "https://rickandmortyapi.com/api/character";
const alive = document.getElementById("alive");
const selector = document.querySelector('.title')
selector.classList.add('magictime', 'swashIn')


// fetch(url)
// .then(response => response.json())
// .then(
//     (users) => {
//         const tpl = users.map((user) => `<div>
//             <h2>${user.id}</h2>
//         </div>`);
//         box.innerHTML = `<div>${tpl}</div>`;
//     }
//  )

async function datos() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const tpl = data.results.map(
    (user) => `
    <div class="title-bar">
    <div class="title-bar-text">${user.name}</div>
    <div class="title-bar-controls">
      <button aria-label="Help"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="caja">
            <h2>${user.id}</h2>
            <img class="user-image" src="${user.image}"/>
            <b>${user.name}<b/>

            <div class="status-bar">
    <p class="status-bar-field">${user.origin.name}</p>
    <p class="status-bar-field" id="alive">${user.status}</p>
    <p class="status-bar-field">${user.species}</p>
    <p class="status-bar-field">${user.gender}</p>
  </div>
        </div>
    `
  );
  box.innerHTML = `<div>${tpl}</div>`;
}

datos();
