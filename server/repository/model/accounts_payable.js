/*
npx sequelize-cli migration:generate --name purchase_order_header
npx sequelize-cli migration:generate --name purchase_order_item
npx sequelize-cli migration:generate --name purchase_order_activity
*/
const AccountsPayable = {
    purchase_order_header: {
        tablename: "purchase_order_header",
        prefix: "poh_",
        insertColumns: [
          "sequence",
          "vendor_id",
          "order_date",
          "delivery_date",
          "total_cost",
          "status",
        ],
        selectColumns: [
          "mu_id",
          "mu_sequence",
          "mu_vendor_id",
          "mu_order_date",
          "mu_delivery_date",
          "mu_total_cost",
          "mu_status",
        ],
        selectOptionsColumn: {
          id: "mu_id",
          sequence: "mu_sequence",
          vendor_id: "mu_vendor_id",
          order_date: "mu_order_date",
          delivery_date: "mu_delivery_date",
          total_cost: "mu_total_cost",
          status: "mu_status",
        },
    },
    purchase_order_item: {
        tablename: "purchase_order_item",
        prefix: "poi_",
        insertColumns: [
          "purchase_order_id",
          "product_id",
          "product_cost",
          "quantity",
          "unit",
        ],
        selectColumns: [
          "poi_id",
          "poi_purchase_order_id",
          "poi_product_id",
          "poi_product_cost",
          "poi_quantity",
          "poi_unit",
        ],
        selectOptionsColumn: {
          id: "poi_id",
          purchase_order_id: "poi_purchase_order_id",
          product_id: "poi_product_id",
          product_cost: "poi_product_cost",
          quantity: "poi_quantity",
          unit: "poi_unit",
        },
    },
    purchase_order_activity: {
        tablename: "purchase_order_activity",
        prefix: "poa_",
        insertColumns: [
          "purchase_order_id",
          "type",
          "remarks",
          "user",
          "date",
        ],
        selectColumns: [
          "poa_id",
          "poa_purchase_order_id",
          "poa_type",
          "poa_remarks",
          "poa_user",
          "poa_date",
        ],
        selectOptionsColumn: {
          id: "poa_id",
          purchase_order_id: "poa_purchase_order_id",
          type: "poa_type",
          remarks: "poa_remarks",
          user: "poa_user",
          date: "poa_date",  
        },
    },
}

exports.AccountsPayable = AccountsPayable;