const textInput = document.querySelector(".text-input");
const wordCountEl = document.querySelector(".word-count");
const letterCountEl = document.querySelector(".letter-count");
const spaceCountEl = document.querySelector(".space-count");

const checks = [atLeastTwoChar, absenceThreeConsective];

function atLeastTwoChar(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 2;
}

function absenceThreeConsective(text) {
  for (const character of text) {
    const occurrences = Array.from(text).filter((v) => v == character).length;

    if (occurrences >= 3) {
      return false;
    }
  }
  return true;
}

textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCount = (textInput.value.match(/\s+/g) || []).length;
  let wordCount = 0;

  outer: for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue outer;
      }
    }
    wordCount++;
  }

  wordCountEl.textContent = wordCount;
  letterCountEl.textContent = letterCount;
  spaceCountEl.textContent = spaceCount;
});
