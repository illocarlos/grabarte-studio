/* Bloque «Productos» en modo carrusel: flechas que desplazan una tarjeta */
(function () {
  document.querySelectorAll('[data-shop-slider]').forEach(function (track) {
    var nav = track.parentElement.querySelector('.b-shop-products__nav');
    if (!nav) return;
    function step() { var card = track.querySelector('.p-card'); return card ? card.getBoundingClientRect().width + 20 : 300; }
    nav.querySelector('[data-slider-prev]').addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    nav.querySelector('[data-slider-next]').addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  });
})();
