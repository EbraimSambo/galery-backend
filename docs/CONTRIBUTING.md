# Guia de Contribuição

Obrigado pelo interesse em contribuir para o Gallery Backend!

## Padrões de Código

Este projeto utiliza:

-   **Prettier**: Para formatação de código.
-   **ESLint**: Para linting e garantia de qualidade.
-   **NestJS Style Guide**: Seguimos as boas práticas do framework.

Antes de commitar, certifique-se de que seu código está formatado e sem erros de lint:

```bash
pnpm format
pnpm lint
```

## Fluxo de Trabalho

1.  Crie uma branch para sua feature ou correção (`git checkout -b feature/nome-da-feature`).
2.  Faça suas alterações.
3.  Adicione testes se necessário.
4.  Rode os testes (`pnpm test`) para garantir que nada quebrou.
5.  Faça o commit das alterações.
6.  Abra um Pull Request.

## Commits

Tente usar mensagens de commit semânticas e descritivas.
