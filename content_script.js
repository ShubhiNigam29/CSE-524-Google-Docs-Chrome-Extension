let simulateMouseEvent = function(element, eventName, coordX, coordY) {
  element.dispatchEvent(new MouseEvent(eventName, {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: coordX,
    clientY: coordY,
    button: 0
  }));
};

let buttonClick = document.querySelector("#printButton");

// The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// This method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
let box = buttonClick.getBoundingClientRect(),
    coordX = box.left + (box.right - box.left) / 2,
    coordY = box.top + (box.bottom - box.top) / 2;

simulateMouseEvent (buttonClick, "mousedown", coordX, coordY);
simulateMouseEvent (buttonClick, "mouseup", coordX, coordY);
simulateMouseEvent (buttonClick, "click", coordX, coordY);