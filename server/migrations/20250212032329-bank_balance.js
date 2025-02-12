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
    await queryInterface.createTable('bank_balance', {
      bb_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      bb_bank_account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bb_transaction_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      bb_update_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      bb_previous_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      bb_current_amount: {
        type: Sequelize.DECIMAL(10, 2),
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
