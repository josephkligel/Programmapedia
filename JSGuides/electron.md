# Electon JS
##Legend:
>("): so as above

## ------------------------------Setup---------------------------
1. npm init -y
2. npm install electron
3. index.js:
	-const electron = require('electron');
	-const { app, BrowserWindow } = electron;
4. package.json:
	-"main": "index.js" --> Tells electron to run index.js as the main program
	-"scripts": {"electron": "electron ."} --> Tells electron to run by keyword "electron" in the current directory
5. app.on('ready', () => {
	const mainWindow = new BrowserWindow({});
	mainWindow.loadUrl(`file://${__dirname}/index.html`)
})
## -----------------------------Running app----------------------
1. app.on('ready', () => {'do something!'})
2. npm run electron

## ------------------------------Methods-------------------------
app.on('ready', <func>): loads window when ready
