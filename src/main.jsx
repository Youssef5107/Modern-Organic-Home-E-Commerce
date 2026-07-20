import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const enhanceCardButtons = () => {
  const buttons = Array.from(document.querySelectorAll("button"));
  const cartButtons = buttons.filter((button) => {
    const icon = button.querySelector(".material-symbols-outlined");
    const iconText = icon?.textContent?.trim() ?? "";
    const label = button.textContent?.trim() ?? "";
    return iconText === "add_shopping_cart" || label === "add_shopping_cart";
  });
  const favoriteButtons = buttons.filter((button) => {
    const icon = button.querySelector(".material-symbols-outlined");
    const iconText = icon?.textContent?.trim() ?? "";
    const label = button.textContent?.trim() ?? "";
    return (
      (iconText === "favorite" || label === "favorite") &&
      !button.classList.contains("card-cart-btn")
    );
  });

  cartButtons.forEach((button) => {
    button.classList.add("card-cart-btn");
    button.setAttribute("data-card-action", "cart");
  });

  favoriteButtons.forEach((button) => {
    button.classList.add("card-favorite-btn");
    button.setAttribute("data-card-action", "favorite");

    const parent = button.parentElement;
    if (
      parent &&
      !parent.querySelector("[data-card-action='cart'], .card-cart-btn")
    ) {
      const cartButton = document.createElement("button");
      cartButton.type = "button";
      cartButton.className =
        "card-cart-btn absolute bottom-4 right-4 p-2 rounded-full";
      cartButton.innerHTML =
        '<span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>';
      cartButton.setAttribute("data-card-action", "cart");
      parent.appendChild(cartButton);
    }
  });
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  if (button.classList.contains("card-favorite-btn")) {
    event.preventDefault();
    event.stopPropagation();
    button.classList.toggle("card-favorite-btn-active");
  }

  if (button.classList.contains("card-cart-btn")) {
    event.preventDefault();
    event.stopPropagation();
    button.classList.toggle("card-cart-btn-active");
  }
});

enhanceCardButtons();

const observer = new MutationObserver(() => {
  enhanceCardButtons();
});
observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
