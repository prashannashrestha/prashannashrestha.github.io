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
            popup.classList.remove('active');
        });

        // Close popup when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('li') && !event.target.closest('.popup')) {
                popup.classList.remove('active');
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

/* ----------------------------------- CoinswitchHistory  Script ------------------------------------------------ */
    const data = [
      ["23 Feb 24, 09:41 PM", "UPI Deposit", "₹62,500", "3rd Semester Fee Prashanna"],
      ["23 Feb 24, 09:52 PM", "UPI Deposit", "₹27,000", "3rd Semester Fee Prashanna"],
      ["25 Feb 24, 03:30 AM", "UPI Deposit", "₹53,000", "3rd Semester Fee Prashanna"],
      ["27 Feb 24, 06:20 PM", "Withdrawal", "₹1,000", "Prashanna Food"],
      ["04 Mar 24, 07:42 PM", "Withdrawal", "₹20,000", "Pankaj Loan PENDING"],
      ["04 Mar 24, 11:57 PM", "Withdrawal", "₹2,000", "Sujit Loan Paid "],
      ["07 Mar 24, 02:41 PM", "Withdrawal", "₹500", "Prashanna Food"],
      ["14 Mar 24, 11:26 PM", "Withdrawal", "₹10,000", "Withdraw by Ritesh"],
      ["16 Mar 24, 02:52 AM", "Withdrawal", "₹10,000", "Withdraw by Ritesh"],
      ["17 Mar 24, 08:14 PM", "Withdrawal", "₹77,195", "Withdraw by Ritesh"],
      ["19 Mar 24, 02:23 PM", "UPI Deposit", "₹48,000", "Deposit by Ritesh"],
      ["23 Mar 24, 02:31 PM", "UPI Deposit", "₹9,000", "Shiv Gave me Loan of 9k"],
      ["23 Mar 24, 02:33 PM", "UPI Deposit", "₹11,000", "Shiv Gave me Loan of 11k "],
      ["23 Mar 24, 06:31 PM", "UPI Deposit", "₹15,000", "15k Came from somwhere"],
      ["26 Mar 24, 11:54 PM", "UPI Deposit", "₹100", "Test transaction"],
      ["26 Mar 24, 07:41 PM", "Withdrawal", "₹500", "Prashanna Food"],
      ["29 Mar 24, 02:06 AM", "Withdrawal", "₹5,000", "15k Gone part 1"],
      ["29 Mar 24, 10:46 PM", "Withdrawal", "₹10,000", "15k Gone part 2"],
      ["30 Mar 24, 02:23 AM", "Withdrawal", "₹9,000", "Withdraw by Ritesh . (Shiv 9k gave to ritesh STAKE) "],
      ["30 Mar 24, 09:05 PM", "Withdrawal", "₹500", "Prashanna Food"],
      ["30 Mar 24, 09:30 PM", "Withdrawal", "₹9,991", "Withdraw 10k by be"],
      ["02 Apr 24, 04:14 PM", "UPI Deposit", "₹11,000", "Added 1k from GPAY CRICKET GAME and 11k DEPOSITED"],
      ["02 Apr 24, 09:06 PM", "Withdrawal", "₹500", "Prashanna Food"],
      ["02 Apr 24, 10:02 PM", "Withdrawal", "₹11,000", "Withdraw by Ritesh . (Shiv 11k gave to ritesh STAKE)"],
      ["28 Apr 24, 09:42 AM", "Withdrawal", "₹2,500", "Gave Astik Shah (He gave me Cash)"],
      ["28 Apr 24, 10:17 AM", "Withdrawal", "₹500", "Gave to Astik Shah (He gave me Cash)"],
      ["29 Apr 24, 07:41 AM", "Withdrawal", "₹5,000", "Ritesh Train Stake "],
      ["29 Apr 24, 10:22 AM", "UPI Deposit", "₹500", "Astik Cash Deposited"],
      ["29 Apr 24, 12:06 PM", "UPI Deposit", "₹2,000", "Astik Cash Deposited"],
      ["29 Apr 24, 05:03 PM", "Withdrawal", "₹11,000", "Ritesh Train Stake"],
      ["30 Apr 24, 02:33 AM", "Withdrawal", "₹10,000", "Ritesh Stake Train NO PERMISSION"],
      ["09 May 24, 07:43 PM", "Withdrawal", "₹29,296", "Ritesh Stake BIRGUNJ , NO PERMISSION"],
      ["11 May 24, 12:36 PM", "Withdrawal", "₹57,983", "HOME : 20,000 IC CASH + 50,000 NC CASH , Ritesh took : 6733"],
      ["18 May 24, 11:26 AM", "Withdrawal", "₹20,000", "Ritesh NC CONVERT . Gave me 30,000 NC"],
      ["21 May 24, 11:54 AM", "Withdrawal", "₹20,000", "Ritesh Withdraw "],
      ["22 May 24, 05:15 PM", "Withdrawal", "₹34,000", "Ritesh Withdraw"],
      ["22 May 24, 05:54 PM", "Withdrawal", "₹925", "Ritesh Withdraw, He gave me just 25,000 IC "],
      ["23 May 24, 04:48 PM", "Withdrawal", "₹30,000", "Ritesh , NO PERMISSION"],
      ["24 May 24, 06:12 PM", "Withdrawal", "₹32,000", "Ritesh , Attached Screenshots. Told his DAD needed money."],
      ["26 May 24, 10:40 PM", "Withdrawal", "₹15,000", "Ritesh , NO PERMISSION"],
      ["29 May 24, 02:43 PM", "Withdrawal", "₹8,000", "Withdraw by Ritesh"],
      ["30 May 24, 08:02 AM", "Withdrawal", "₹15,000", "Withdraw by Ritesh"],
      ["10 Jun 24, 09:02 PM", "Withdrawal", "₹5,000", "ritesh sold my crypto NO PERMISSION"],
      ["14 Jun 24, 08:19 PM", "Withdrawal", "₹3,761", "ritesh sold my crypto NO PERMISSION"],
      ["14 Jun 24, 10:21 PM", "Withdrawal", "₹5,231", "ritesh sold my crypto NO PERMISSION"],
      ["16 Jun 24, 03:55 PM", "Withdrawal", "₹5,980", "ritesh sold my crypto NO PERMISSION"],
      ["16 Jun 24, 04:13 PM", "Withdrawal", "₹10,822", "ritesh sold my crypto NO PERMISSION"],
      ["16 Jun 24, 04:50 PM", "Withdrawal", "₹10,863", "ritesh sold my crypto NO PERMISSION"]
    ];

    const container = document.getElementById("historyContainer");
    let totalDeposited = 0, totalWithdrawn = 0;

    data.forEach(([datetime, type, amountStr, remark]) => {
      const amount = parseFloat(amountStr.replace(/[₹,]/g, ""));
      const isDeposit = type.includes("Deposit");

      if (isDeposit) totalDeposited += amount;
      else totalWithdrawn += amount;

      const card = document.createElement("div");
      const cardClass = isDeposit ? "deposit" : "withdrawal";
      const icon = isDeposit ? "💰" : "💸";
      const highlight = remark.toLowerCase().includes("ritesh") ? "highlight-ritesh" : "";

      card.className = `transaction-card ${cardClass} ${highlight}`;
      card.innerHTML = `
        <div class="top-row">
          <div>
            <div class="type">${icon} ${type}</div>
            <div class="status completed">Completed</div>
          </div>
          <div>
            <div class="amount">${amountStr}</div>
            <div class="datetime">${datetime}</div>
          </div>
        </div>
        <div class="remarks">${remark}</div>
      `;
      container.appendChild(card);
    });

    const format = n => `₹${n.toLocaleString("en-IN")}`;
    document.getElementById("totalDeposited").textContent = format(totalDeposited);
    document.getElementById("totalWithdrawn").textContent = format(totalWithdrawn);
    document.getElementById("balance").textContent = format(totalDeposited - totalWithdrawn);   
