import { app, BrowserWindow } from 'electron';
// import installExtension, {
//   REDUX_DEVTOOLS,
//   REACT_DEVELOPER_TOOLS,
// } from 'electron-devtools-installer';

let mainWindow: Electron.BrowserWindow | null;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 809,
    webPreferences: {

      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const onReady = (): void => {
  createWindow();
};

/**
 * There is a potential issue with Electron version 9+ when trying to use Redux Dev Tools
 * https://github.com/electron/electron/issues/24011
 * https://github.com/electron/electron/issues/24638
 */
// app.whenReady().then(() => {
//   installExtension(REDUX_DEVTOOLS)
//     .then((name) => console.log(`Added Extension:  ${name}`))
//     .catch((err) => console.log('An error occurred: ', err));
//   installExtension(REACT_DEVELOPER_TOOLS)
//     .then((name) => console.log(`Added Extension:  ${name}`))
//     .catch((err) => console.log('An error occurred: ', err));
// });

app.on('ready', onReady);