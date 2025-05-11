/* ----------------------------------- CoinswitchHistory  Script ------------------------------------------------ */

    const data = [
      ["23 Feb 24, 09:41 PM", "UPI Deposit", "₹62,500", "3rd Semester Fee Prashanna","Custom message for this transaction", "path/to/image1.jpg"],
      ["23 Feb 24, 09:52 PM", "UPI Deposit", "₹27,000", "3rd Semester Fee Prashanna","Custom message for this transaction", "path/to/image1.jpg"],
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

data.forEach(([datetime, type, amountStr, remark, customText, imagePath], index) => {
  const isDeposit = type.includes("Deposit");
  const card = document.createElement("div");
  const cardClass = isDeposit ? "deposit" : "withdrawal";
  const icon = isDeposit ? "💰" : "💸";
  const highlight = remark.toLowerCase().includes("ritesh") ? "highlight-ritesh" : "";

  card.className = `transaction-card ${cardClass} ${highlight}`;
  card.style.cursor = "pointer"; // So it looks clickable

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
    <div class="details" style="display: none; margin-top: 10px;">
      <p>${customText}</p>
      <img src="${imagePath}" alt="Custom Image" style="max-width: 100%; border-radius: 8px;">
    </div>
  `;

  card.addEventListener("click", () => {
    const details = card.querySelector(".details");
    const isVisible = details.style.display === "block";
    details.style.display = isVisible ? "none" : "block";
  });

  container.appendChild(card);
});
