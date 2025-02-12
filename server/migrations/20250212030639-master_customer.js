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
    await queryInterface.createTable('master_customer', {
      mc_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      mc_business_name: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mc_business_type: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mc_customer_name: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mc_email: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mc_phone: {
        type: Sequelize.STRING(13),
        allowNull: true,
      },
      mc_mobile: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      mc_address: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      mc_tin: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      mc_status: {
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
