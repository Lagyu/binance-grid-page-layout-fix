// ==UserScript==
// @name     Binance Grid Page Layout
// @description Places the modal to bottom and hides background shadow, so that you can see the chart and current price along with worikng grid.
// @version  1.0.0
// @grant    none
// @include     https://www.binance.com/en/futures/strategy/*
// ==/UserScript==

(function () {
  const changeLayout = () => {
    const backShadow = document.querySelector('html > body > div:nth-of-type(13) > div:nth-of-type(1)');
    backShadow.style.display = 'none';
    const modal = document.querySelector('html > body > div:nth-of-type(13) > div:nth-of-type(2)');
    modal.style['align-self'] = 'flex-end';
  };

  document.body.addEventListener(
    'click',
    () => {
      setTimeout(changeLayout, 0);
    },
  );
}());
