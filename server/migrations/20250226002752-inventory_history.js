'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

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
        references: {
          model: 'product_inventory',
          key: 'pi_id',
        },
      },
      ih_date: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      ih_transaction_type: {
        type: Sequelize.ENUM('replenish', 'sold', 'transfer', 'damage', 'return'),
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
  }
};
