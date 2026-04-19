document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 200);
  });

  const links = document.querySelectorAll(".menu a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("ativo"));
      link.classList.add("ativo");
    });
  });

});