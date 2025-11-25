const toggleMenu = () => {
  const navMenu = document.querySelector(".nav-links");

  navMenu.classList.toggle("active");
};

const accordion = document.querySelector(".dropdown");
const menu = document.querySelector(".dropdown-content");

accordion.addEventListener("click", () => {
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

// ###############################################################
// ###############################################################
// ############# CONTACT FORM EMAILJS INTEGRATION ################
// ###############################################################
// ###############################################################

// Contact form emailjs integration
// 1) Initialise EmailJS with your public key
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // e.g. "d9xXxXxXxXxXxX"
})();

// 2) Handle form submission
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // UI: show sending state
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending…";
    statusEl.textContent = "";

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#contactForm")
      .then(function () {
        statusEl.textContent =
          "Thank you. Your message has been sent to the Noornest team.";
        contactForm.reset();
      })
      .catch(function (error) {
        console.error("EmailJS error:", error);
        statusEl.textContent =
          "Sorry, something went wrong. Please try again or contact us directly.";
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
  });
}

// ###############################################################
// ###############################################################
// ########### APPLICATION FORM EMAILJS INTEGRATION ##############
// ###############################################################
// ###############################################################
// Initialise EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // e.g. "d9Xxxxxxxx"
})();

const applicationForm = document.getElementById("applicationForm");
const applicationBtn = document.getElementById("applicationSubmitBtn");
const applicationStatus = document.getElementById("applicationStatus");

if (applicationForm) {
  applicationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Use built–in HTML validation
    if (!applicationForm.checkValidity()) {
      applicationForm.reportValidity();
      return;
    }

    const originalText = applicationBtn.textContent;
    applicationBtn.disabled = true;
    applicationBtn.textContent = "Sending…";
    applicationStatus.textContent = "";

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // e.g. "service_noornest"
        "YOUR_APPLICATION_TEMPLATE_ID", // e.g. "template_application"
        "#applicationForm"
      )
      .then(function () {
        applicationStatus.textContent =
          "Thank you. Your application has been sent to the Noornest team.";
        applicationForm.reset();
      })
      .catch(function (error) {
        console.error("EmailJS error:", error);
        applicationStatus.textContent =
          "Sorry, something went wrong. Please try again or email us directly.";
      })
      .finally(function () {
        applicationBtn.disabled = false;
        applicationBtn.textContent = originalText;
      });
  });
}

// ###############################################################
// ###############################################################
// ############ FREE-QUOTE FORM EMAILJS INTEGRATION ##############
// ###############################################################
// ###############################################################
// 1) Initialise EmailJS with your public key
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // e.g. "d9Xxxxxxxx"
})();

const quoteForm = document.getElementById("quoteForm");
const quoteBtn = document.getElementById("quoteSubmitBtn");
const quoteStatus = document.getElementById("quoteStatus");

if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic HTML5 validation
    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }

    // UI: loading state
    const originalText = quoteBtn.textContent;
    quoteBtn.disabled = true;
    quoteBtn.textContent = "Sending…";
    quoteStatus.textContent = "";

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // e.g. "service_noornest"
        "YOUR_QUOTE_TEMPLATE_ID", // e.g. "template_quote"
        "#quoteForm"
      )
      .then(function () {
        quoteStatus.textContent =
          "Thank you. Your quote request has been sent to the Noornest team.";
        quoteForm.reset();
      })
      .catch(function (error) {
        console.error("EmailJS error:", error);
        quoteStatus.textContent =
          "Sorry, something went wrong. Please try again or contact us directly.";
      })
      .finally(function () {
        quoteBtn.disabled = false;
        quoteBtn.textContent = originalText;
      });
  });
}
