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
    await queryInterface.createTable('product_inventory', {
      pi_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      pi_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_product',
          key: 'mp_id',
        },
      },
      pi_branch_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pi_quantity: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      pi_unit: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      pi_status: {
        type: Sequelize.ENUM('active', 'inactive'),
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

    await queryInterface.dropTable('product_inventory');
  }
};
