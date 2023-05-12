(() => {
  'use strict';

  const app = document.querySelector('#app-mount');
  const useCapture = true;
  app.addEventListener('keydown', (event) => {
    const isTextBox = event.target.ariaMultiline;

    if (isTextBox === false) {
      return;
    }

    const isPressedShiftEnter = event.key === 'Enter' && event.shiftKey;
    if (isPressedShiftEnter) {
      return;
    }

    const isPressedEnter = event.key === 'Enter' && event.ctrlKey === false && event.metaKey === false;
    if (isPressedEnter) {
      event.stopPropagation();
    }
  }, useCapture);
})();