const price = 500;
const selectedSeat = document.getElementById('selected_seat');

function calculateTicketPrice(){
    const all_seats = document.querySelectorAll('button[data-seat][data-selected="true"]');
    const totalAmount = all_seats.length*price;

    document.getElementById('total_price').textContent = totalAmount.toFixed(2);
}

function ticketSelection() {
    const all_seats = document.querySelectorAll('button[data-seat]');

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
    }
}


function updateSeatCount() {
    const seatCountID = document.getElementById('seat-count');
    seatCountID.innerText = seatCount;
}


ticketSelection();
