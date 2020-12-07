let names = ['undo','redo','print','spellingandgrammarcheck','paintformat','zoom','styles','font','fontsize','bold','italics','underline','textcolor','bgcolor','insertlink','addcomment','insertimage','align','linespacing','numberedlist','bulletedlist','decreaseindent','increaseindent','clearformatting'];

function Button(id) {
  var element = document.getElementById(id);
  element.onclick = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {
		code: 'var config = ' + JSON.stringify(id)
		}, function() {
			chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
		});
    });
  }
}
for (var i = 0; i < names.length; i++) {
	new Button(names[i]);
}
