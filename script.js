// ==========================
// HERO IMAGE + FORM FADE-IN
// ==========================
window.addEventListener("load", () => {
  const img = document.getElementById("hero");
  const form = document.getElementById("form-overlay");

  if (img) {
    img.style.opacity = 0;
    img.style.transition = "opacity 2s ease-in";
    requestAnimationFrame(() => (img.style.opacity = 1));
  }

  if (form) {
    form.style.opacity = 0;
    form.style.transition = "opacity 2s ease-in";
    requestAnimationFrame(() => (form.style.opacity = 1));
  }
});

// ==========================
// FORM SUBMIT HANDLER
// ==========================
function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  if (emailInput) {
    alert("Thank you! The voucher is now sent to your email: " + emailInput.value);
  }
}

// ==========================
// BLOG SECTION ANIMATION
// ==========================
const sections = document.querySelectorAll(".content-section");
if (sections.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach(section => observer.observe(section));
}

// ==========================
// PET STORE DOM GENERATION
// ==========================
const petsData = {
  dogs: [
    {
      name: "Golden Retriever",
      img: "./img/golden.jpg",
      description: "Friendly, loyal, and intelligent, Golden Retrievers are one of the most popular family dogs. They are great with children, easy to train, and love outdoor activities and exercise.",
      price: "₱25,000"
    },
    {
      name: "Shih-tzu",
      img: "./img/shitzu.jpg",
      description: "A small, affectionate, and friendly toy breed with a long, flowing coat. Known for being great companions, Shih Tzus are playful, gentle, and perfect for families or apartment living.",
      price: "₱12,000"
    },
    {
      name: "White Husky",
      img: "./img/husky.jpg",
      description: "A rare, pure-white variation of the Siberian Husky with a thick snow-colored coat and piercing blue or heterochromatic eyes. Loyal, and energetic—requires daily exercise.",
      price: "₱20,000"
    }
  ],
  cats: [
    {
      name: "Persian Cat",
      img: "./img/persian cat.jpg",
      description: "Long-haired and elegant, Persian Cats are known for their calm and gentle temperament. ",
      price: "₱10,000"
    },
    {
      name: "Siamese",
      img: "./img/Siamese kitten.jpg",
      description: "Siamese cats are sleek, elegant, and extremely social. Known for their striking blue almond-shaped eyes.",
      price: "₱8,500"
    },
    {
      name: "British Short Hair",
      img: "./img/british.png",
      description: "A calm and affectionate cat known for its plush, dense coat and round, chubby cheeks.",
      price: "₱12,000"
    }
  ],
  birds: [
    {
      name: "Parrot",
      img: "./img/parrot.jpg",
      description: "Colorful and playful, can learn words and tricks.",
      price: "₱5,000"
    },
    {
      name: "Canary",
      img: "./img/Canary.jpg",
      description: "Beautiful songbird with bright plumage.",
      price: "₱4,000"
    },
    {
      name: "Love Birds",
      img: "./img/lovebirds.jpg",
      description: "Famous for their strong pair bonds and playful personalities.",
      price: "₱1,000"
    }
  ],
  rabbits: [
    {
      name: "Dutch Rabbit",
      img: "./img/Dutch Rabbit baby.jpg",
      description: "A gentle and affectionate rabbit breed recognized by its distinctive white blaze and saddle contrasted with black, brown, or gray fur. Dutch Rabbits are calm, and friendly",
      price: "₱3,500"
    },
    {
      name: "Mini Rex",
      img: "./img/minirex.jpg",
      description: "Famous for its incredibly soft, velvety fur and calm, friendly nature.This medium-small breed usually weighs 3.5–4.5 lbs and comes in many beautiful colors.",
      price: "₱3,200"
    },
    {
      name: "Netherland Dwarf ",
      img: "./img/netherland.jpg",
      description: "One of the smallest rabbit breeds, weighing only 1–2.5 lbs. Known for its compact body, short ears, and big expressive eyes, this bunny is playful yet can be a bit shy at first.",
      price: "₱12,000"
    }
  ],
  hamsters: [
    {
      name: "Syrian Hamster",
      img: "./img/Syrian Hamster baby.jpg",
      description: "Also called the Golden Hamster, this friendly, solitary pet is known for its teddy-bear look and easy handling. Syrians grow 5–7 inches long and need their own cage.",
      price: "₱500"
    },
    {
      name: "Guine Pigs",
      img: "./img/guine.jpg",
      description: "Sociable and vocal little companions that thrive in pairs or groups. Guinea pigs enjoy daily handling, fresh veggies, and roomy cages with plenty of hay.",
      price: "₱500"
    },
    {
      name: "Dwarf Hamster",
      img: "./img/white.jpg",
      description: "Round dwarf hamster that can change its coat to a snowy white in winter. Typically 3–4 inches long, these hamsters are gentle, relatively easy to tame.",
      price: "₱6,000"
    }
  ],
  fish: [
    {
      name: "Koi",
      img: "./img/koi.jpg",
      description: "Colorful ornamental carp prized for their vibrant patterns and graceful swimming. Koi can live for decades in large outdoor ponds and symbolize good fortune in many cultures.",
      price: "₱1,200"
    },
    {
      name: "Betta",
      img: "./img/betta.jpg",
      description: "Also called Siamese fighting fish, Bettas are famous for their flowing fins and brilliant colors. They are hardy and can live in small aquariums but prefer warm, clean water.",
      price: "₱900"
    },
    {
      name: "Arwana",
      img: "./img/arwana.jpg",
      description: "A prized freshwater fish known for its sleek, metallic scales and graceful swimming. Arowanas can grow 2–3 feet long and require large, well-filtered aquariums.",
      price: "₱2,000"
    }
  ]
};

const container = document.getElementById("petContainer");
if (container) {
  Object.entries(petsData).forEach(([category, pets]) => {
    // Section wrapper
    const section = document.createElement("section");
    section.classList.add("category", "mb-5");
    section.id = category;

    // Category title
    const title = document.createElement("h2");
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    title.classList.add("mb-4");
    section.appendChild(title);

    // Pets wrapper
    const petsWrapper = document.createElement("div");
    petsWrapper.classList.add("row", "gy-4");

    pets.forEach(pet => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "pet-card");
      col.dataset.name = pet.name;
      col.dataset.category = category;

      const card = document.createElement("article");
      card.classList.add("pet", "card", "shadow-sm", "h-100");

      // image
      const img = document.createElement("img");
      img.src = pet.img;
      img.alt = pet.name;
      img.classList.add("card-img-top");

      // body
      const body = document.createElement("div");
      body.classList.add("card-body", "text-center");

      // title
      const h3 = document.createElement("h3");
      h3.classList.add("card-title");
      h3.textContent = pet.name;

      // description
      const desc = document.createElement("p");
      desc.classList.add("card-text", "text-muted");
      desc.textContent = pet.description;

      // price
      const price = document.createElement("p");
      price.classList.add("card-text", "fw-bold");
      price.textContent = pet.price;

      // ✅ Buy Now Button
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-primary", "mt-2");
      btn.textContent = "Buy Now";

      // Click event for demo
      btn.addEventListener("click", () => {
        addToCart(pet);
        alert(`You added ${pet.name} to your Cart!`);
      });


      // assemble
      body.append(h3, desc, price, btn);
      card.append(img, body);
      col.appendChild(card);
      petsWrapper.appendChild(col);
    });

    section.appendChild(petsWrapper);
    container.appendChild(section);
  });
}

// Add to Cart

const cart = [];

function addToCart(pet) {
  cart.push(pet);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";

  let total = 0; // local total
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    
    const nameSpan = document.createElement("span");
    nameSpan.textContent = item.name;
    li.appendChild(nameSpan);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button"; // prevents form submit
    removeBtn.className = "btn btn-sm btn-danger";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeFromCart(index));
    li.appendChild(removeBtn);

    cartItems.appendChild(li);

    // parse price to number (handles commas and currency symbols)
    const num = Number(String(item.price).replace(/[^0-9.-]/g, "")) || 0;
    total += num;
  });

  cartTotal.textContent = `Total: ₱${total.toLocaleString()}`;
}
// remove item and re-render
function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  renderCart();
}

// ======= CHECKOUT (robust) =======
function doCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add items first!");
    return;
  }

  // compute total fresh from cart (safe and accurate)
  const total = cart.reduce((sum, item) => {
    return sum + (Number(String(item.price).replace(/[^0-9.-]/g, "")) || 0);
  }, 0);

  // show confirmation (replace with modal/inline message if you prefer)
  alert(`🎉 Congratulations! You have purchased your items for a total of ₱${total.toLocaleString()}!`);

  // clear cart and re-render
  cart.length = 0;
  renderCart();
}

// safe attachment of checkout button listener (works whether button exists now or later)
function attachCheckoutHandler() {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.type = "button";
    checkoutBtn.addEventListener("click", doCheckout);
  } else {
    // if button not in DOM yet, attach once DOM is ready
    window.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("checkoutBtn");
      if (btn) {
        btn.type = "button";
        btn.addEventListener("click", doCheckout);
      } else {
        console.warn("checkoutBtn not found in DOM.");
      }
    });
  }
}

// Search Function

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  renderCart(); // total recalculated automatically
}

document.getElementById("petSearch").addEventListener("input", e => {
  const text = e.target.value.trim().toLowerCase();

  // First: show/hide each card
  document.querySelectorAll(".pet-card").forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category?.toLowerCase() || "";
    const match = name.includes(text) || category.includes(text);
    card.style.display = match ? "" : "none";
  });

  // Then: hide/show each category section if it has no visible cards
  document.querySelectorAll(".category").forEach(section => {
    const visibleCards = section.querySelectorAll(".pet-card:not([style*='display: none'])");
    section.style.display = visibleCards.length > 0 ? "" : "none";
  });
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

attachCheckoutHandler();



