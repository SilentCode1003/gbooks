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
    await queryInterface.createTable('master_bank_account', {
      mba_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      mba_code: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      mba_account_name: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mba_account_number: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mba_bank_type: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mba_status: {
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

    await queryInterface.dropTable('master_bank_account');
  }
};
