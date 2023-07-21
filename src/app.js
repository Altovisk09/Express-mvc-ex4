const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const fs = require('fs')
const userLogsMiddleware = require('./middlewares/userLogs')
const session = require('express-session');

const app = express();

// Configurar o middleware de sessão
app.use(session({
  secret: 'segredo123',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, '../public')));  // Necessário para arquivos estáticos na pasta /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(userLogsMiddleware);




app.set('view engine', 'ejs');
app.set('views', './src/views'); // Definição da localização da pasta "views".

const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');
const travelsRouter = require('./routes/travels');

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/mytravels', travelsRouter)

app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports =  app;

