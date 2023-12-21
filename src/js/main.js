/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers';
import BurgerMenu from './modules/BurgerMenu';
import about from './modules/about';
import form from './modules/form';
import mainForm from './modules/mainForm';
import slider from './modules/slider';
BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();



const heroForm = document.querySelector('.hero__form');
const aboutBlock = document.querySelector('.about__container');
const contactForm = document.querySelector('.contact__block-form');
heroForm ? form(heroForm) : null;


aboutBlock ? slider(aboutBlock) : null;
aboutBlock ? about(aboutBlock, contactForm) : null;
contactForm ? mainForm(contactForm) : null;



