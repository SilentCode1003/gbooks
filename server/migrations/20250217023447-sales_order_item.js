'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('sales_order_item', {
      soi_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      soi_sales_order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales_order_header',
          key: 'soh_id',
        },
      },
      soi_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_product',
          key: 'mp_id',
        },
      },
      soi_product_cost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      soi_quantity: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      soi_unit: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
