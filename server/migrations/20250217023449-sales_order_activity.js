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
    await queryInterface.createTable('sales_order_activity', {
      soa_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      soa_sales_order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales_order_header',
          key: 'poh_id',
        },
      },
      soa_type: {
        type: Sequelize.ENUM('APPROVED','REQUEST','REJECT','CANCEL'),
        allowNull: false,
      },
      soa_remarks: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      soa_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      soa_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      }
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
