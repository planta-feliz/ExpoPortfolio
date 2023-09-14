## Este é um documento para a análise de requisitos, a arquitetura da aplicação deverá atender a estes requisitos.

Sumário:
- [Requisitos funcionais](#requisitos-funcionais)
- [Requisitos não funcionais](#requisitos-não-funcionais)
- [Elementos iniciais](#elementos-iniciais)


# Requisitos funcionais
1. Cadastro de usuário
   - [ ] Os usuários devem ser capazes de se cadastrar na plataforma.
   - [ ] O cadastro deve incluir informações como nome, endereço de e-mail e senha para acesso ao perfil.
2. Login de usuário
   - [ ] Os usuários registrados devem poder fazer login em suas contas com segurança.
3. Perfil de usuário
   - [ ] Cada usuário terá um perfil pessoal.
   - [ ] Os usuários devem poder personalizar seus perfis com informações profissionais (bio), como currículo, habilidades (tags), experiência de trabalho e foto de perfil.
4. Gerenciamento dos projetos
   - [ ] Os usuários devem poder adicionar, editar e excluir projetos em seus perfis
   - [ ] Cada projeto deve incluir informações: título, descrição, imagens (**Pensar na sugestão da sublista**), e principalmente links para o projeto
       - [ ] planejar implmentação de gerador de captura de web view
5. Navegação de Portfólio
   - [ ] Os visitantes da plataforma devem ser capazes de navegar pelos perfis dos usuários e visualizar seus projetos
6. Pesquisa e Filtros
   - [ ] Os visitantes devem poder pesquisar usuários e projetos com base em critérios como nome, habilidades, localização, setor, etc
7. Interação Social
   - [ ] Os usuários devem poder seguir outros usuários para acompanhar suas atualizações
   - [ ] Os usuários devem poder curtir, comentar e compartilhar projetos de outros usuários

# Requisitos não funcionais

1. Segurança
   - [ ] Garantir a segurança dos dados do usuário por meio de práticas adequadas de criptografia e autenticação
   - [ ] Implementar medidas de segurança para proteger contra ameaças como ataques de injeção, CSRF e XSS
2. Privacidade e Conformidade
   - [ ] Cumprir regulamentos de privacidade, como a LGPD, e fornecer opções de privacidade para os usuários controlarem suas informações pessoais.
3. Usabilidade
    - [ ] Projetar uma interface de usuário intuitiva e amigável para facilitar a navegação e a utilização da plataforma.
  

# Elementos iniciais
1. Páginas de Acesso e Perfil:
   - [ ] Página de Registro;
   - [ ] Página de Login;
   - [ ] Página do Perfil do Usuário (cada usuário terá seu próprio perfil).
2. Páginas de Gerenciamento de Projetos
   - [ ] Página de Adição de Projeto;
   - [ ] Página de Edição de Projeto
   - [ ] Página de exibição/visualização de Projeto
3. Páginas de Erro e Mensagens
   - [ ] Página 404

