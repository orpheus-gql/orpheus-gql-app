const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', function () {
  // create new window once app is ready
  mainWindow = new BrowserWindow({}); // object is empty because there's no configuration currently needed
  // Load HTML file into window 
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index-app.html'),
    protocol: 'file:',
  }));
  // mainWindow.webContents.openDevTools();

  // Quit app when main window is closed
  mainWindow.on('closed', function () {
    app.quit();
  });
});