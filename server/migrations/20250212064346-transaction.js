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
    await queryInterface.createTable('transaction', {
      t_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      t_bank_account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_bank_account',
          key: 'mba_id',
        },
      },
      t_reference_id: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      t_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      t_sub_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      t_description: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      t_payment_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      t_payment_sub_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      t_amount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      t_transaction_date: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      t_transact_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      t_process_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      t_process_date: {
        type: Sequelize.STRING(120),
        allowNull: true,
      },
      t_status: {
        type: Sequelize.ENUM('NOT PAID','PARTIALLY PAID','PAID'),
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

    await queryInterface.dropTable('transaction');
  }
};
