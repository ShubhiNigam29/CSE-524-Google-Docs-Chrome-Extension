# CSE-524-Google-Docs-Chrome-Extension

The task is to create a Chrome extension which have buttons function similar to the Google Docs toolbar menus.
When a user installs this Chrome Extension and clicks on a button, for example, Print, it will simulate a mouse click on Print button of Google Docs document.

The solution contains below files:

a) manifest.json - This file is used as a defining feature for Chrome browser. It tells Chrome what needs to be done in order to load the extension properly. It contains versions, permissions, and browser actions.

b) popup.html - This file is extension UI. It defines extension's look and feel. It also contains the underlying JS redirection point. It contains two options - Menu & Toolbar.

c) popup.js - As soon as the extension button is clicked, this file is used to inject the script in the current tab where Google Docs is opened. This injected script will have the function for mouse click simulation.

d) content_script.js - This file contains the code for the mouse click simulation function. It searches for the corresponding button in Google Docs document and click it.
