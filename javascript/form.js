const form = document.querySelector('[data-js="create-form"]');
const questionField = document.querySelector(
  '[data-js="create-form__question"]'
);
const answerField = document.querySelector('[data-js="create-form__answer"]');
const tagField = document.querySelector('[data-js="create-form__tag"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionText = questionField.value;
  const answerText = answerField.value;
  const tagText = tagField.value;

  const newCard = document.createElement("section");
  newCard.classList.add("question-card");
  newCard.setAttribute("data-js", "question-card");
  newCard.innerHTML = `
  <button type="button" aria-label="bookmark" class="bookmark-button" data-js="bookmark-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            aria-hidden="true"
            class="bookmark-svg"
          >
            <path d="m23 27-8-7-8 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v22z" />
          </svg>
        </button>
        <p class="question-card__question">${questionText}</p>
        <button
          type="button"
          class="question-card__answer-button"
          data-js="question-card__answer-button"
        >
          Show answer
        </button>
        <p class="question-card__answer">${answerText}</p>
        <ul class="question-card__taglist">
          <li class="question-card__tag"><a href="Beispiellink1">#${tagText}</a></li>
        </ul>
        `;
  cardContainer.append(newCard);
  /* Beginn copy paste card.js */

  const bookmarkButton = newCard.querySelector('[data-js="bookmark-button"]');

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark-button--enabled");
  });
  const answerButton = newCard.querySelector(
    '[data-js="question-card__answer-button"'
  );

  answerButton.addEventListener("click", () => {
    answerButton.classList.toggle("answer-button--enabled");
    if (answerButton.textContent == "Hide answer") {
      answerButton.textContent = "Show answer";
    } else {
      answerButton.textContent = "Hide answer";
    }
  });

  /* Ende copy paste card.js */
  event.target.reset();
  questionField.focus();
});

const inputSections = document.querySelectorAll(
  '[data-js="create-form__input-section"]'
);

inputSections.forEach((section) => {
  console.log(section);
  const inputElement = section.querySelector(".create-form__textarea");
  const amountLeft = section.querySelector('[data-js="amountLeft"]');
  const maxLength = inputElement.getAttribute("maxlength");
  console.log(inputElement);
  const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
  };

  updateAmountLeft(maxLength);

  inputElement.addEventListener("input", () => {
    updateAmountLeft(maxLength - inputElement.value.length);
  });

  form.addEventListener("submit", () => {
    updateAmountLeft(maxLength);
  });
});
