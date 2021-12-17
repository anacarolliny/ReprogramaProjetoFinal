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

 <div id='regras'/>

 ## ✅ Demandas da API -  📝 Regras de negócio
 A API contém os seguintes endponits:

ele lista as profissoes e por profissoes tambem

		[POST] /api/profissionais

 - Cadastrar de profissionais voluntários.

   

   [GET] /api/profissionais

 - Listar todos os profissionais voluntários.

   

 - [GET] /api/profissionais/area ~ [GET] /api/profissionais/profissao ~ [GET] /api/profissionais/nome

 - Filtrar profissionais voluntários por Área, Profissão e Nome.

   

   [PUT] /api/profissionais/{nome}

 - Atualiza cadastro de profissionais voluntários, buscando pelo nome.

   

   [DELETE] /api/profissionais/{nome}

 - Remover cadastro de profissionais voluntários, buscando pelo no.




		[POST] /api/participantes

 - Cadastrar de participantes da ONG.
 - Listagem de todas as participantes.
 - Listagem de participantes por idade, escolaridade, informações importantes, itens importantes e genero.
 - Atualiza cadastro de participante.
 - Remoção de cadastro

falar das keys dos query params

<br>

## 🔃 Apresentação das Rotas de Profissionais:

| Método HTTP | Endpoint                                        | Descrição                                             |
| ----------- | ----------------------------------------------- | ----------------------------------------------------- |
| GET         | /api/profissionais                              | Retorna todos os profissionais                        |
| GET         | /api/profissionais?idade=VALUE                  | Filtra profissionais pela idade                       |
| GET         | /api/profissionais?escolaridade=VALUE           | Filtra profissionais pela escolaridade                |
| GET         | /api/profissionais?informacoesNecessarias=VALUE | Filtra profissionais pela informacoesNecessarias      |
| GET         | /api/profissionais?itensNecessarios=VALUE       | Filtra profissionais pela itensNecessarios            |
| GET         | /api/profissionais?genero=VALUE                 | Filtra profissionais por genero                       |
| GET         | /api/profissionais/profissao                    | Retorna apenas as profissoes cadastradas              |
| GET         | /api/profissionais/area                         | Retorna apenas as Áreas de Atuação cadastradas        |
| GET         | /api/profissionais/nomes                        | Retorna apenas os nomes dos profissionais cadastrados |
|             |                                                 |                                                       |
| POST        | /profissionais                                  | Cria/cadastra um profissional voluntário              |
| PUT         | /profissionais/:nome                            | Altera informações de um profisisonal                 |
| DELETE      | /profissionais/:nome                            | Remove um profissional                                |

<br>

 <br>

 ## ✅ Model de profissionalCollection

- id: autogerado
- nome: texto e obrigatório
- contato: texto e obrigatório
- email: texto e obrigatório
- profissao: texto e obrigatório
- area: texto e obrigatório
- informacoes: texto e obrigatório

<br>

<br>

## ✅ API Profissionais deve retornar seguinte JSON:

```
 - [GET] /api/profissionais

 - [
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

 - [GET] /api/profissionais?profissao=Fisioterapeura

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

- [GET] /api/profissionais?area=Pedagogia
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

- [GET] /api/profissionais?nome=Jaqueline Sophia Lima


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

- [GET] /api/profissionais/profissao

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

- [GET] /api/profissionais/area

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

- [GET] /api/profissionais/nomes

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

Falta colocar o POST, PUT, DELETE

<br>

* [Retorna apenas as profissoes cadastradas](#prof_retr1)
* [Retorna apenas as Áreas de Atuações cadastradas](#prof_retr2)
* [Retorna apenas os nomes dos profissionais cadastrados](#prof_retr3)
* [Cadastro de profissionais](#cadastro_prof)
* [Atualização de Cadastro](#atualizacao_cadastro_prof)
* [Deletar Cadastro](#deletar_prof)

<br>

## 🔃 Apresentação das Rotas de Profissionais:

| Método HTTP | Endpoint                           | Descrição                                             |
| ----------- | ---------------------------------- | ----------------------------------------------------- |
| GET         | /api/profissionais                 | Retorna todos os profissionais                        |
| GET         | /api/profissionais?profissao=VALUE | Filtra profissionais pela profissao                   |
| GET         | /api/profissionais?area=VALUE      | Filtra profissionais pela area                        |
| GET         | /api/profissionais?nome=VALUE      | Filtra profissionais pelo nome                        |
| GET         | /api/profissionais/profissao       | Retorna apenas as profissoes cadastradas              |
| GET         | /api/profissionais/area            | Retorna apenas as Áreas de Atuação cadastradas        |
| GET         | /api/profissionais/nomes           | Retorna apenas os nomes dos profissionais cadastrados |
| POST        | /profissionais                     | Cria/cadastra um profissional voluntário              |
| PUT         | /profissionais/:nome               | Altera informações de um profisisonal                 |
| DELETE      | /profissionais/:nome               | Remove um profissional                                |
|             |                                    |                                                       |
|             |                                    |                                                       |
|             |                                    |                                                       |

<br>


## 🔃 Apresentação das Rotas de Participantes:

| Método HTTP | Endpoint                                        | Descrição                                                    |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------ |
| GET         | /api/participantes                              | Retorna todas as participantes                               |
| GET         | /api/participantes?idade=VALUE                  | Filtra profissionais pela idade                              |
| GET         | /api/participantes?escolaridade=VALUE           | Filtra profissionais pela escolaridade                       |
| GET         | /api/participantes?informacoesNecessarias=VALUE | Filtra profissionais pela informacoesNecessarias             |
| GET         | /api/participantes?itensNecessarios=VALUE       | Filtra profissionais pela itensNecessarios                   |
| GET         | /api/participantes?genero=VALUE                 | Filtra profissionais por genero                              |
| GET         | /api/participantes/idade                        | Gera uma lista apenas com a idade de cada participante       |
| GET         | /api/participantes/escolaridade                 | Gera uma lista apenas com a escolaridade de cada participante |
| GET         | /api/participantes/informacoes                  | Gera uma lista apenas com as informações de cada participante |
| GET         | /api/participantes/genero                       | Gera uma lista apenas com o genero de cada participante      |
| GET         | /api/participantes/itens                        | Gera uma lista apenas com os itens necessarios de cada participante |
| POST        | /api/participantes                              | Cria/cadastra uma participante                               |
| PUT         | /api/participante/:nome                         | Altera informações de uma participante                       |
| DELETE      | /api/participante/:nome                         | Remove uma participante                                      |

<br>

### Participantes
* [Listagem de participantes](#part)
* [Filtra participantes pela idade](#part_filtro1)
* [Filtra participantes pela escolaridade](#part_filtro2)
* [Filtra participantes pelas informacoesNecessarias](#part_filtro3)
* [Filtra participantes pelos itensNecessarios](#part_filtro4)
* [Filtra participantes pelo genero](#part_filtro5)
* [Retorna todas as idades cadastradas](#part_retr1)
* [Retorna todas as escolaridades cadastradas](#part_retr2)
* [Retorna todas as informacoes cadastradas](#part_retr3)
* [Retorna todas as informacoes cadastradas](#part_retr4)
* [Retorna todas os generos cadastradas](#part_retr5)
* [Retorna todas os itens necessarios cadastradas](#part_retr5)
* [Cadastro de participantes](#cadastro_part)
* [Atualização de Cadastro](#atualizacao_cadastro_part)
* [Deletar Cadastro](#deletar_part)

<br>

 ## ✅ Model de participantesCollection

- id: autogerado
- nome: texto e obrigatório
- dataNascimento: texto e obrigatório
- idade: texto e obrigatório
- genero: texto e obrigatório
- escolaridade: texto e obrigatório
- contato: texto e obrigatório
- dataDeEntrada: texto e obrigatório
- informacoesNecessarias: texto e obrigatório

- itensNecessarios: texto e obrigatório

- informacoesAdicionais: texto e obrigatório

- criadoEm: Date
- atualizadoEm: Date

<br>

<br>

## ✅ API Participantes deve retornar seguinte JSON:

```jsx
[GET] /api/participantes
[
    {
        "_id": "61b64943ae66d6026d08cd8b",
        "nome": "Mirella Joana Evelyn de Paula",
        "dataNascimento": "18/01/1968",
        "idade": "53",
        "genero": "Feminino",
        "escolaridade": "Fundamental",
        "contato": "53998333917",
        "dataDeEntrada": "22/06/2020",
        "informacoesNecessarias": "Fato ocorrido no interior do Pará",
        "itensNecessarios": "Remedios",
        "informacoesAdicionais": "Roupas",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    },
    {
        "_id": "61b649afae66d6026d08cd8d",
        "nome": "Aline Rosa Santos",
        "dataNascimento": "15/08/1987",
        "idade": "34",
        "genero": "Feminino",
        "escolaridade": "Médio",
        "contato": "79986438550",
        "dataDeEntrada": "15/04/2019",
        "informacoesNecessarias": "Precisa urgente dar entrada em cirurgia plástica",
        "itensNecessarios": "Ajuda com Psicólogia e Fisioterapia",
        "informacoesAdicionais": "Remédios",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    },
    {
        "_id": "61b64a2eae66d6026d08cd8f",
        "nome": "Pietro Carlos Bernardes",
        "dataNascimento": "11/12/2003",
        "idade": "18",
        "genero": "Masculino",
        "escolaridade": "Fundamental",
        "contato": "92996122265",
        "dataDeEntrada": "30/11/2020",
        "informacoesNecessarias": "Estava atravessando com o barco do pai para ir a escola",
        "itensNecessarios": "Advogado para conseguir direitos",
        "informacoesAdicionais": "Roupas",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    },
    {
        "_id": "61b64a8fae66d6026d08cd91",
        "nome": "Andreia Antonella Fogaça",
        "dataNascimento": "07/09/1978",
        "idade": "43",
        "genero": "Feminino",
        "escolaridade": "Médio",
        "contato": "54986454855",
        "dataDeEntrada": "05/04/2021",
        "informacoesNecessarias": "Trabalhava junto com marido",
        "itensNecessarios": "Precisa de tratamentos, muita dor na cabeça",
        "informacoesAdicionais": "Perucas e remedios",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    }
]

- [GET] /api/profissionais?idade=18
[
    {
        "_id": "61b64a2eae66d6026d08cd8f",
        "nome": "Pietro Carlos Bernardes",
        "dataNascimento": "11/12/2003",
        "idade": "18",
        "genero": "Masculino",
        "escolaridade": "Fundamental",
        "contato": "92996122265",
        "dataDeEntrada": "30/11/2020",
        "informacoesNecessarias": "Advogado para conseguir direitos",
        "itensNecessarios": "Roupas",
        "informacoesAdicionais": "Está em ano letivo",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    }
]

- [GET] /api/profissionais?escolaridade=Fundamental

[
    {
        "_id": "61b64943ae66d6026d08cd8b",
        "nome": "Mirella Joana Evelyn de Paula",
        "dataNascimento": "18/01/1968",
        "idade": "53",
        "genero": "Feminino",
        "escolaridade": "Fundamental",
        "contato": "53998333917",
        "dataDeEntrada": "22/06/2020",
        "informacoesNecessarias": "Fato ocorrido no interior do Pará",
        "itensNecessarios": "Remedios",
        "informacoesAdicionais": "Roupas",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    },
    {
        "_id": "61b64a2eae66d6026d08cd8f",
        "nome": "Pietro Carlos Bernardes",
        "dataNascimento": "11/12/2003",
        "idade": "18",
        "genero": "Masculino",
        "escolaridade": "Fundamental",
        "contato": "92996122265",
        "dataDeEntrada": "30/11/2020",
        "informacoesNecessarias": "Estava atravessando com o barco do pai para ir a escola",
        "itensNecessarios": "Advogado para conseguir direitos",
        "informacoesAdicionais": "Roupas",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    }
]

- [GET] /api/profissionais?genero=Masculino

[
    {
        "_id": "61b64a2eae66d6026d08cd8f",
        "nome": "Pietro Carlos Bernardes",
        "dataNascimento": "11/12/2003",
        "idade": "18",
        "genero": "Masculino",
        "escolaridade": "Fundamental",
        "contato": "92996122265",
        "dataDeEntrada": "30/11/2020",
        "informacoesNecessarias": "Advogado para conseguir direitos",
        "itensNecessarios": "Roupas",
        "informacoesAdicionais": "Está em ano letivo",
        "criadoEm": "2021-12-12T17:41:58.710Z",
        "atualizadoEm": "2021-12-12T17:41:58.710Z",
        "__v": 0
    }
]

OBS: Falta de itens

[GET] /api/participantes/idade

[
    {
        "idade": "53"
    },
    {
        "idade": "34"
    },
    {
        "idade": "18"
    },
    {
        "idade": "43"
    }
]

[GET] /api/participantes/escolaridade

[
    {
        "escolaridade": "Fundamental"
    },
    {
        "escolaridade": "Médio"
    },
    {
        "escolaridade": "Fundamental"
    },
    {
        "escolaridade": "Médio"
    }
]

[GET] /api/participantes/informacoes

[
    {
        "informacoesNecessarias": "Fato ocorrido no interior do Pará",
        "itensNecessarios": "Remedios",
        "informacoesAdicionais": "Roupas"
    },
    {
        "informacoesNecessarias": "Precisa urgente dar entrada em cirurgia plástica",
        "itensNecessarios": "Ajuda com Psicólogia e Fisioterapia",
        "informacoesAdicionais": "Remédios"
    },
    {
        "informacoesNecessarias": "Estava atravessando com o barco do pai para ir a escola",
        "itensNecessarios": "Advogado para conseguir direitos",
        "informacoesAdicionais": "Roupas"
    },
    {
        "informacoesNecessarias": "Trabalhava junto com marido",
        "itensNecessarios": "Precisa de tratamentos, muita dor na cabeça",
        "informacoesAdicionais": "Perucas e remedios"
    }
]

[GET] /api/participantes/genero

[
    {
        "genero": "Feminino"
    },
    {
        "genero": "Feminino"
    },
    {
        "genero": "Masculino"
    },
    {
        "genero": "Feminino"
    }
]

Falta fazer o POST, DELETE, PUT
```
<br>