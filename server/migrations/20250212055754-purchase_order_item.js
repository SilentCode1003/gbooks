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
        references: {
          model: 'purchase_order_header',
          key: 'poh_id',
        },
      },
      po_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_product',
          key: 'mp_id',
        },
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

    await queryInterface.dropTable('purchase_order_item');
  }
};
