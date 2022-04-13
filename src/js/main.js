AOS.init();
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
const social = document.getElementById('social');
menuToggle.onclick  =  function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    social.classList.toggle('active')
}
$('.offers__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
