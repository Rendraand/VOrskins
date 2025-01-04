const more__label = document.querySelector('.category-more-label');
const less__label = document.querySelector('.category-less-label');
const category_show_btn = document.querySelector('.category-show-btn');

category_show_btn.addEventListener('click', () => {
    more__label.classList.toggle('d-none');
    more__label.classList.toggle('d-block');

    less__label.classList.toggle('d-none');
    less__label.classList.toggle('d-block');
});