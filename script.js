const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    autoplay: { delay: 5000 },
});
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  counter.innerText = '0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 200); // adjust speed

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  updateCount();
});
