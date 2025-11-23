const toggleMenu = () => {
  const navMenu = document.querySelector(".nav-links");

  navMenu.classList.toggle("active");
};

const accordion = document.querySelector(".dropdown");
const menu = document.querySelector(".dropdown-content");

accordion.addEventListener("click", ()=> {

  accordion.classList.toggle("active");

   // <ul class="dropdown-content menu">
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});


document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(e);
    }
  });
});

const tab = () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const contentsCards = document.querySelectorAll(".price-cards");

  tabBtns.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active states
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      contentsCards.forEach((content) => content.classList.remove("active"));

      // Add active to the clicked button
      button.classList.add("active");

      // Determine which content to show
      const contentId =
        button.id === "monthlyBtn" ? "monthlyContent" : "yearlyContent";
      document.getElementById(contentId).classList.add("active");
    });
  });
};

// ✅ Call the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", tab);

const qualityTab = () => {
  const qualityBtns = document.querySelectorAll(".qualityBtn");
  const qualityCards = document.querySelectorAll(".quality-card");

  qualityBtns.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active states
      qualityBtns.forEach((btn) => btn.classList.remove("active"));
      qualityCards.forEach((content) => content.classList.remove("active"));

      // Add active to the clicked button
      button.classList.add("active");

      // Determine which content to show
      const btnId = button.id;
      const contentId = btnId.replace("Btn", "Content");
      const activeContent = document.getElementById(contentId);

      // Show corresponding content
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
};

qualityTab();

const servicesTab = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const serviceBtns = section.querySelectorAll(".sectionsBtn");
    const serviceCards = section.querySelectorAll(".section-img");

    // Only run if the section actually contains tab content
    if (serviceBtns.length && serviceCards.length) {
      serviceBtns.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active states within this section only
          serviceBtns.forEach((btn) => btn.classList.remove("active"));
          serviceCards.forEach((card) => card.classList.remove("active"));

          // Add active class to clicked button
          button.classList.add("active");

          // Match image ID within the same section
          const btnId = button.id; // e.g., "firstBtn"
          const cardId = btnId.replace("Btn", "Img"); // → "firstImg"
          const activeCard = section.querySelector(`#${cardId}`);

          if (activeCard) {
            activeCard.classList.add("active");
          }
        });
      });
    }
  });
};

servicesTab();

document.querySelectorAll(".protocol-container").forEach((container) => {
  const buttons = container.querySelectorAll(".protocolBtn");
  const cards = container.querySelectorAll(".protocol-card");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Remove active state only within this section
      buttons.forEach((b) => b.classList.remove("active"));
      cards.forEach((c) => c.classList.remove("active"));

      // Activate the clicked button and its matching card
      btn.classList.add("active");
      cards[index].classList.add("active");
    });
  });

  // Default active state for each section
  if (buttons.length > 0 && cards.length > 0) {
    buttons[0].classList.add("active");
    cards[0].classList.add("active");
  }
});
