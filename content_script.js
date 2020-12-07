simulateMouseEvent = function(element, eventName, coordX, coordY) {
  element.dispatchEvent(new MouseEvent(eventName, {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: coordX,
    clientY: coordY,
    button: 0
  }));
};

// Repository to store mapping between Chrome Extension and Google Docs buttons
map = {};
map['undo'] = '#undoButton';
map['redo'] = '#redoButton';
map['print'] = '#printButton';
map['spellingandgrammarcheck'] = '#spellGrammarCheckButton';
map['paintformat'] = '#formatPainterButton';
map['zoom'] = '#zoomSelect';
map['styles'] = '#headingStyleSelect';
map['font'] = '#docs-font-family';
map['fontsize'] = '#fontSizeSelect';
map['bold'] = '#boldButton';
map['italics'] = '#italicButton';
map['underline'] = '#underlineButton';
map['textcolor'] = '#textColorButton';
map['bgcolor'] = '#bgColorButton';
map['insertlink'] = '#insertLinkButton';
map['addcomment'] = '#insertCommentButton';
map['insertimage'] = '#insertImageButton';
map['align'] = '#alignButton';
map['linespacing'] = '#lineSpacingMenuButton';
map['numberedlist'] = '#addNumberedBulletButton';
map['bulletedlist'] = '#addBulletButton';
map['decreaseindent'] = '#outdentButton';
map['increaseindent'] = '#indentButton';
map['clearformatting'] = '#clearFormattingButton';

buttonClick = document.querySelector(map[config]);

// The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// This method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
box = buttonClick.getBoundingClientRect(),
    coordX = box.left + (box.right - box.left) / 2,
    coordY = box.top + (box.bottom - box.top) / 2;

simulateMouseEvent (buttonClick, "mousedown", coordX, coordY);
simulateMouseEvent (buttonClick, "mouseup", coordX, coordY);
simulateMouseEvent (buttonClick, "click", coordX, coordY);
