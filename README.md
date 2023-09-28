# ExpoPortfolio

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)



## 🚀💻 Iniciando servidor e ambiente de desenolvimento:

Após clonar o repositório (veja o [guia de contribuição](####Guia-1)), Instale as dependências requeridas em [`package.json`](./package.json), e utilize `start:dev` para inicializar. Após isso, você deve receber retornos de informações sobre o servidor no próprio terminal, incluindo a **url** onde o projeto estará rodando.

```ps1
   npm i
   npm run start:dev
```


## 🔨📜 Transpirando o código.

### Para desenvolvimento e contribuição:
Por padrão algumas partes são construídas com typescript. A transpiração é feita de forma automática nos conformes de `./tsconfig.json` com [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

#### 🎨 Sass
- Caso queira utiliar sass nas folhas de estilo, use em paralelo os scripts `sass-compiler:dev` e `start:dev` na linha de comando (utilize uma instância do terminal para cada script).

- Caso queira compilar para produção, basta executar `npm run sass-compiler:build` e seguir com as configurações.

**Scripts de `package.json`:**

```json
   // [...]
 "scripts": {
    "sass-compiler:dev": "nodemon build/sass-compiler",
    "sass-compiler:build": "node build/sass-compiler",
    "build": "npm run sass-compiler:build && nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "npm run sass-compiler:dev && nest start --watch",
   // [...]
   }

```

**por padrão o nome da folha de estilo deve iniciar com underline: "_". Ex.: arquivo `style.sass` deve ser nomeado para `_style.sass`**


#### Guia 1
## 🍂🪐 Contribuindo para este projeto
**Por favor, veja os [requisitos desta aplicação](./requirements.md) para se manter atualizado sobre o projeto**

**Considere usar o [GitHub Desktop](https://desktop.github.com) para facilitar sua vida 🐝😽**

Se você deseja contribuir para este projeto, siga estas etapas simples:

### 💻 Clonando o Repositório

1. Faça um fork deste repositório (clique no botão "Fork" no canto superior direito da página).

2. No seu próprio perfil, vá até o fork criado e clique no botão "Code". Copie a URL do repositório.

3. Abra o terminal no seu computador e navegue até a pasta onde você deseja clonar o projeto.

4. Execute o seguinte comando, substituindo `<URL_DO_FORK>` pela URL que você copiou anteriormente:

   ```bash
   git clone <URL_DO_FORK>
   ```
   use este ccomando:
   ```
   git clone https://github.com/planta-feliz/ExpoPortfolio
   ```

### 🛠 Editando o Projeto
1. Faça as alterações que você deseja no projeto usando o seu editor de código favorito.

2. Após fazer as alterações, adicione, commite e envie suas mudanças para o seu repositório fork usando os seguintes comandos:

```bash
git add .
git commit -m "Descrição das alterações"
git push origin main

```


### 💡 Propondo um Pull Request


1. Volte para o seu fork no GitHub e clique na aba "Pull Requests".

2. Clique no botão "New Pull Request".

3. Selecione o repositório original como base e o seu fork como head.

4. Descreva suas mudanças e clique em "Create Pull Request".

5. Aguarde a revisão e aprovação dos mantenedores do projeto.

**✨ Pronto! Você contribuiu com sucesso para este projeto. Obrigado por sua ajuda!**

<hr>

<p align="center">Developed with ♥ by ExpoPortfolio maintainers</p>
