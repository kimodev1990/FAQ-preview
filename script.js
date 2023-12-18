var toggleButton = document.getElementsByClassName("button-expand");
var toggleText = document.getElementsByClassName("container__questions__size");

for (let i = 0; i < toggleButton.length; i++) {
  toggleButton[i].addEventListener("click", () => {
    var answer = document.getElementsByClassName("container__answer");

    if (answer[i].classList.contains("answerText") === true) {
      answer[i].classList.remove("answerText");
    } else {
      answer[i].classList.add("answerText");
    }

    var toggleImage = document.getElementsByClassName(
      "container__questions__minus__iconMinus"
    );

    if (
      toggleImage[i].getAttribute("src") === "./assets/images/icon-minus.svg"
    ) {
      toggleImage[i].setAttribute("src", "./assets/images/icon-plus.svg");
    } else if (
      toggleImage[i].getAttribute("src") === "./assets/images/icon-plus.svg"
    ) {
      toggleImage[i].setAttribute("src", "./assets/images/icon-minus.svg");
    }
  });
}

for (let i = 0; i < toggleText.length; i++) {
  toggleText[i].addEventListener("click", () => {
    var answer = document.getElementsByClassName("container__answer");

    if (answer[i].classList.contains("answerText") === true) {
      answer[i].classList.remove("answerText");
    } else {
      answer[i].classList.add("answerText");
    }

    var toggleImage = document.getElementsByClassName(
      "container__questions__minus__iconMinus"
    );

    if (
      toggleImage[i].getAttribute("src") === "./assets/images/icon-minus.svg"
    ) {
      toggleImage[i].setAttribute("src", "./assets/images/icon-plus.svg");
    } else if (
      toggleImage[i].getAttribute("src") === "./assets/images/icon-plus.svg"
    ) {
      toggleImage[i].setAttribute("src", "./assets/images/icon-minus.svg");
    }
  });
}
