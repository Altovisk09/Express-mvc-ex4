function userLogged(req, res, next){
    if(!req.session.userData){
        req.session.authMessage = 'Você precisa estar logado para acessar esta aba.';
        return res.send('<script>alert("Você precisa estar logado para acessar esta aba."); window.location.href = "/login";</script>');
    }
    next()
}

module.exports= userLogged
