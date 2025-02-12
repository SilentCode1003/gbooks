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
    await queryInterface.createTable('product_price', {
      pp_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      pp_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pp_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      pp_markup_rate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      pp_vat_ex: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      pp_vat_inc: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      pp_status: {
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
