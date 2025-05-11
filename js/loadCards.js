document.addEventListener("DOMContentLoaded", async () => {
  const files = ["card2.html", "card3.html", "card4.html", "card5.html"];
  const wrapper = document.getElementById("card-wrapper");

  for (const file of files) {
    try {
      const response = await fetch(`sections/${file}`);
      const html = await response.text();

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Re-insert scripts manually so they run
      tempDiv.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });

      wrapper.appendChild(tempDiv.firstElementChild);

      // ✅ If this is card5.html, load coinswitch.js after inserting it
      if (file === "card5.html") {
        const coinswitchScript = document.createElement("script");
        coinswitchScript.src = "js/coinswitch.js";
        document.body.appendChild(coinswitchScript);
      }
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }
});
