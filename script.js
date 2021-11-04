// ==UserScript==
// @name     Binance Grid Page Layout
// @description Places the modal to bottom and hides background shadow, so that you can see the chart and current price along with worikng grid.
// @version  1.0.0
// @grant    none
// @include     https://www.binance.com/en/futures/strategy/*
// ==/UserScript==

((() => {
  const changeLayout = () => {
    const parentDiv = [...document.getElementsByTagName('div')].find(
      (elm) => elm.children?.[1]?.children?.[1]?.classList?.contains('style-dialog-body'),
    );
    if (parentDiv) {
      const backShadow = parentDiv.childNodes[0];
      backShadow.style.display = 'none';
      const modal = parentDiv.childNodes[1];
      modal.style['align-self'] = 'flex-end';
    }
  };

  document.body.addEventListener(
    'click',
    () => {
      setTimeout(changeLayout, 0);
    },
  );
})());
