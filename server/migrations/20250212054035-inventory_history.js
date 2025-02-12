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
    await queryInterface.createTable('inventory_history', {
      ih_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      ih_inventory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ih_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      ih_transaction_type: {
        type: Sequelize.ENUM('REPLENISH', 'SOLD', 'DAMAGE', 'RETURN'),
        allowNull: false,
      },
      ih_quantity: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ih_unit: {
        type: Sequelize.STRING(20),
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

    await queryInterface.dropTable('inventory_history');
  }
};
