window.onload = () => {
  let elem = document.querySelectorAll("span[data-color]");
  console.log(elem);
  for (const key in elem) {
    if (Object.hasOwnProperty.call(elem, key)) {
      const element = elem[key];
      element.style.color = element.getAttribute("data-color");
    }
  }
};
jQuery(document).ready(function () {
  jQuery(".view-clients-view .view-content").slick({
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
