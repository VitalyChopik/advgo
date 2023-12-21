const about = (aboutBlock, contactForm) => {

  document.querySelectorAll('.about__box').forEach(box => {
    const btn = box.querySelector('.about__box-link');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const btnValue = btn.getAttribute('data-value');
      const scrollPosition = contactForm.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      const select = contactForm.querySelector('.contact__form-select');
      // Проверяем, существует ли select
      if (select) {
        const optionToSelect = select.querySelector(`option[value="${btnValue}"]`);

        // Проверяем, существует ли optionToSelect
        if (optionToSelect) {
          // Устанавливаем выбранную опцию
          optionToSelect.selected = true;
        }
      }
    });
  });

}
export default about;