/*
npx sequelize-cli migration:generate --name transaction
npx sequelize-cli migration:generate --name transaction_history
*/
const Transaction ={
    transaction: {
      tablename: "transaction",
      prefix: "t_",
      insertColumns: [
        "bank_account_id",
        "reference_id",
        "type",
        "sub_type",
        "description",
        "payment_type",
        "payment_sub_type",
        "amount",
        "transaction_date",
        "transact_by",
        "process_by",
        "process_date",
        "status",
      ],
      selectColumns: [
        "t_id",
        "t_bank_account_id",
        "t_reference_id",
        "t_type",
        "t_sub_type",
        "t_description",
        "t_payment_type",
        "t_payment_sub_type",
        "t_amount",
        "t_transaction_date",
        "t_transact_by",
        "t_process_by",
        "t_process_date",
        "t_status",
      ],
      selectOptionsColumn: {
        id: "t_id",
        bank_account_id: "t_bank_account_id",
        reference_id: "t_reference_id",
        type: "t_type",
        sub_type: "t_sub_type",
        description: "t_description",
        payment_type: "t_payment_type",
        payment_sub_type: "t_payment_sub_type",
        amount: "t_amount",
        transaction_date: "t_transaction_date",
        transact_by: "t_transact_by",
        process_by: "t_process_by",
        process_date: "t_process_date",
        status: "t_status",
      },
    },
    transaction_history: {
        tablename: "transaction_history",
        prefix: "th_",
        insertColumns: [
            "transaction_id",
            "status",
            "process_by",
            "process_date",
        ],
        selectColumns: [
            "th_id",
            "th_transaction_id",
            "th_status",
            "th_process_by",
            "th_process_date",
        ],
        selectOptionsColumn: {
            id: "th_id",
            transaction_id: "th_transaction_id",
            status: "th_status",
            process_by: "th_process_by",
            process_date: "th_process_date",
        }
    }
}
    
exports.Transaction = Transaction;
