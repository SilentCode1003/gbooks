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
    await queryInterface.createTable('purchase_order_item', {
      poi_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      poi_purchase_order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      po_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      poi_product_cost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      poi_quantity: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      poi_unit: {
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
