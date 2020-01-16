# Challenge Locus Prime

## Table of contents

- [Principais Tecnlogias](#principais-tecnlogias)
- [Deploy](#deploy)
- [Dicas](#dicas)
- [Bugs](#bugs)
- [Pretenções](#pretenções)

# Principais Tecnlogias

- React js
- Eslint
- Commitlint
- Husky
- Commitizen
- Styled Components
- Redux
- Redux saga
- Redux Persist
- Reduxsauce
- Immer
- UnForm
- Yup
- Axios

# Deploy

Para rodar o projeto em sua maquina.

1. Clone o repositorio e acesse a pasta raiz.

2. Troque para a branch develop com **git checkout develop**.

3. Execute **yarn**.

4. Crie um arquivo db.json na raiz. contendo o seguinte valor:

```json
{
	"users": [],
	"profiles": []
}
```

5. Execute **yarn start**.

# Dicas

Caso queira fazer alguma sugestão de alterão. apos alterar execute **git commit** e siga os passos para manter os commits padronizados.

# Bugs

1.Por limitação do json server (ou pouco conhecimento de minha parte sobre a lib).
Um profile que ja está vinculado a um usuario. Não pode ser vinculdo a outro.
Tentei algumas soluções, más por crer que isto não venha ao caso. Decidi deixar como esta.

# Pretenções

1. Logo mais irei criar uma api em node ou usar firebase, para sanar o 'problema'dos relaciomentos.
