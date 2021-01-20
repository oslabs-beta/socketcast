import { app, BrowserWindow } from 'electron';
// import installExtension, {
//   REDUX_DEVTOOLS,
//   REACT_DEVELOPER_TOOLS,
// } from 'electron-devtools-installer';

// make mainWindow var (specify types: alive or dead)
let mainWindow: Electron.BrowserWindow | null;

// create window function (specify type of arguments)
const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {

      // allows us to actually do stuff from this file
      nodeIntegration: true,
    },
  });

  // load html entry (hang react app off this file)
  mainWindow.loadFile('index.html');

  // when you close mainWindow, process ends in your terminal
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

// when app is 'ready' instantiate mainWindow with our function
app.on('ready', onReady);
