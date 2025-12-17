# Gallery API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Backend para a aplicação de Galeria, construído com [NestJS](https://nestjs.com/).

## Tecnologias

-   **Framework**: [NestJS](https://nestjs.com/)
-   **Linguagem**: TypeScript
-   **ORM**: [Prisma](https://www.prisma.io/) & [Drizzle](https://orm.drizzle.team/)
-   **Documentação**: Swagger
-   **Banco de Dados**: SQLite (Dev) / PostgreSQL (Prod - configurável)

## Arquitetura

O projeto segue uma **Hexagonal** dentro de cada feature.

Estrutura de pastas (`src/features/`):
-   **domain**: Entidades e regras de negócio.
-   **application**: Casos de uso e serviços.
-   **adapters**: Controladores e repositórios (implementação de portas).

Features principais:
-   `gallery`: Lógica de negócios da galeria.
-   `image`: Gerenciamento de imagens.

## Primeiros Passos

### Instalação Rápida

```bash
pnpm install
pnpm start:dev
```

Para instruções detalhadas de configuração, banco de dados e ambiente, consulte o [Guia de Configuração](docs/SETUP.md).

## Documentação

-   [Configuração e Instalação](docs/SETUP.md)
-   [Documentação da API e Swagger](docs/API.md)
-   [Guia de Contribuição](docs/CONTRIBUTING.md)

## API Swagger

A documentação interativa da API está disponível em `/swagger` quando o servidor está rodando.

## Licença

Este projeto é [UNLICENSED](LICENSE).
