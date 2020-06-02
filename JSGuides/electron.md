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

## ---------------------------IPC-------------------------------
Formally known as inter process communication. It is what allows the main window to communicate with the electron app.

### Methods:
	>>>> Main window to electron (In script tag within the main window)<<<<
	-const electron = require('electron'); 
	-const {ipcRenderer} = electron;
	-ipcRender.send('eventname', <data>): sends data on event to electron app
	-ipcMain.on('eventname', <callback>): receive data in the electron app(index.js)

	>>>> Electron to main window (in index.js)<<<<
	-const {ipcMain} = require('electron'): require in index.js
	-mainWindow.webContents.send(): sends from electron to main window
	-ipcRenderer.on(): main window receives from electron app
