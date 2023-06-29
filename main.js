import { connect as connectApi } from './server/api.js';
import { start as connectSerial } from './com/serial.js'

await connectApi();
