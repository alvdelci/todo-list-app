# How to use the app

## Backend

O backend foi desenvolvido em Express.js (um dos frameworks mais utilizados para desenvolvimento de api's com Node.js) e MySQL no banco de dados.
O schema do banco de dados foi desenvolvido com Prisma (Técnica de mapeamento objeto-relacional), onde as tabelas do banco de dados são representadas através de classes, facilitando e diminuindo a escrita dos códigos.

### `Inicializar a API`
Pré-requisitos:
    -MySQL\
    -Node.js\
    -criar um arquivo `.env` na pasta backend/ e adicionar as informações da conexão\
        `DATABASE_URL="mysql://user:password@localhost:port/db-name"`

Comandos:
    -yarn install (para instalar as dependências do projeto)\
    -yarn prisma generate (para criar as tabelas no banco de dados)\
    -yarn start (no diretório backend/) (Inicializa o servidor na porta especificada. Default: port 3333)

### `ENDPOINTS`
url = `http://localhost:3333/`\
Criar task: url/create (POST)\
Atualizar task: url/update (POST)\
Remover task: url/delete (POST)\
Visualizar todas as tasks: url/view (GET)
Busca uma task: url/find ()POST


## Frontend

Frontend desenvolvido em ReactJS e Styled-Components.

Pré-requisitos:\
    -Node.js

Comandos:
    -yarn install (instalar dependências do projeto)\
    -yarn start (no diretório frontend/) (Inicializa a aplicação na porta especificada. Default: port 3000)
