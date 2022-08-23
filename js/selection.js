const cartArray = [];



function display(cartPlayer) {
    const listItem = document.getElementById('cart-players');
    listItem.innerHTML = '';

    for (let i = 0; i <= 4; i++) {
        if (i > 5) {
            alert("Hello! I am an alert box!!");
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



document.getElementById('player-btn').onclick = function () {
    //disable
    this.disabled = true;

    //do some validation stuff
}
