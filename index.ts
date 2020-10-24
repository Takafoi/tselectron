// electron用ライブラリのインポート
import {app, BrowserWindow} from 'electron'

let mainWindow: Electron.BrowserWindow | null = null

app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 800,
        height: 600,
    })

    mainWindow.on('close', () => {
        mainWindow = null
    })

    mainWindow.loadURL('file://' + __dirname + '/index.html')
})