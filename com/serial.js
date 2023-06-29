// import deno SerailPort library
import layouts from "../modules/layouts.js";
import { LAYOUT_ID } from "../config.js";

export const interfaces = {};

export const intialize = async (com) => {
  console.info('[INTERFACES] intializing', com?.type, com?.id);
  switch(com.type) {
    case 'emulate':
      com.connection = emulator.connect();
      com.send = emulator.send;
      break;
    case 'serial':
      try {
        com.connection = await serial.connect(com);
        com.send = serial.send;
        com.status = 'connected';
      } catch (err) {
        com.status = 'fail';
        log.error(err);
      }
      break;
    case 'cmd-ex':
      try {
        com.connection = await cmdex.connect(com);
        com.send = cmdex.send;
        com.status = 'connected';
      } catch (err) {
        com.status = 'fail';
        log.error(err);
      }
      break;
    case 'audio':
      com.connection = audioplayer.connect(com);
      com.send = audioplayer.send;
      break;
    case 'default':
      log.warn('[INTERFACES] Interface type not found', com.type);
      break;
  }
  interfaces[com.id] = com;
}

export const connect = async (com) => {
  return new Promise(function(resolve, reject) {
    const path = com.serial;
    const baudRate = com.baud;

    console.log('[SERIAL] attempting to connect to:', path);
    // Create a port
    // const port = new SerialPort({
    //   path,
    //   baudRate,
    //   autoOpen: false,
    // });

    // port.open(function (err) {
    //   if (err) {
    //     reject(`[SERIAL] Error opening port: ${err.message}`);
    //     return;
    //   }
    //   console.log('[SERIAL] open');

    //   // Because there's no callback to write, write errors will be emitted on the port:
    //   port.write('main screen turn on\n');
    // });

    // // The open event is always emitted
    // port.on('open', function() {
    //   // open logic
    //   console.log('[SERIAL] Serial port opened', path, baudRate);
    //   resolve(port);
    // });
  });
}

export async function start() {
  console.log('Connecting Interfaces');

  const layout = await layouts.getById(LAYOUT_ID);
  
  layout?.interfaces.map(await connect);
}

export default {
  connect,
  interfaces,
  intialize,
  start
}