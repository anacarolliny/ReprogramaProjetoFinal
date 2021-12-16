<p align="center">
<img src='C:\Users\T-Gamer\Downloads\mix-raca-meninas-de-maos-dadas-em-pe-juntas-movimento-de-empoderamento-feminino-conceito-de-poder-feminino-isolado_48369-34041.webp' title="Banner">
</p>




># Curae - Apoio Mutuo aos seus semelhantes

Api que visa trazer mais visibilidade para a ONG e suas integrantes, sendo o elo/ ponto entre profissionais voluntários e participantes do projeto.

># 🏪 API - 

## índice

* [Proposta](#proposta)
* [Introdução](#introducao)<br>
  * [Objetivo](#objetivo)
* [Tecnologias Utilizadas](#tecnologias)
* [Arquitetura MVC](#arquitetura)
* [Instruções para utilização da API](#aplicacao)
* [Mapeamento das Rotas](#rotas)
* [Agradecimentos](#agradecimentos)

---

<div id='proposta'/>

## 📝 Proposta 
Este é um repositório referente ao projeto final do curso de BackEnd da [Reprograma](https://reprograma.com.br/) sobre NodeJS </br>
A proposta desse projeto é desenvolver um software para demonstrar os nossos conhecimentos adquiridos durante o curso.

Na ocasião refleti sobre qual assunto ou causa poderia tentar apoiar e talvez trazer algum tipo de solução ou até visibilidade para a situação e atual história de cada uma das participantes.



<div id='introducao'/>

 ## 💡 Introdução 
 Tive conhecimento de uma ONG através do trabalho voluntário de minha mãe, como assistente social ela auxiliava as mulheres que eram integrantes desta ONG que chegavam pedindo ajuda pois era um dos lugares do Pará que dava atenção para pessoas em sua maioria mulheres vitimas de escalpelamento. A maioria do apoio era em parcerias e os unicos tratamentos no máximo eram apenas os cuidados com o Hospital local, mas elas por serem ribeirinhas com acessos muito precarios em sua região de moraria(Interior do Pará) quase nunca conseguiam auxilio do governo, estrutura ou ajuda que fosse, fisica, psicologica ou social.

Com essa realidade eu perguntava para minha mãe se a ONG tinha uso de tecnologia para agilizar o processo de auxilio dessas participantes, e a resposta foi que apenas utilizavam arquivos totalmente ainda de papel.

Desde aquele momento fiquei refletindo sobre o assunto, e com este projeto agora tive a ideia de tentar pensar em algo que fosse util para essas pessoas envolvidas : participantes, voluntários e possivelmente empresas.

<div id='objetivo'/>

 ### 🎯 Objetivo
 O objetivo desse projeto é desenvolver um serviço HTTP que gere maior visibilidade para a ONG, unindo e integrando profissionais voluntários, participantes e possiveis empresas e doações. Criando um sistema que tenha funcionalidades que atendam estas necessidades e demandas dos seguintes requisitos:

 - Adiciona um produto na lista de compra do cliente;

 - Cadastrar profissionais voluntários

 - Gerar listas desses profissionais por, área de atuação, profissão e nome a fim de simplificar o processo de integração entre necessidades da ONG, das participantes e dos voluntários

 - Remover cadastro de profissionais voluntários.

 - Atualizar cadastro de profissionais voluntários.

   

<div id='tecnologias'/>
 ## 🛠 Tecnologias utilizadas 
Para o desenvolvimento do projeto foi utilizado tecnologias adequadas ao contexto desse desenvolvimente e elas são:

[<img title="JavaScript" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"> JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):  linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.

[<img title="NodeJS" width="20" src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"> NodeJS](https://nodejs.org/pt-br/): plataforma em que é possível criar aplicações Javascript sem depender de um browser para a execução.

[<img title="Nodemon" width="20" src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png"> Nodemon](https://www.npmjs.com/package/nodemon): módulo é um utilitário que irá monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário.

[<img title="Express" width="20" src="https://camo.githubusercontent.com/6686b9ef0e21e13c9e7c846340303765c0f36e40a0490bcad453ea9d0d433ea0/68747470733a2f2f7777772e6d656d656e746f746563682e696e2f6173736574732f696d616765732f69636f6e732f657870726573732e706e67"> Express.js](https://expressjs.com/pt-br/): é um framework para Node.js que fornece recursos mínimos para construção de servidores web.

<a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a>[ Heroku](https://www.heroku.com/):Heroku é uma plataforma em nuvem como um serviço que suporta  várias linguagens de programação. Uma das primeiras plataformas em nuvem

<a href="https://www.mongodb.com/" target="_blank"  rel="noreferrer">           <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"  alt="mongodb" width="40" height="40"/>         </a>[MongoDB](https://www.mongodb.com/pt-br/what-is-mongodb):é um software de banco de dados orientado a documentos  livre, de código aberto e multiplataforma.  Classificado como um programa de banco de dados NoSQL, o MongoDB usa  documentos semelhantes a JSON com esquemas.


[<img title="Swagger" width="20" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"> Swagger](https://swagger.io/): é uma aplicação open source que auxilia desenvolvedores nos processos de definir, criar, documentar e consumir APIs REST.

[<img title=".env" width="20" src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png"> .env](https://www.npmjs.com/package/dotenv): é a ferramenta utilizada para orquestrar as variáveis ambiente de um projeto. 


<div id='arquitetura'/>
## 📁 Arquitetura MVC 

```
 📁 ProjetoFinalReprograma
   |
   |-  📁 src
   |    |
   |    |- 📁 configs
   |         |- 📑 database.js
   |         |- 📑 comentariosControllers.js
   |         |- 📑 livrosControllers.js 
   |
   |    |- 📁 controllers
   |         |- 📑 participantesController.js
   			 |- 📑 profissionaisController.js 	
   |
   |    |- 📁 models
   |         |- 📑 participantesSchema.js
   |         |- 📑 profissionaisSchema.js
   |         |- 📑 livro.js
   |
   |    |- 📁 routes
   |         |- 📑 participantesRoutes.js 
   |         |- 📑 profissionaisRoutes.js
   |         
   |
   |    |- 📑 app.js
   |    
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
      |- 📑 README.md
   |- 📑 server.js

```
<br>

<div id='aplicacao'/>

## 💻 Instruções para utilização da API

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

### 1º Passo - Clonar o respositório
Comece clonando esse projeto para a sua máquina local.
```sh
git clone https://github.com/anacarolliny/ReprogramaProjetoFinal
```
```sh
cd ProjetoFinalReprograma> 
```

### 2º Passo - Instalando as dependências
Para instalar as dependências do projeto, digite o seguinte comando no terminal:
```sh
npm i
```

### 3º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo `.env.example` e renomea-lo somente para `.env`.</br>
Em seguida, altere as informações desse arquivo `.env` para as informações correspondentes a sua máquina e e inclua as variáveis e os valores
MONGODB_URL = URL do MongoDb Atlas Banco de dados orientado a documentos e interface na nuvem.

### 4º Passo - Executando a aplicação
Depois de tudo configurado, é hora de rodar a nossa aplicação, para executá-la basta digitar o seguinte comando no terminal:
```sh
npm start
```
Após esse comando o servidor irá inicializar e então aparecerá as mensagens que esse processo foi realizado com sucesso em seguida aparecerá dois links, como na imagem a seguir, sendo um link referente a aplicação e outra ao swagger, um atalho para acessá-las no browser e ter uma melhor visualização basta estar com o mouse sobre o link desejado e digitar `ctrl + click`.

<p align="center">
<img src="C:\Users\T-Gamer\ProjetoFinalReprograma\src\img\img1.png">
</p>


<div id='rotas'/>

## 🗺 Mapeamento das rotas
Exemplo e demostração das rotas e parâmetros e body das requisições.</br>
Para caso o usuário queira realizar a verificação do REST no Postman, Insomnia ou outros softwares.

## 📑 Índice das rotas

 ### Profissionais
* [Listagem de profissionais](#prof)
* [Filtra profissionais pela profissao](#prof_filtro1)
* [Filtra profissionais pela area](#prof_filtro2)
* [Filtra profissionais pelo nome](#prof_filtro3)
* [Retorna apenas as profissoes cadastradas](#prof_retr1)
* [Retorna apenas as Áreas de Atuações cadastradas](#prof_retr2)
* [Retorna apenas os nomes dos profissionais cadastrados](#prof_retr3)
* [Cadastro de profissionais](#cadastro_prof)
* [Atualização de Cadastro](#atualizacao_cadastro_prof)
* [Deletar Cadastro](#deletar_prof)

 ### Participantes
* [Listagem de participantes](#part)
* [Filtra participantes pela idade](#part_filtro1)
* [Filtra participantes pela escolaridade](#part_filtro2)
* [Filtra participantes pelas informacoesNecessarias](#part_filtro3)
* [Filtra participantes pelos itensNecessarios](#part_filtro4)
* [Filtra participantes pelo genero](#part_filtro5)
* [Filtra participantes pela idade](#part_filtro6)
* [Retorna todas as idades cadastradas](#part_retr1)
* [Retorna todas as escolaridades cadastradas](#part_retr2)
* [Retorna todas as informacoes cadastradas](#part_retr3)
* [Retorna todas as informacoes cadastradas](#part_retr4)
* [Retorna todas os generos cadastradas](#part_retr5)
* [Retorna todas os itens necessarios cadastradas](#part_retr5)
* [Cadastro de participantes](#cadastro_part)
* [Atualização de Cadastro](#atualizacao_cadastro_part)
* [Deletar Cadastro](#deletar_part)

---

<div id='prof'/>


## 🏪 Listagem de Profissionais
Listagem de todos os profissionais cadastrados na base de dados. 

Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:4000/api/profissionais
```

### 📤 Resposta:
Exemplo:
```json
[
  {
        "_id": "61b63f6cae66d6026d08cd68",
        "nome": "Manoel Enrico Ricardo Moraes",
        "contato": "65982688775",
        "email": "manoelenricoricardomoraes-74@ftcomercial.com.br",
        "profissao": "Médico",
        "area": "Saúde",
        "informacoes": "Cirurgião Plastico",
        "__v": 0
    },
    {
        "_id": "61b64001ae66d6026d08cd6a",
        "nome": "Sara Lara da Silva",
        "contato": "54995377480",
        "email": "ssaralaradasilva@castromobile.com.br",
        "profissao": "Psicóloga",
        "area": "Saúde",
        "informacoes": "Psicologia Clínica ",
        "__v": 0
    },
    {
        "_id": "61b64032ae66d6026d08cd6c",
        "nome": "José Luan Edson Moreira",
        "contato": "66998911652",
        "email": "joseluanedsonmoreira_@gmalato.com.br",
        "profissao": "Psicólogo",
        "area": "Saúde",
        "informacoes": "Psicologia Jurídica",
        "__v": 0
    },
    {
        "_id": "61b640cdae66d6026d08cd6e",
        "nome": "Jaqueline Sophia Lima",
        "contato": "61986671815",
        "email": "jaquelinesophialima..jaquelinesophialima@premierpet.com.br",
        "profissao": "Advogada",
        "area": "Direito",
        "informacoes": "Advogada Previdenciária",
        "__v": 0
    },
    {
        "_id": "61b6412dae66d6026d08cd70",
        "nome": "Isabelle Sônia da Paz",
        "contato": "84993048247",
        "email": "isabellesoniadapaz__isabellesoniadapaz@estevao.ind.br",
        "profissao": "Professora",
        "area": "Pedagogia",
        "informacoes": "Dá aulas para crianças, sendo responsável pela alfabetização e pelo ensinamento de disciplinas básicas.",
        "__v": 0
    },
    {
        "_id": "61b641a9ae66d6026d08cd72",
        "nome": "Brenda Nina Sales",
        "contato": "68986428766",
        "email": "brendaninasales..brendaninasales@findout.com.br",
        "profissao": "Professora",
        "area": "Pedagogia",
        "informacoes": "Leciona nos Ensinos Fundamental e Médio das escolas de Educação Básica.",
        "__v": 0
    },
    {
        "_id": "61b642a2ae66d6026d08cd74",
        "nome": "Lucca Sebastião Rodrigues",
        "contato": "83982786932",
        "email": "luccasebastiaorodrigues_@fclcapital.com",
        "profissao": "Assistente Social",
        "area": "Serviço Social",
        "informacoes": "Auxiliar a solucionarer dificuldades de acesso ao direitos em situações de vulnerabilidade social",
        "__v": 0
    },
    {
        "_id": "61b64360ae66d6026d08cd76",
        "nome": "Heloise Luzia Vera Rodrigues",
        "contato": "61998044968",
        "email": "heloiseluziaverarodrigues..heloiseluziaverarodrigues@unifesp.br",
        "profissao": "Psicóloga",
        "area": "Hospitalar",
        "informacoes": "Trabalha em lidar com situações tramáticas, ajuda a lidar com situações e superar traumas, envitando depressão produnda",
        "__v": 0
    },
    {
        "_id": "61b643e8ae66d6026d08cd78",
        "nome": "Lorenzo Thiago Arthur Aparício",
        "contato": "73986363998",
        "email": "lorenzothiagoarthuraparicio..lorenzothiagoarthuraparicio@dkcarmo.com",
        "profissao": "Fisioterapeura",
        "area": "Saúde",
        "informacoes": "Fisioterapeura no pré e pós operatório de cirurgias plásticas",
        "__v": 0
    },
    {
        "_id": "61b64485ae66d6026d08cd7a",
        "nome": "Ana Bárbara Marli Alves",
        "contato": "98987202188",
        "email": "anabarbaramarlialves..anabarbaramarlialves@esctech.com.br",
        "profissao": "Cirurgiã Plastica",
        "area": "Saúde",
        "informacoes": "Faz cirurgias que reconstroe parte de algum osso do corpo humano",
        "__v": 0
    }

]
```

---


<div id='prof_filtro1'/>

##  Filtra profissionais pela profissão ~falta colocar
Filtra profissionais pela profissão

Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:4000/api/profissionais?profissao=Fisioterapeura
```

### 📜 Parâmetros (body):
Query Params.
```
  Key: profissao 
  Value: Fisioterapia 

```
### 📤 Resposta:
Exemplo:
```json
[
  {
     
        "_id": "61b643e8ae66d6026d08cd78",
        "nome": "Lorenzo Thiago Arthur Aparício",
        "contato": "73986363998",
        "email": "lorenzothiagoarthuraparicio..lorenzothiagoarthuraparicio@dkcarmo.com",
        "profissao": "Fisioterapeura",
        "area": "Saúde",
        "informacoes": "Fisioterapeura no pré e pós operatório de cirurgias plásticas",
        "__v": 0
    }
]
```

---



##  Filtra profissionais pela Área de Atuação ~falta colocar

Filtra profissionais pela Área de Atuação

Método: `GET`

### 📥 Requisição (rota):

```
http://localhost:4000/api/profissionais?area=Pedagogia
```

### 📜 Parâmetros (body):

Query Params.

```
  Key: area 
  Value: Pedagogia 

```

### 📤 Resposta:

Exemplo:

```json

[
    {
        "_id": "61b6412dae66d6026d08cd70",
        "nome": "Isabelle Sônia da Paz",
        "contato": "84993048247",
        "email": "isabellesoniadapaz__isabellesoniadapaz@estevao.ind.br",
        "profissao": "Professora",
        "area": "Pedagogia",
        "informacoes": "Dá aulas para crianças, sendo responsável pela alfabetização e pelo ensinamento de disciplinas básicas.",
        "__v": 0
    },
    {
        "_id": "61b641a9ae66d6026d08cd72",
        "nome": "Brenda Nina Sales",
        "contato": "68986428766",
        "email": "brendaninasales..brendaninasales@findout.com.br",
        "profissao": "Professora",
        "area": "Pedagogia",
        "informacoes": "Leciona nos Ensinos Fundamental e Médio das escolas de Educação Básica.",
        "__v": 0
    }
]
    
```

---



##  Filtra profissionais pelo Nome ~falta colocar

Filtra profissionais pelo Nome

Método: `GET`

### 📥 Requisição (rota):

```
http://localhost:4000/api/profissionais?nome=Jaqueline Sophia Lima
```

### 📜 Parâmetros (body):

Query Params.

```
  Key: nome 
  Value:Jaqueline Sophia Lima

```

### 📤 Resposta:

Exemplo:

```json
[
    {
        "_id": "61b640cdae66d6026d08cd6e",
        "nome": "Jaqueline Sophia Lima",
        "contato": "61986671815",
        "email": "jaquelinesophialima..jaquelinesophialima@premierpet.com.br",
        "profissao": "Advogada",
        "area": "Direito",
        "informacoes": "Advogada Previdenciária",
        "__v": 0
    }
]
```

---

##  Retorna apenas as profissoes cadastradas ~falta colocar

Retorna apenas as profissoes cadastradas

Método: `GET`

### 📥 Requisição (rota):

```
http://localhost:4000/api/profissionais/profissao
```

### 📤 Resposta:

Exemplo:

```json

[
    {
        "profissao": "Fisioterapeura"
    },
    {
        "profissao": "Massagista"
    },
    {
        "profissao": "Médico"
    },
    {
        "profissao": "Psicóloga"
    },
    {
        "profissao": "Psicólogo"
    },
    {
        "profissao": "Advogada"
    },
    {
        "profissao": "Professora"
    },
    {
        "profissao": "Professora"
    },
    {
        "profissao": "Assistente Social"
    },
    {
        "profissao": "Psicóloga"
    },
    {
        "profissao": "Fisioterapeura"
    },
    {
        "profissao": "Cirurgiã Plastica"
    }
]

    
```

---

##  Retorna apenas as Áreas de Atuação cadastradas ~falta colocar

Retorna apenas as Áreas de Atuação cadastradas
Método: `GET`

### 📥 Requisição (rota):

```
http://localhost:4000/api/profissionais/area
```

### 📤 Resposta:

Exemplo:

```json
[
    {
        "area": "Saúde"
    },
    {
        "area": "Saúde"
    },
    {
        "area": "Saúde"
    },
    {
        "area": "Saúde"
    },
    {
        "area": "Saúde"
    },
    {
        "area": "Direito"
    },
    {
        "area": "Pedagogia"
    },
    {
        "area": "Pedagogia"
    },
    {
        "area": "Serviço Social"
    },
    {
        "area": "Hospitalar"
    },
    {
        "area": "Saúde"
    },
    {
        "area": "Saúde"
    }
]
    
```

---

##  Retorna apenas os nomes dos profissionais cadastrados ~falta colocar

Retorna apenas os nomes dos profissionais cadastrados
Método: `GET`

### 📥 Requisição (rota):

```
http://localhost:4000/api/profissionais/nomes
```

### 📤 Resposta:

Exemplo:

```json
[
       {
        "nome": "Manoel Enrico Ricardo Moraes"
    },
    {
        "nome": "Sara Lara da Silva"
    },
    {
        "nome": "José Luan Edson Moreira"
    },
    {
        "nome": "Jaqueline Sophia Lima"
    },
    {
        "nome": "Isabelle Sônia da Paz"
    },
    {
        "nome": "Brenda Nina Sales"
    },
    {
        "nome": "Lucca Sebastião Rodrigues"
    },
    {
        "nome": "Heloise Luzia Vera Rodrigues"
    },
    {
        "nome": "Lorenzo Thiago Arthur Aparício"
    },
    {
        "nome": "Ana Bárbara Marli Alves"
    }
] 
```

---


<div id='clientes'/>

## 👨‍👩‍👧‍👦 Cadastro de clientes
Cadastrar profissionais na base de dados.</br>
Essa rota possui as seguintes validações:
- Todos os campos devem ser preenchidos

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:4000/api/profissionais
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.

```json
{
   "nome": "France Santos ",
   "contato": "9999-9999",
   "email": "france@teste.com",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  
  "id": ,
  "nome": "France Santos ",
   "contato": "9999-9999",
   "email": "france@teste.com",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica",
   "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
}
```

---

<div id='statusRetirado'/>

## 🚚 Atualizar o cadastro"
Altera informações de um profissional
</br>


Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:4000/api/profissionais/:nome

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.

​```json
{
   "nome": "France Santos Figueira",
   "contato": "9999-7777",
   "email": "france@teste.com.br",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  {
   "nome": "France Santos Figueira",
   "contato": "9999-7777",
   "email": "france@teste.com.br",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica",
   "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
}
}
```

---

<div id='excluirProdutoPedido'/>

## 🗑 Deletar cadastro do profissional
Excluir um cadastro 

Método: `DELETE`

### 📥 Requisição (rota):
```
http://localhost:4000/api/profissionais/:nome
```


### 📤 Resposta:
Exemplo:
```
"Profissional removido."
```

---


<div id='agradecimentos'/> 

## 👨‍👩‍👧‍👦 Agradecimentos  

-



<div id='orientadores'/>

