 const img = document.getElementById("hero");
 const form = document.getElementById("form-overlay");
  img.style.opacity = 0;
  img.style.transition = "opacity 2s ease-in";
  form.style.opacity = 0;
  form.style.transition = "opacity 2s ease-in";

  window.addEventListener("load", () => {
    img.style.opacity = 1;
    form.style.opacity = 1;
  });

  function handleSubmit(event) {
  event.preventDefault(); // prevents page refresh
  const email = document.getElementById("emailInput").value;
  alert("Thank you the voucher is now sent to Your email: " + email);
}
/*Blog Section Animation */
// Select all content sections
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // animate in
    } else {
      entry.target.classList.remove('show'); // reset when out of view
    }
  });
}, { threshold: 0.3 }); // triggers when ~30% of section is visible

sections.forEach(section => {
  observer.observe(section);
});

/* Back to Top */

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


