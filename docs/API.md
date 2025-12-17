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

## Endpoints Principais

A API é focada no gerenciamento de galeria e imagens:

-   **Gallery**: Gerenciamento de álbuns e itens da galeria.
-   **Image**: Upload e manipulação de imagens.

Consulte o Swagger (`/swagger`) para a lista completa de rotas e schemas.

