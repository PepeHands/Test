$('.slider').slick({
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.slider-2',
    
});
$('.slider-2').slick({
    arrows: true,
    vertical: true,
  
    slidesToShow: 3,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    
})
document.querySelector('.toggler__button').addEventListener('click', function() {
	  this.nextElementSibling.classList.toggle('toggler__content--on');
    document.querySelector('.toggler__button').classList.toggle("opened");
    this.textContent = this.textContent === '-' ? '+' : '-';
});

      