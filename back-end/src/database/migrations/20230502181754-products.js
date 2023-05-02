module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 2),
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING(200),
        field: 'url_image',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  },
};