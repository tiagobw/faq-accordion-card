const accordions = document.querySelectorAll('.accordion');

function closeOtherAccordions(event) {
  event.preventDefault();

  accordions.forEach((accordion) => {
    if (accordion !== this && accordion.open) {
      accordion.open = false;
    }

    if (accordion === this && !accordion.open) {
      accordion.open = true;
    }
  });
}

accordions.forEach((accordion) => {
  accordion.addEventListener('click', closeOtherAccordions);
});
