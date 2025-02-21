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
        references : {
          model: 'master_product',
          key: 'mp_id',
        },
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
      ph_date: {
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

    await queryInterface.dropTable('price_history');
  }
};
