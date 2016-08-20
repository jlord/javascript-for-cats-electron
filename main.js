var path = require('path')

var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow
var iconPath = path.join(__dirname, '/images/jsforcats.png')

function createWindow () {
  mainWindow = new BrowserWindow({width: 1000, height: 1000, title: 'JavaScript for Cats', icon: iconPath})
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.openDevTools({mode: 'bottom'})

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
