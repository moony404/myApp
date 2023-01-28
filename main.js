const path = require('path');
const { app, BrowserWindow } = require('electron');
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        // placeholder
        title: 'myApp',
        width: 600,
        height: 400
    });
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}
app.whenReady().then(() => {
    createMainWindow();
});