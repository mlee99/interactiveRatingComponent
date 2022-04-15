const appRating = () => {
  let ratingBtn = null;

  const btnSeleciton = () => {
    ratingBtn = document.querySelectorAll(".rating");
    let lastBtn;
    let answer = document.querySelector(".you-selected").innerText;

    ratingBtn.forEach((option) => {
      option.addEventListener("click", function () {
        lastBtn && (lastBtn.style.backgroundColor = null);
        (lastBtn = option).style.backgroundColor = "hsl(25,97%,53%)";
        console.log(option.innerText);
        ratingBtn = option.innerText;
        // answer = `You selected ${ratingBtn} out of 5`;
        // console.log(answer);
        // return answer;
      });

      submitButton(answer)
    });


    // submitButton(ratingBtn);
  };

  btnSeleciton();

  function submitButton(selection) {
    let byeStar = document.querySelector(".star-container");
    let byeHeader = document.querySelector(".header");
    let byeCall = document.querySelector(".call");
    let byeRating = document.querySelector(".button-flex");
    let showEnd = document.querySelector(".thank-you-state");
    let answer = document.querySelector(".you-selected").innerText;
    let submitAnswer = document.querySelector(".submit-button");
    let byeContent = [byeStar, byeHeader, byeCall, byeRating, submitAnswer];

    // byeContent.forEach((option) => {
    //   console.log(option);
    // });


    // submitAnswer.addEventListener("click", function () {
    //   byeStar.style.display = 'None';
    // })

    submitAnswer.addEventListener("click", function () {
      if (ratingBtn != null) {
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
