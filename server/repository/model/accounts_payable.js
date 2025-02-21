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
          "poh_id",
          "poh_sequence",
          "poh_vendor_id",
          "poh_order_date",
          "poh_delivery_date",
          "poh_total_cost",
          "poh_status",
        ],
        selectOptionsColumn: {
          id: "poh_id",
          sequence: "poh_sequence",
          vendor_id: "poh_vendor_id",
          order_date: "poh_order_date",
          delivery_date: "poh_delivery_date",
          total_cost: "poh_total_cost",
          status: "poh_status",
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