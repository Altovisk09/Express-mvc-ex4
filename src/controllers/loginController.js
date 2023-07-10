let loginController = {
    login: (req, res) =>{
        res.render('login')
    },
    mytravels: (req, res)=>{
        res.send('Você não tem acesso a essa rota sem estar logado!')
    }
};

module.exports = loginController