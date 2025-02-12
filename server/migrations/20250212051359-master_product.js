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
    await queryInterface.createTable('master_product', {
      mp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mp_vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_vendor',
          key: 'mv_id',
        },
      },
      mp_upc: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mp_code: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      mp_description: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mp_category: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mp_subcategory: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mp_status: {
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

    await queryInterface.dropTable('master_product');
  }
};
