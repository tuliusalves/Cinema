# Cineplay

## 1. DESENVOLVEDORES

- Desenvolvido por Túlius Alves e Victor Roma

## 2. O QUE É

- O site desenvolvido é o Cineplay, um portal onde os visitantes podem acompanhar os filmes que estão em cartaz, onde é possível deixar uma avaliação e ver as avaliações de outros usuários sobre o filme e os cinemas disponíveis onde está passando o filme.

## 3. ESTRUTURA DE ORGANIZAÇÃO

* Estrutura de navegação utiliza componentes como o "logo", "header" e "listaHeader".

* Nelas os usuários irão navegar pelas páginas "Home", "Filmes”,"Login" e "Cadastrar".

* Na página "home" o usurário verá uma mensagem de "bem-vindo" explicando o que é o "CinePlay".

* Na página "Filmes" o usuário poderá acessar os cards dos filmes correspondentes ao longo da paginação indicada pelos números.

* Ao clicar em um card, haverá uma descrição breve da sinopse do filme juntamente com a os links para as páginas de "Cinemas disponíveis" e "Críticas dos usuários".

* Na página de "cinemas disponíveis", é possível ver quais os cinemas aquele filme está disponível. Cada cinema possuí um botão com um link de redirecionamento para o site do cinema em questão.

* Na página de "críticas dos usuários", existe ao lado da descrição do filme, uma lista de comentários dos usuários cadastrados a respeito do filme em questão.

* Acessando a lista de links no header, existe a página de "cadastrar", nela o usuário pode cadastrar-se no sistema.

* Na página de login, o usuário poderá usar as suas informações para entrar no sistema.

![Organziação das pastas](cinema\src\ImagensReadme\Organização.png)

## 4. BIBLIOTECAS UTILIZADAS

### Styled Components
- Essa biblioteca permite utilizar comandos de CSS diretamente no JavaScript 

![Homepage](cinema\src\ImagensReadme\HomePage.png)

### React Router Dom
- Através dessa biblioteca e possível configurar as rotas de navegação do site 

![Rotas do site](cinema\src\ImagensReadme\RotasDoSite.png)

## 5. HOOKS UTILIZADOS

### UsesStates
- Com ele é possível criar e gerenciar o estado local de um componente funcional 
![Aba 1 de filmes](cinema\src\ImagensReadme\FilmesAba1.png)
![Aba 2 de filmes](cinema\src\ImagensReadme\FilmesAba2.png)

## 6. ESTRUTURA DE NAVEGAÇÃO

As rotas do site: 

- / - Página inicial 
- /filmes - Página de filmes em cartaz
- /filmes/cinemas - Página de cinemas disponíveis
- /filmes/críticas - Página de críticas contendo o depoimento de clientes
- /login - Página de login do usuário
- /cadastro - Página para o usuário realizar seu cadastro

![Rotas do site](cinema\src\ImagensReadme\RotasDoSite.png)

### Diagrama com as rotas do site

![Rotas dos site](cinema\src\ImagensReadme\DiagramaDeRotas.png)

### Barra de navegação desenvolvida para a navegação entre as páginas do site

![Barra de navegação](cinema/src/ImagensReadme/Navbar.png)	
