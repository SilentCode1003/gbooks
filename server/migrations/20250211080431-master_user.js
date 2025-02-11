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

    await queryInterface.createTable("master_user", {
      mu_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mu_employee_id: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      mu_fullname: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      mu_position: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      mu_username: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      mu_password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      mu_access: {
        type: Sequelize.ENUM("admin", "user", "developer"),
        allowNull: false,
      },
      mu_status: {
        type: Sequelize.ENUM("active", "inactive"),
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

    await queryInterface.dropTable("master_user");
  },
};
