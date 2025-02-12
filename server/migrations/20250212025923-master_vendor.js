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
    await queryInterface.createTable('master_vendor', {
      mv_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      mv_business_name: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mv_business_type: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mv_contact_person: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mv_email: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mv_phone: {
        type: Sequelize.STRING(13),
        allowNull: true,
      },
      mv_mobile: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      mv_business_address: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      mv_tin: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      mv_status: {
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
