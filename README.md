#  Express-mvc-ex4 <br>

Com o objetivo de aprimorar a eficiência de um projeto no padrão MVC (Model-View-Controller), irei incorporar o uso de middlewares nas rotas para realizar validações. Neste exercício, implementei um exemplo simples do cotidiano, onde não faria sentido um usuário acessar determinada rota sem atender à condição de estar logado.

<h2>Como funciona o projeto?</h2>
O projeto consiste em um exemplo de uma página de compra de passagens, onde temos, no total, 3 views que são necessárias para o funcionamento e o entendimento da proposta que quero demonstrar. Resumidamente, tudo gira em torno do usuário estar logado ou não. Caso o usuário esteja logado, o menu irá mudar parcialmente, substituindo o botão de "login" por 2 novos, onde um é "Minha Conta" e outro "Sair". Por outro lado, caso o usuário esteja deslogado e clique em "Minhas Viagens", um alerta irá aparecer na tela e irá redirecionar o usuário para a tela de login, impedindo seu acesso à rota até fazer o login.

Por ser um exercício simples, optei por utilizar um arquivo JSON ao invés de usar SQL, por exemplo.

Não fiz um sistema de cadastro de usuários, então caso queira testar, essas são as contas que estão na base de dados do projeto:<br><br>

ID: 1<br>
Nome: Ada<br>
Senha: senha_ada123<br>

ID: 2<br>
Nome: Greta<br>
Senha: senha_greta456<br>

ID: 3<br>
Nome: Vim<br>
Senha: senha_vim789<br>

ID: 4<br>
Nome: Tim<br>
Senha: senha_timabc<br>

Obs: No campo "email", coloque o nome.<br><br>

<h2>Como instalar o projeto</h2>
Basta possuir um editor de código (VS Code) com um gerenciador de pacotes como o NPM instalado e instalar todas as dependências do projeto antes de rodar o código. Depois de instalar as dependências, basta digitar o comando "nodemon ./src/bin/www" para o projeto iniciar em localhost:3000. Com esse comando, é possível fazer alterações no código e observar as modificações sem reiniciar o servidor manualmente. <br><br><br>
  


Temos a página principal (Parcial):

<img src='https://github.com/Altovisk09/Express-mvc-ex4/blob/main/public/images/redme/homeParcial.png'></img><br><br>


Tela de login:

<img src='https://github.com/Altovisk09/Express-mvc-ex4/blob/main/public/images/redme/login.png'></img><br><br>


Tela de "Minhas Viagens" (acessada apenas caso o usuário esteja logado):

<img src='https://github.com/Altovisk09/Express-mvc-ex4/blob/main/public/images/redme/minhasViagens.png'></img>





