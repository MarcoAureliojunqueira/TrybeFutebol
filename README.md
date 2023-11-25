# TFC FUTEBOL

Desenvolvimento  de uma Api de sistema de controle de partidas de futebol

---------------------------------------
### Autor
Marco Aurelio

---------------------------------------

### 🛠 Tecnologias utilizadas
- Javascript
- CSS
- MY SQL
- Banco Dados
- Type Script
- Docker
- SQl 



---------------------------------------

## Comandos utilizados


1. Inicializa uma nova api web no dotnet

````
npm install
````
2. Iniciar um container do SQL Server ou Azure data para máquinas com processadores M1

````
npm run Compose:up 
````

4. entra no arquivo de Front-End

````
execute npm start dentro do arquivo de Front-End

5. Quase queira acesso de administrador

Basta acessar o arquivo de Back-End e pegar email e a senha do arquivo de Seeders

---------------------------------------

## Banco de Dados

O banco de dados seguindo o diagrama de entidade relacional abaixo, pode ser criado através do scripts-db.sql

![0](/images/der.png)
<br />

---------------------------------------

## Documentação da API


![GET]([https://placehold.co/70x30/3d76bf/white/?text=GET&font=Montserrat](http://localhost:3001/teams)) `/teams

Retorna a lista de todos os Autores

***Request***
    http://localhost:3001/teams

***Response***  `200`

   [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  ...
]

---------------------------------------

![GET]([https://placehold.co/70x30/3d76bf/white/?text=GET&font=Montserrat](http://localhost:3001/teams/id)) `/teams/{id}`

Retorna os dados de um autor

***Request***
    http://localhost:3001/teams/1

***Response***  `200`

	{
  "id": 5,
  "teamName": "Cruzeiro"
}

---------------------------------------    

![POST]([https://placehold.co/70x30/3dbf94/white/?text=POST&font=Montserrat](http://localhost:3001/login)) `/login`

Insere um novo usuario

***Request***
    http://localhost:3001/login
 {
    "email": "string",
    "password": "string"
  }

***Response***  `201`

	 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNzAwODc1NTEzLCJleHAiOjE3MDE0ODAzMN9.yYKVmZPpEr25jv1CJf0BgzblQBwZuR0jJXjil694PYg"
}
 
--------------------------------------- 


![GET]([https://placehold.co/70x30/3d76bf/white/?text=GET&font=Montserrat](http://localhost:3001/matches)) `/matches

Retorna os dados de um autor

***Request***
    http://localhost:3001//matches

***Response***  `200`

[
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      }

---------------------------------------
