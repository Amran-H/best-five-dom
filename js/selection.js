const cartArray = [];



function display(cartPlayer) {
    const listItem = document.getElementById('cart-players');
    listItem.innerHTML = '';

    for (let i = 0; i <= 5; i++) {
        if (i > 4) {
            return alert("Maximun 5 players can be choosed!!");

        }
        const name = cartArray[i].playerName;

        const li = document.createElement("li");

        li.innerHTML =
            ` <div class="flex flex-row
            pl-12 ">
            <p class="pr-4 text-gray-500 font-bold">${i + 1}</p>
            <p> ${name}</p>
        </div>
            `
            ;


        listItem.appendChild(li);
    }
}

function addToCart(element) {


    const playerName = element.parentNode.parentNode.children[0].innerText;


    const productobj = { playerName: playerName }

    cartArray.push(productobj);

    display(cartArray);
}


document.getElementById('btn-player-price').addEventListener('click', function () {
    const playerField = document.getElementById('player-field');
    const playerPrice = playerField.value;

    const playerExpenseElement = document.getElementById('player-expense');
    playerExpenseElement.innerText = playerPrice * cartArray.length;
    const playerExpenseString = playerExpenseElement.innerText;
    const playerExpense = parseInt(playerExpenseString);
    // playerField.value = '';

    document.getElementById('btn-total-price').addEventListener('click', function () {
        const managerField = document.getElementById('manager-field');
        const managerPriceString = managerField.value;
        const managerPrice = parseInt(managerPriceString);
        const coachField = document.getElementById('coach-field');
        const coachPriceString = coachField.value;
        const coachPrice = parseInt(coachPriceString);


        const totalExpenseElement = document.getElementById('total-expense');
        const totalExpenseString = totalExpenseElement.innerText;
        totalExpenseElement.innerText = managerPrice + coachPrice + playerExpense;
        // const totalExpense = parseInt(totalExpenseString);
        // playerField.value = '';
    })
})











// document.getElementById('player-btn').onclick = function () {
//     //disable
//     this.disabled = true;

//     //do some validation stuff
// }
