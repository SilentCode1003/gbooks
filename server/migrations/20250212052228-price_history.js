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
    await queryInterface.createTable('price_history', {
      ph_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      ph_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ph_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ph_markup_rate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ph_vat_ex: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ph_vat_inc: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ph_status: {
        type: Sequelize.ENUM('ACTIVE', 'INACTIVE'),
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
