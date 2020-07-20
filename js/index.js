const url = "http://localhost:3000/";
const myForm = document.querySelector("#my-form");

myForm.addEventListener("submit", returnExcuse);

function returnExcuse(e) {
  e.preventDefault();

  const form = e.target;
  let activity = form.activity.value;
  let timeOfDay = form.time.value;

  fetch(`http://localhost:3000/excuses/${activity}/${timeOfDay}`)
    .then(response => response.json())
    .then(renderExcuse)
    .then(console.warn);
};

function renderExcuse(excuse) {
  myForm.insertAdjacentHTML('afterend', `<p>${excuse}</p>`);
};
