async function estaLogado(req, res, next) {
  res.locals.isLogged = false;
  
 if (req.session.userData) {
      res.locals.isLogged = true;
      next();
    }else{
      res.locals.isLogged = false;
      next();
    }
};

module.exports= estaLogado