function toggleText() {
    var text = document.getElementById("moreText");
    var button = document.getElementById("toggleButton");
  
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "inline"; // Toon de verborgen tekst
      button.textContent = "Minder lezen"; // Verander de knoptekst naar "Minder lezen"
    } else {
      text.style.display = "none"; // Verberg de tekst weer
      button.textContent = "Meer lezen"; // Verander de knoptekst terug naar "Meer lezen"
    }
  }

//overlay

// Function to toggle visibility and blur effect
function toggleText(button) {
  var card = button.closest('.card'); // Get the current card
  var moreText = card.querySelector("#moreText"); // Select moreText within the current card
  var overlay = document.getElementById("overlay");

  // Check if the text is already visible
  if (moreText.classList.contains("visible")) {
    moreText.classList.remove("visible");
    card.classList.remove("active");
    overlay.style.display = "none";
    button.textContent = "Meer lezen";
  } else {
    moreText.classList.add("visible");
    card.classList.add("active");
    overlay.style.display = "block";
    button.textContent = "Minder lezen";
  }
}

// Optional: Close overlay by clicking outside the card
document.getElementById("overlay").onclick = function() {
  var activeCard = document.querySelector('.card.active');
  var overlay = document.getElementById("overlay");

  if (activeCard) {
    var moreText = activeCard.querySelector("#moreText");
    moreText.classList.remove("visible");
    activeCard.classList.remove("active");
  }

  overlay.style.display = "none";
  document.querySelector("#toggleButton").textContent = "Meer lezen";
};



  