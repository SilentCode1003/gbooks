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
    await queryInterface.createTable('master_branch', {
      mb_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      mb_code: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      mb_description: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mb_email: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mb_phone: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      mb_mobile: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      mb_address: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mb_manager: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mb_status: {
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
