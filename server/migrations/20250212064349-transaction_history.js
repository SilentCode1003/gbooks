"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("transaction_history", {
      th_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      th_transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "transaction",
          key: "t_id",
        },
      },
      th_status: {
        type: Sequelize.ENUM("NOT PAID", "PARTIALLY PAID", "PAID"),
        allowNull: false,
      },
      th_process_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      th_process_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("transaction_history");
  },
};
