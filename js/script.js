const appRating = () => {
  const btnSeleciton = () => {
    let allBtns = document.querySelectorAll(".rating");
    let lastBtn;

    allBtns.forEach((option) => {
      option.addEventListener("click", function () {
        lastBtn && (lastBtn.style.backgroundColor = null);
        (lastBtn = option).style.backgroundColor = "hsl(25,97%,53%)";
        console.log(option.innerText);
      });
    });

    submitButton(allBtns);
  };

  btnSeleciton();

  function submitButton(selection) {
    let byeStar = document.queryCommandValue(".star");
    let byeHeader = document.querySelector(".header");
    let byeCall = document.querySelector(".call");
    let byeRating = document.querySelector(".button-flex");
    let byeContent = [byeStar, byeHeader, byeCall, byeRating];

    byeContent.forEach((option) => {
      console.log(option);
    });

    let showEnd = document.querySelector(".thank-you-state");
    let answer = document.querySelector(".you-selected").innerText;
    let submitAnswer = document.querySelector(".submit-button");

    submitAnswer.addEventListener("click", function () {
      if (selection) {
        byeContent.forEach((selection) => {
          selection.style.display = "none";
          showEnd.style.display = "flex";
          answer = `You selected ${selection} out of 5`;
        });
      } else {
        window.alert("Please help us by selecting a rating.");
      }
    });
  }
};

appRating();
