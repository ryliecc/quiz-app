const cards = document.querySelectorAll('[data-js="question-card"]');

cards.forEach((card) => {
  const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark-button--enabled");
  });
  const answerButton = card.querySelector(
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

  const answerButtonEnabled = card.querySelector(
    '[class="answer-button--enabled"]'
  );
});
