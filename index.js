"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// electron用ライブラリのインポート
var electron_1 = require("electron");
var mainWindow = null;
electron_1.app.on('ready', function () {
    mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 800,
        height: 600,
    });
    mainWindow.on('close', function () {
        mainWindow = null;
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
