/*
npx sequelize-cli migration:generate --name master_user
npx sequelize-cli migration:generate --name master_vendor
npx sequelize-cli migration:generate --name master_customer
npx sequelize-cli migration:generate --name master_department
npx sequelize-cli migration:generate --name master_credit
npx sequelize-cli migration:generate --name master_debit
npx sequelize-cli migration:generate --name master_payment
npx sequelize-cli migration:generate --name payment_type
npx sequelize-cli migration:generate --name master_bank_account
npx sequelize-cli migration:generate --name bank_balance
*/
const Accounting = {
  master_user: {
    tablename: "master_user",
    prefix: "mu_",
    insertColumns: [
      "employee_id",
      "fullname",
      "position",
      "username",
      "password",
      "access",
      "status",
    ],
    selectColumns: [
      "mu_id",
      "mu_employee_id",
      "mu_fullname",
      "mu_position",
      "mu_username",
      "mu_password",
      "mu_access",
      "mu_status",
    ],
    selectOptionsColumn: {
      id: "mu_id",
      employee_id: "mu_employee_id",
      fullname: "mu_fullname",
      position: "mu_position",
      username: "mu_username",
      password: "mu_password",
      access: "mu_access",
      status: "mu_status",
    },
  },
  master_vendor: {
    tablename: "master_vendor",
    prefix: "mv_",
    insertColumns: [
      "business_name",
      "business_type",
      "contact_person",
      "email",
      "phone",
      "mobile",
      "business_address",
      "tin",
      "status",

    ],
    selectColumns: [
      "mv_id",
      "mv_business_name",
      "mv_business_type",
      "mv_contact_person",
      "mv_email",
      "mv_phone",
      "mv_mobile",
      "mv_business_address",
      "mv_tin",
      "mv_status",
    ],
    selectOptionsColumn: {
      id: "mv_id",
      business_name: "mv_business_name",
      business_type: "mv_business_type",
      contact_person: "mv_contact_person",
      email: "mv_email",
      phone: "mv_phone",
      mobile: "mv_mobile",
      business_address: "mv_business_address",
      tin: "mv_tin",
      status: "mv_status",
    },
  },
  master_customer: {
    tablename: "master_customer",
    prefix: "mc_",
    insertColumns: [
      "business_name",
      "business_type",
      "customer_name",
      "email",
      "phone",
      "mobile",
      "address",
      "tin",
      "status",
    ],
    selectColumns: [
      "mc_id",
      "mc_business_name",
      "mc_business_type",
      "mc_customer_name",
      "mc_email",
      "mc_phone",
      "mc_mobile",
      "mc_address",
      "mc_tin",
      "mc_status",
    ],
    selectOptionsColumn: {
      id: "mc_id",
      business_name: "mc_business_name",
      business_type: "mc_business_type",
      customer_name: "mc_customer_name",
      email: "mc_email",
      phone: "mc_phone",
      mobile: "mc_mobile",
      address: "mc_address",
      tin: "mc_tin",
      status: "mc_status",
    },
  },
  master_department: {  
    tablename: "master_department",
    prefix: "md_",
    insertColumns: [
      "code",
      "description",
      "status",
    ],
    selectColumns: [
      "md_id",
      "md_code",
      "md_description",
      "md_status",
    ],
    selectOptionsColumn: {
      id: "md_id",
      code: "md_code",
      description: "md_description",
      status: "md_status",
    },
  },
  master_credit: {
    tablename: "master_credit",
    prefix: "mc_",
    insertColumns: [
      "type",
      "status",
    ],
    selectColumns: [
      "mc_id",
      "mc_type",
      "mc_status",
    ],
    selectOptionsColumn: {
      id: "mc_id",
      type: "mc_type",
      status: "mc_status",
    },
  },
  master_debit: {
    tablename: "master_debit",
    prefix: "md_",
    insertColumns: [
      "type",
      "status",
    ],
    selectColumns: [
      "md_id",
      "md_type",
      "md_status",
    ],
    selectOptionsColumn: {
      id: "md_id",
      type: "md_type",
      status: "md_status",
    },
  },
  master_payment: {
    tablename: "master_payment",
    prefix: "mp_",
    insertColumns: [
      "code",
      "description",
      "status",
    ],
    selectColumns: [
      "mp_id",
      "mp_code",
      "mp_description",
      "mp_status",
    ],
    selectOptionsColumn: {
      id: "mp_id",
      code: "mp_code",
      description: "mp_description",
      status: "mp_status",
    },
  },
  payment_type: {
    tablename: "payment_type",
    prefix: "pt_",
    insertColumns: [
      "payment_id",
      "name",
      "status",
    ],
    selectColumns: [
      "pt_id",
      "pt_payment_id",
      "pt_name",
      "pt_status",
    ],
    selectOptionsColumn: {
      id: "pt_id",
      payment_id: "pt_payment_id",
      name: "pt_name",
      status: "pt_status",
    },
  },
  master_bank_account: {
    tablename: "master_bank_account",
    prefix: "mba_",
    insertColumns: [
      "code",
      "account_name",
      "account_number",
      "bank_type",
      "status",
    ],
    selectColumns: [
      "mba_id",
      "mba_code",
      "mba_account_name",
      "mba_account_number",
      "mba_bank_type",
      "mba_status",
    ],
    selectOptionsColumn: {
      id: "mba_id",
      code: "mba_code",
      account_name: "mba_account_name",
      account_number: "mba_account_number",
      bank_type: "mba_bank_type",
      status: "mba_status",
    },
  },
  bank_balance: {
    tablename: "bank_balance",
    prefix: "bb_",
    insertColumns: [
      "bank_account_id",
      "transaction_date",
      "update_date",
      "previous_amount",
      "current_amount",
    ],
    selectColumns: [
      "bb_id",
      "bb_bank_account_id",
      "bb_transaction_date",
      "bb_update_date",
      "bb_previous_amount",
      "bb_current_amount",
    ],
    selectOptionsColumn: {
      id: "bb_id",
      bank_account_id: "bb_bank_account_id",
      transaction_date: "bb_transaction_date",
      update_date: "bb_update_date",
      previous_amount: "bb_previous_amount",
      current_amount: "bb_current_amount",
    },
  },
};

exports.Accounting = Accounting;