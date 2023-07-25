const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let database = path.join(__dirname, '../database/userData.json');
let db = JSON.parse(fs.readFileSync(database, 'utf-8'));

let loginController = {
  login: (req, res) => {
    res.render('login');
  },
  loginValidation: (req, res) => {
    const userLog = db.find((user)=> user.nome == req.body.name && user.senha == req.body.pass);
    if(userLog){
      const userData = {
        id: userLog.id,
        nome: userLog.nome,
      };
      req.session.userData = userData;
      
      res.redirect('/')
      console.log(req.session.userData);
    }else{
      res.send('<script>alert("Credenciais inválidas!"); window.location.href = "/login";</script>');
    }
  },
  mytravels: (req, res) => {
    res.render('travels')
  },
  logout: (req, res) => {
    req.session.destroy()
    return res.redirect('/')
  },
};

module.exports = loginController;
