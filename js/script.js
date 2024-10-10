// global variables
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".card");

    const addToCartButton = card.querySelector(".add-to-cart-button");
    addToCartButton.classList.add("hidden");

    const incDecButtons = card.querySelector('.increment-decrement-buttons');
    incDecButtons.classList.remove('hidden');

    // increase/decrease 
    let selectedItemQuantityUi = card.querySelector('#selected-items-ui');
    let selectedItemQuantity = parseInt(selectedItemQuantityUi.innerText);
    console.log(selectedItemQuantity);
    const increasingBtn = card.querySelector('#increase-button');
    const decreasingBtn = card.querySelector('#decrease-button');

    increasingBtn.addEventListener('click', () => {
        selectedItemQuantity += 1;
        selectedItemQuantityUi.textContent = selectedItemQuantity;
    })

    decreasingBtn.addEventListener('click', () => {
        
        if(selectedItemQuantity > 1){
            selectedItemQuantity -= 1;
        }
        else if (selectedItemQuantity === 1 && addToCartButton.classList.contains('hidden')){
            addToCartButton.classList.remove('hidden');
            incDecButtons.classList.add('hidden');
            decreasingBtn.setAttribute('type', 'disabled');
        }
        selectedItemQuantityUi.textContent = selectedItemQuantity;
    })
  });
});
