console.clear();

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
  event.target.reset();
  questionField.focus();
});
