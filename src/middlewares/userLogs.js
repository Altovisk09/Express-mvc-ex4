const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../logs/userLogs.txt');
const log = fs.readFileSync(logPath, 'utf-8')

function userLogs(req, res, next){
    fs.appendFileSync(logPath, 'O usuário acessou a rota: ' + req.url + '\n'); // \N faz com que cada registro seja gravado em uma nova linha no arquivo userLogs.txt
    next()
}

module.exports = userLogs