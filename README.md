# SistemaCalendario
Sistema Calendario


#Como Rodar o Projeto Localmente

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js
XAMPP para rodar o MySQL
Navegador Web

Configuração do Banco de Dados
Abra o XAMPP e inicie o servidor MySQL.
Crie um banco de dados chamado calendario.
Crie a tabela eventos com os seguintes campos:

CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  descricao TEXT,
  data DATE,
  horario TIME
);

Instalação e Configuração
lone este repositório.
git clone https://github.com/josuelbmroczko/SistemaCalendario.git

Navegue até a pasta SistemaCalendario e instale as dependências.

cd SistemaCalendario
npm install

#Crie um arquivo .env dentro da pasta server com as seguintes variáveis:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=calendario
PORT=5000


Inicie o servidor.

node index.js
a porta que ira rodar 
http://localhost:5000/eventoCalendario

#Navegue até a pasta front-calendario, instale as dependências e inicie o cliente.

cd front-calendario
npm install
npm start

Acesse o projeto no navegador em http://localhost:3000.

🔧 Dependências Utilizadas

Back-end (Node.js)

express: Framework web para Node.js
mysql2: Conexão com o banco de dados MySQL
body-parser: Middleware para parsing de requisições HTTP convertendo-os em objetos JavaScript acessíveis pelo req.body 
cors: Suporte para Cross-Origin Resource Sharing.compartilhamento de recursos entre diferentes origens (domínios) no navegador
dotenv: Gerenciamento de variáveis de ambiente
nodemon: Reinicialização automática do servidor durante o desenvolvimento

Front-end (React.js)

axios: Cliente HTTP para consumir a API

⚙️ Decisões Técnicas Relevantes

Organização Modular: O projeto foi estruturado em pastas específicas para separar o front-end e back-end.

Configuração de Banco de Dados Segura: As credenciais de acesso ao banco de dados foram mantidas no arquivo .env para segurança.



Separação de Componentes e Páginas: O React foi dividido em componentes reutilizáveis para uma melhor manutenção e escalabilidade do front-end.

Axios para Comunicação: Axios foi utilizado para facilitar as requisições entre o cliente e a API do servidor.

Este projeto está pronto para ser configurado e rodado em ambiente local com facilidade, oferecendo uma estrutura bem definida para gerenciar eventos.

