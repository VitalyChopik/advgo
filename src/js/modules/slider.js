import Swiper, { Pagination } from 'swiper';

const slider = (block) => {
  var init = false;
  var swiper;
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper(block, {
          modules: [Pagination],
          slidesPerView: "auto",
          spaceBetween: 32,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);
}
export default slider;