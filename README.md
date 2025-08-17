# Cadastro de Alunos - SPA Angular

![Angular](https://img.shields.io/badge/Angular-v17-red) ![License](https://img.shields.io/badge/License-MIT-green)

## Descrição do Projeto
Este projeto é uma **aplicação web de cadastro de alunos**, construída com Angular, utilizando **Single Page Application (SPA)** para navegação rápida e **LocalStorage** para persistência de dados. A aplicação permite **cadastrar, editar, buscar e excluir** alunos de forma simples e intuitiva, com cálculo automático da média das notas.

O sistema possui três telas principais:

- **Home**: exibe uma tabela com os alunos cadastrados, permitindo **buscar, editar e excluir** registros.  
- **Cadastro**: permite **adicionar ou editar** alunos, incluindo nome, curso, período, notas (nota1 e nota2) e cálculo automático da média.  
- **Error**: página exibida quando uma rota inválida é acessada.

A aplicação oferece navegação intuitiva entre as telas usando o **Router do Angular** e conta com estilização básica utilizando **Bootstrap**.

---

## Funcionalidades

- Adicionar novos alunos com informações completas: nome, curso, período e notas.  
- Editar dados de alunos existentes.  
- Excluir alunos do sistema.  
- Buscar alunos pelo nome.  
- Cálculo automático da média das notas.  
- Navegação SPA entre as páginas **Home** e **Cadastro**.  
- Armazenamento persistente de dados usando **LocalStorage**.

---

## Tecnologias Utilizadas

- [Angular 17](https://angular.io/) - Framework front-end para construção de SPA.  
- [TypeScript](https://www.typescriptlang.org/) - Linguagem utilizada no desenvolvimento do Angular.  
- [Bootstrap](https://getbootstrap.com/) - Biblioteca CSS para estilização e layout responsivo.  
- [RxJS](https://rxjs.dev/) - Para gerenciamento reativo dos dados com `BehaviorSubject`.  
- **LocalStorage** - Para armazenamento persistente no navegador.

---

## Estrutura do Projeto

- `app/` - Contém os componentes principais da aplicação:
  - `Components/`
    - `header/` - Cabeçalho da aplicação com links de navegação.
    - `footer/` - Rodapé da aplicação com o ano atual e nome do sistema.
  - `Pages/`
    - `Home/` - Tela principal com a tabela de alunos.
    - `cadastro/` - Tela de cadastro e edição de alunos.
    - `Error/` - Tela exibida em caso de rotas inválidas ou erros.
  - `app.routes.ts` - Configuração das rotas da aplicação.
  - `app.ts` - Componente principal da aplicação.
  - `app.configs.ts` - Configurações globais da aplicação.
  - `app.css` - Estilos específicos do app.
  - `app.spec.ts` - Testes unitários do componente principal.

- `assets/` - Contém imagens e ícones utilizados no projeto.  
- `index.html` - Arquivo HTML principal.  
- `main.ts` - Ponto de entrada da aplicação Angular.  
- `styles.css` - Estilos globais do projeto.

---

## Instalação

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)  
- [Angular CLI](https://angular.io/cli)  

### Passos para rodar a aplicação
1. Clone o repositório:
```bash
git clone https://github.com/Christianleineker/gestao-alunos.git
```

Entre na pasta do projeto:
```bash
cd gestao-alunos
```

Instale as dependências:
```bash
npm install
```
Execute a aplicação:
```bash
ng serve
```

Acesse no navegador:
```bash
http://localhost:4200
```

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature:
```bash
    git checkout -b minha-feature
```

3. Faça suas alterações e commit:
```bash
    git commit -m "Minha contribuição"
```

4. Envie para o seu fork:
```bash
    git push origin minha-feature
```

5. Abra um Pull Request no repositório principal.

## Autor

Christian Henrique Leineker

- GitHub: [Christianleineker](https://github.com/Christianleineker)  
- LinkedIn: [Christian Henrique Leineker](https://www.linkedin.com/in/christian-leineker/)
