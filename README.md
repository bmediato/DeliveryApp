# Seja Bem-Vindo(a) ao repositório do projeto Delivery App

Delivery Bebidas é um projeto que simula um aplicativo de delivery para uma distribuidora de bebidas. Ele permite que os usuários façam login, cadastrem-se, realizem pedidos e acompanhem o status dos pedidos. Além disso, a pessoa administradora tem a capacidade de adicionar novos membros da empresa.

## Funcionalidades Principais
- Autenticação de usuários: Os usuários podem fazer login para acessar o aplicativo.
- Cadastro de usuário: Os usuários podem se cadastrar fornecendo informações básicas.
- Realização de pedidos: Os usuários podem adicionar bebidas ao carrinho e fazer pedidos.
- Acompanhamento do status do pedido: Os usuários podem verificar se o pedido está em andamento ou já saiu para entrega.
- Administração de membros: A pessoa administradora pode adicionar novos membros da empresa.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express
- Sequelize (ORM para banco de dados)
- MySQL
- JWT (JSON Web Tokens para autenticação)
- Bootstrap (CSS framework)

## Configuração do Ambiente de Desenvolvimento

1. Clone este repositório: `git clone git@github.com:bmediato/DeliveryApp.git`
2. Navegue até o diretório do projeto: `cd DeliveryApp`
3. Instale as dependências: `npm install`e `npm run dev:prestart`
4. Inicialize o container: `docker-compose up -d`
5. Configure o banco de dados MySQL:
 - Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente relacionadas ao banco de dados.
6. Popule o banco de dados: `npm run db:reset`
7. Inicialize o back-end: `cd back-end` e `npm run dev`
8. Inicialize o fron-end: `cd front-end` e `npm start`

## Contribution

Contributions are welcome! If you want to contribute to the project, follow these steps:

1. Fork this repository
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin my-feature`
5. Submit a pull request

## License

[Include project license, e.g., MIT]

## Developers

- Beatriz Mediato
- Victor Santos
- Jorge Wellington
- Bruno Brito

## Contact

If you have any questions or suggestions about the project, feel free to contact [your email or other contact details].

I hope this helps you write the README for your project! Remember to customize the sections according to the specific needs and details of your beverage delivery app.
