/*
npx sequelize-cli migration:generate --name sales_order_header
npx sequelize-cli migration:generate --name sales_order_item
npx sequelize-cli migration:generate --name sales_order_activity
*/
const AccountsReceivable = {
    sales_order_header: {
        tablename: "sales_order_header",
        prefix: "soh_",
        insertColumns: [
          "sequence",
          "customer_id",
          "order_date",
          "delivery_date",
          "total_cost",
          "status",
        ],
        selectColumns: [
          "soh_id",
          "soh_sequence",
          "soh_customer_id",
          "soh_order_date",
          "soh_delivery_date",
          "soh_total_cost",
          "soh_status",
        ],
        selectOptionsColumn: {
          id: "soh_id",
          sequence: "soh_sequence",
          customer_id: "soh_customer_id",
          order_date: "soh_order_date",
          delivery_date: "soh_delivery_date",
          total_cost: "soh_total_cost",
          status: "soh_status",
        },
    },
    sales_order_item: {
        tablename: "sales_order_item",
        prefix: "soi_",
        insertColumns: [
          "sales_order_id",
          "product_id",
          "product_cost",
          "quantity",
          "unit",
        ],
        selectColumns: [
          "soi_id",
          "soi_sales_order_id",
          "soi_product_id",
          "soi_product_cost",
          "soi_quantity",
          "soi_unit",
        ],
        selectOptionsColumn: {
          id: "soi_id",
          sales_order_id: "soi_sales_order_id",
          product_id: "soi_product_id",
          product_cost: "soi_product_cost",
          quantity: "soi_quantity",
          unit: "soi_unit",
        },
    },
    sales_order_activity: {
        tablename: "sales_order_activity",
        prefix: "soa_",
        insertColumns: [
          "sales_order_id",
          "type",
          "remarks",
          "user",
          "date",
        ],
        selectColumns: [
          "soa_id",
          "soa_sales_order_id",
          "soa_type",
          "soa_remarks",
          "soa_user",
          "soa_date",
        ],
        selectOptionsColumn: {
          id: "soa_id",
          sales_order_id: "soa_sales_order_id",
          type: "soa_type",
          remarks: "soa_remarks",
          user: "soa_user",
          date: "soa_date",  
        },
    },
}

exports.AccountsReceivable = AccountsReceivable;