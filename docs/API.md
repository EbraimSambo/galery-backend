# Documentação da API

O Gallery Backend expõe uma API RESTful.

## Base URL

A URL base para todas as requisições é:

```
http://localhost:4000/api/v1
```

(A porta pode variar dependendo da configuração em `.env`).

## Swagger UI

A documentação interativa da API (Swagger) está disponível em:

```
http://localhost:4000/swagger
```

Através do Swagger UI, você pode visualizar todos os endpoints disponíveis, seus esquemas de requisição e resposta, e testar as requisições diretamente no navegador.

## Autenticação

(Adicionar detalhes sobre autenticação se aplicável, ex: JWT, Bearer Token)

## Endpoints Principais

Abaixo estão alguns dos módulos principais da API (consulte o Swagger para lista completa):

-   **Auth**: Endpoints de autenticação.
-   **Users**: Gerenciamento de usuários.
-   **Gallery**: Gerenciamento de itens da galeria.
