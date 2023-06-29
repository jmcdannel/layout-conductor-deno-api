// create an api for mongodd

// import express
// import mongoose
// import bodyParser
// import logger
// import path
// import cors
// import passport
// import passport-jwt
// import passport-local
// import passport-local-mongoose
// import jwt-simple
// import bcrypt-nodejs
// import cookie-parser
// import express-session
// import connect-mongo
// import User
// import config
// import routes

// // create an express app
// const app = express();

// // connect to mongodb
// mongoose.connect('mongodb://localhost:27017/meanauth');

// // on connection
// mongoose.connection.on('connected', () => {

//     console.log('Connected to database mongodb @ 27017');

// }

// // on error
// mongoose.connection.on('error', (err) => {
  
//       if (err) {
  
//           console.log('Error in Database connection: ' + err);
  
//       }
  
//   }

// // port number
// const port = 3000;

// // adding middleware - cors

// app.use(cors());

// // body-parser

// app.use(bodyParser.json());

// // passport

// app.use(passport.initialize());

// app.use(passport.session());

// // static files

// app.use(express.static(path.join(__dirname, 'public')));

// // routes

// app.use('/api', routes);

// // testing server

// app.get('/', (req, res) => {


//     res.send('foobar');

// }

// // bind port with server

// app.listen(port, () => {
  
//       console.log('Server started at port: ' + port);
  
//   }
  
// // Path: routes.js



// create a deno rest api server


// Path: routes.ts

