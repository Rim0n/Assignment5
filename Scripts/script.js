const price = 500;
const selectedSeat = document.getElementById('selected_seat');

function calculateTicketPrice() {
    const all_seats = document.querySelectorAll('button[data-seat][data-selected="true"]');
    const totalAmount = all_seats.length * price;

    const totalPrice = document.getElementById('total_price').textContent = totalAmount.toFixed(2);
    const grandTotal1 = document.getElementById('grand-total');
    grandTotal1.innerText = totalPrice;
    return totalPrice;
}

const inputCoupon = document.getElementById('input_coupon');
function applyCoupon() {
    let totalPrice = calculateTicketPrice();
    
    const couponCode = inputCoupon.value.trim();
    const grandTotal1 = document.getElementById('grand-total');
    // console.log('Entered Coupon:', couponCode);
    const couponCouple20 = document.getElementById('coupon-COUPLE20').innerText;
    const couponNew15 = document.getElementById('coupon-NEW15').innerText;
    const couponDiv = document.getElementById('coupon-div');
    const discountPrice = document.getElementById('discount');
    const discountDiv = document.getElementById('discount-div');
    if (couponCode === couponNew15) {
        const discount = totalPrice * 0.15;
        const grandTotal = totalPrice - discount;
        grandTotal1.innerText = grandTotal;
        discountDiv.classList.remove('hidden');
        discountPrice.innerText = discount;
        couponDiv.classList.add('hidden');

    }
    else if (couponCode === couponCouple20) {
        const discount = totalPrice * 0.2;
        const grandTotal = totalPrice - discount;
        grandTotal1.innerText = grandTotal;
        discountPrice.innerText = discount;
        couponDiv.classList.add('hidden');
    }

    else if (couponCode === '') {
        alert('Please enter a coupon code.');
    } else {
        alert('Invalid coupon code. Please try again.');
    }
}


function ticketSelection() {
    const all_seats = document.querySelectorAll('button[data-seat]');
    calculateTicketPrice();
    for (const seat of all_seats) {
        seat.addEventListener('click', () => {
            const seatText = seat.innerText;
            const seatSelected = seat.getAttribute('data-selected') === 'true';

            if (seatSelected) {

                seat.classList.remove('bg-[#1dd100]', 'text-white');
                seat.classList.add('bg-gray-950/10', 'text-gray-950/60');

                seat.setAttribute('data-selected', 'false');
                removeFromDiv(seatText);


            } else {

                if (selectedSeat.children.length >= 4) {
                    alert("You can select up to 4 seats only.");
                    return;
                }


                seat.classList.add('bg-[#1dd100]', 'text-white');
                seat.classList.remove('bg-gray-950/10', 'text-gray-950/60');
                seat.setAttribute('data-selected', 'true');
                appendToDiv(seatText);
            }

            calculateTicketPrice();
        });
    }
}


let seatCount = 0;
function appendToDiv(seatText) {
    const creatingSeatP = document.createElement('p');
    creatingSeatP.classList.add('text-gray-950/60', 'text-base', 'font-normal', 'font-[inter-font]');
    creatingSeatP.innerText = seatText;
    creatingSeatP.setAttribute('data-seat-text', seatText);

    const creatingClassP = document.createElement('p');
    const creatingFareP = document.createElement('p');
    creatingClassP.classList.add('text-gray-950/60', 'text-base', 'font-normal', 'font-[inter-font]');
    creatingFareP.classList.add('text-gray-950/60', 'text-base', 'font-normal', 'font-[inter-font]');

    creatingClassP.innerText = "Economy";
    creatingFareP.innerText = "500";

    const creatingDiv = document.createElement('div');
    creatingDiv.classList.add('flex', 'justify-between');

    creatingDiv.appendChild(creatingSeatP);
    creatingDiv.appendChild(creatingClassP);
    creatingDiv.appendChild(creatingFareP);

    if (selectedSeat.children.length < 4) {
        selectedSeat.appendChild(creatingDiv);
        seatCount++;
        updateSeatCount();
        checkAllinfoInserted();
    }



    // const seatCountID = document.getElementById('seat-count');
    // seatCountID.innerText = seatCount;
    // console.log(seatCount);

}

function removeFromDiv(seatText) {
    const toRemove = selectedSeat.querySelector(`div > p[data-seat-text="${seatText}"]`);
    if (toRemove) {
        selectedSeat.removeChild(toRemove.parentElement);
        seatCount--;
        updateSeatCount();
        checkAllinfoInserted();
    }
}

const seatCountID = document.getElementById('seat-count');
function updateSeatCount() {

    seatCountID.innerText = seatCount;
}
ticketSelection();











const inputName = document.getElementById('input-name');
const inputNumber = document.getElementById('input-number');
const inputEmail = document.getElementById('input-email');
const nextButton = document.getElementById('next-button');

console.log(seatCount);


function checkAllinfoInserted() {
    const isNameFilled = inputName.value.trim() !== '';
    const isNumberFilled = inputNumber.value.trim() !== '';
    const isEmailFilled = inputEmail.value.trim() !== '';
    let isMinSeatTaken;

    if (seatCount > 0) {
        isMinSeatTaken = 1;
    }



    if (isNameFilled && isNumberFilled && isEmailFilled && isMinSeatTaken) {
        nextButton.classList.remove('disabled:bg-gray-400');
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.classList.add('disabled:bg-gray-400');
        nextButton.setAttribute('disabled', 'true');
    }
}
document.addEventListener('input', checkAllinfoInserted);

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

nextButton.addEventListener('click', function () {


    header.classList.add('hidden');
    main.classList.add('hidden');
    footer.classList.add('hidden');
    secondPage.classList.remove('hidden');

});

const secondPage = document.getElementById('second-page');

