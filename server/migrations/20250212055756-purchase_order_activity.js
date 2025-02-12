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
    await queryInterface.createTable('purchase_order_activity',{
      poa_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      poa_purchase_order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      poa_type: {
        type: Sequelize.ENUM('APPROVED','REQUEST','REJECT','CANCEL'),
        allowNull: false,
      },
      poa_remarks: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      poa_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      poa_date: {
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
