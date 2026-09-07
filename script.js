document.addEventListener("DOMContentLoaded", () => {
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer && typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            autoplay: { delay: 5000 },
        });
    }

    const counters = document.querySelectorAll(".count");
    const impactSection = document.querySelector(".impact");
    if (counters.length > 0 && impactSection) {
        let started = false;

        const startCounting = () => {
            if (started) return;
            started = true;

            counters.forEach(counter => {
                const target = +counter.dataset.target;
                let count = 0;
                const increment = target / 200;

                const update = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.floor(count).toLocaleString();
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };

                update();
            });
        };

        const observer = new IntersectionObserver(entries => {
            if (entries[0] && entries[0].isIntersecting) {
                startCounting();
            }
        }, { threshold: 0.5 });

        observer.observe(impactSection);
    }
});
