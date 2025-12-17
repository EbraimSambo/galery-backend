# Configuração e Execução

Este guia fornece os passos necessários para configurar e rodar o projeto Gallery Backend localmente.

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:

-   [Node.js](https://nodejs.org/) (Versão recomendada: >= 18)
-   [pnpm](https://pnpm.io/) (Gerenciador de pacotes)

## Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd galery-backend
    ```

2.  Instale as dependências:
    ```bash
    pnpm install
    ```

## Configuração de Ambiente

1.  Crie um arquivo `.env` na raiz do projeto basendo-se em exemplos ou solicite ao líder do projeto. As variáveis principais geralmente incluem:
    ```env
    DATABASE_URL="file:./dev.db" # Exemplo para SQLite
    # Adicione outras variáveis necessárias aqui
    ```

2.  Configure o banco de dados (Prisma):
    ```bash
    pnpm prisma generate
    pnpm prisma migrate dev
    ```

## Executando o Projeto

### Desenvolvimento

Para rodar o servidor em modo de desenvolvimento (com hot-reload):

```bash
pnpm start:dev
```

O servidor estará rodando em `http://localhost:4000/api/v1` (por padrão).

### Debug

Para rodar em modo debug:

```bash
pnpm start:debug
```

### Produção

Para compilar e rodar a versão de produção:

```bash
pnpm build
pnpm start:prod
```

## Testes

Para rodar os testes unitários:

```bash
pnpm test
```

Para rodar testes e2e:

```bash
pnpm test:e2e
```
