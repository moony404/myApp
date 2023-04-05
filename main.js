const path = require('path');
const { app, BrowserWindow } = require('electron');
const { platform } = require('os');
const isMac = process.platform === 'darwin';
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'myApp',
        width: 1200,
        height: 800
    });
    mainWindow.loadFile(path.join(__dirname, './renderer/homepage.html'));
}
app.whenReady().then(() => {
    createMainWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    });
});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
        console.log("Window closed");
    }
});