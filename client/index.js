const myForm = document.querySelector("#my-form");
const excuseParagraph = document.querySelector("#excuse-para")

myForm.addEventListener("submit", returnExcuse);


function returnExcuse(e) {
  e.preventDefault();

  const form = e.target;
  let activity = form.activity.value;
  let timeOfDay = form.time.value;

  fetch(`https://radiant-bayou-60020.herokuapp.com/excuses/${activity}/${timeOfDay}`)
    .then(response => response.json())
    .then(renderExcuse)
    .then(console.warn);
};

function renderExcuse(excuse) {
  excuseParagraph.textContent = excuse;
  // myForm.insertAdjacentHTML('afterend', `<p>${excuse}</p>`);
};
