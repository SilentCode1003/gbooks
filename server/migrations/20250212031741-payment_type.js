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
    await queryInterface.createTable('payment_type', {
      pt_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      pt_payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'master_payment',
          key: 'mp_id',
        },
      },
      pt_name: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      pt_status: {
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

    await queryInterface.dropTable('payment_type');
  }
};
