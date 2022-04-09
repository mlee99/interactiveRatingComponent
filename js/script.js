let appRating = () => {
    let selection = 0;

    let btnOne = document.querySelector('#one')
    console.log('btnOne')

    let ratingSelection = () => {
        let youSelected = document.querySelector('.you-selected')
        let btnOne = document.querySelector('.rating .one');
        console.log('btnOne')
        let btnTwo = document.querySelector('#two');
        let btnThree = document.querySelector('#three');
        let btnFour = document.querySelector('#four');
        let btnFive = document.querySelector('#five');
        let ratingOption = [btnOne, btnTwo, btnThree, btnFour, btnFive]

        ratingOption.forEach(option => {
            option.addEventListener("click", function () {
                youSelected.textContent = `You selected ${selection} out of 5.`;
          })
        });

        // switch (selection) {
        //     case 1:
        //         youSelected = `You selected ${selection} out of 5.`;
        //         break;
        //     case 2:
        //         youSelected = `You selected ${selection} out of 5.`;
        //         break;
        //     case 3:
        //         youSelected = `You selected ${selection} out of 5.`;
        //         break;
        //     case 4:
        //         youSelected = `You selected ${selection} out of 5.`;
        //         break;
        //     case 5:
        //         youSelected = `You selected ${selection} out of 5.`;
        //         break;
        //     default:
        //         youSelected = "Please select a rating.";
        // } 

        console.log(selection)
    }

    ratingSelection();

    let displayEverything = () => {

    }
}

appRating();