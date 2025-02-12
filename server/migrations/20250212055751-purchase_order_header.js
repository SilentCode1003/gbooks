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
    await queryInterface.createTable('purchase_order_header', {
      poh_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      poh_sequence: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      poh_vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_vendor',
          key: 'mv_id',
        },
      },
      poh_order_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      poh_delivery_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      poh_total_cost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      poh_status: {
        type: Sequelize.ENUM(''),
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

    await queryInterface.dropTable('purchase_order_header');
  }
};
