import { app, BrowserWindow } from 'electron';

//make mainWindow var (specify types: alive or dead)
let mainWindow: Electron.BrowserWindow | null;


//create window function (specify type of arguments)
const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {

        //allows us to actually do stuff from this file
      nodeIntegration: true
    }
  });

  //load html entry (hang react app off this file)
  mainWindow.loadFile('index.html');

  //when you close mainWindow, process ends in your terminal
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

//when app is 'ready' instantiate mainWindow with our function
app.on('ready', createWindow);