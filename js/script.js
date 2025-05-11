        // Search functionality
        document.getElementById('search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const listItems = document.querySelectorAll('li');

            listItems.forEach(item => {
                const name = item.querySelector('span').textContent.toLowerCase();
                if (name.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });



        // Last updated timestamp
        const lastUpdated = document.getElementById('last-updated');
        const date = new Date();
        lastUpdated.textContent = `Last updated: ${date.toLocaleString()}`;

        // Calculate total sum
        function calculateTotalSum() {
            const amounts = document.querySelectorAll('.red_boxtext');
            let total = 0;
            amounts.forEach(amount => {
                const value = parseFloat(amount.textContent.replace(/[^0-9.]/g, ''));
                if (amount.textContent.includes('Lakh')) {
                    total += value * 100000; // Convert lakh to rupees
                } else if (amount.textContent.includes('Thousand')) {
                    total += value * 1000; // Convert thousand to rupees
                } else {
                    total += value; // Assume it's already in rupees
                }
            });
            document.getElementById('total-sum').textContent = `Total Amount Owed: ₹${total.toLocaleString()}`;
        }

        calculateTotalSum(); // Initial calculation

        // Popup functionality
        const popup = document.querySelector('.popup');
        const popupImage = document.getElementById('popup-image');
        const popupName = document.getElementById('popup-name');
        const popupAmount = document.getElementById('popup-amount');
        const popupDate = document.getElementById('popup-date');
        const popupNotes = document.getElementById('popup-notes');
        const popupCash = document.getElementById('popup-cash');
        const popupExtra = document.getElementById('popup-extra');

        const closePopup = document.getElementById('close-popup');

        document.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const image = item.getAttribute('data-image');
                const name = item.getAttribute('data-details');
                const amount = item.getAttribute('data-amount');
                const date = item.getAttribute('data-date');
                const notes = item.getAttribute('data-notes');
                const cash = item.getAttribute('data-cash');
                const extra = item.getAttribute('data-extra');


                popupImage.src = image;
                popupName.textContent = name;
                popupAmount.textContent = amount;
                popupDate.textContent = date;
                popupNotes.textContent = notes;
                popupCash.textContent = cash;
                popupExtra.textContent = extra;
                popup.classList.add('active');
            });
        });

        closePopup.addEventListener('click', () => {
            popup.classList.add('closing');
            setTimeout(() => {
                popup.classList.remove('active', 'closing');
            }, 400); // match the animation duration
            
        });

        // Close popup when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('li') && !event.target.closest('.popup')) {
            popup.classList.add('closing');
            setTimeout(() => {
                popup.classList.remove('active', 'closing');
            }, 400); // match the animation duration
            
            }
        });


// Function to highlight specific text in red
function highlightCashText() {
    const listItem = document.querySelector('li[data-details="Ritesh Kumar Chauhan"]'); // Select the specific <li>
    let cashText = listItem.getAttribute('data-cash'); // Get the value of data-cash
    let cashExtra = listItem.getAttribute('data-extra'); // Get the value of data-cash

    // Wrap "9,000 Nc Cash" and "14,000 Nc Cash" in <span> tags with the red-text class
    cashText = cashText.replace(/9,000 Nc Cash/g, '<span class="red_text">9,000 Nc Cash</span>');
    cashText = cashText.replace(/14,000 Nc Cash/g, '<span class="red_text">14,000 Nc Cash</span>');
    cashExtra = cashExtra.replace(/1230 INR/g, '<span class="red_text">1230 INR</span>');
    cashExtra = cashExtra.replace(/800 INR/g, '<span class="red_text">800 INR</span>');
    cashExtra = cashExtra.replace(/1000 INR/g, '<span class="red_text">1000 INR</span>');
    cashExtra = cashExtra.replace(/4000 INR/g, '<span class="red_text">4000 INR</span>');
    cashExtra = cashExtra.replace(/6510 INR/g, '<span class="red_text">6510 INR</span>');

    // Update the data-cash attribute with the new HTML
    listItem.setAttribute('data-cash', cashText);
    listItem.setAttribute('data-extra', cashExtra);

    // If you want to display the formatted text in the popup, update the popup logic
    listItem.addEventListener('click', () => {
        const cash = listItem.getAttribute('data-cash');
        const extra = listItem.getAttribute('data-extra');

        document.getElementById('popup-cash').innerHTML = cash; // Use innerHTML to render the HTML
        document.getElementById('popup-extra').innerHTML = extra	; // Use innerHTML to render the HTML

    });
}

// Call the function to highlight the text
highlightCashText();

        // Function to update the elapsed time
        function updateElapsedTime() {
            const countdownElements = document.querySelectorAll('.countdown');
            const now = new Date().getTime();

            countdownElements.forEach((element, index) => {
                const parentLi = element.closest('li');
                const startDate = new Date(parentLi.getAttribute('data-date')).getTime();
                const timeElapsed = now - startDate;

                if (timeElapsed > 0) {
                    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

                    element.querySelector('#days' + (index + 1)).textContent = days;
                    element.querySelector('#hours' + (index + 1)).textContent = hours;
                    element.querySelector('#minutes' + (index + 1)).textContent = minutes;
                    element.querySelector('#seconds' + (index + 1)).textContent = seconds;
                } else {
                    element.innerHTML = "<div>Timer not started!</div>";
                }
            });
        }

        // Update elapsed time every second
        setInterval(updateElapsedTime, 1000);
        updateElapsedTime(); // Initial call

 
