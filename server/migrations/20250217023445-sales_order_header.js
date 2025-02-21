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
    await queryInterface.createTable('sales_order_header', {
      soh_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      soh_sequence: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      soh_client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_customer',
          key: 'mc_id',
        },
      },
      soh_order_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      soh_delivery_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      soh_total_cost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      soh_status: {
        type: Sequelize.ENUM('PENDING', 'COMPLETED', 'CANCELLED'),
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
