var express = require("express");
const {
  JsonResposeError,
  JsonResponseData,
  JsonResponseSuccess,
} = require("../repository/helper/enums");
const {
  SelectAllStatement,
  InsertStatement,
  UpdateStatement,
} = require("../repository/helper/customhelper");
const { Transaction } = require("../repository/model/transactions");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render('transactions', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/gettransactions", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Transaction.transaction.tablename,
        Transaction.transaction.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(result));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createtransaction", (req, res) => {
  try {
    const { t_bank_account_id, t_reference_id, t_type, t_sub_type, t_description, t_payment_type, t_payment_sub_type, t_amount, t_transaction_date, t_transact_by, t_process_by, t_process_date } =
      req.body;
      let t_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [t_bank_account_id, t_reference_id, t_type, t_sub_type, t_description, t_payment_type, t_payment_sub_type, t_amount, t_transaction_date, t_transact_by, t_process_by, t_process_date, t_status ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Transaction.transaction.tablename,
        Transaction.transaction.prefix,
        Transaction.transaction.insertColumns
      );

      Insert(insert_sql, data);
      res.status(200).json(JsonResponseSuccess());
    }

    ProcessData();
  } catch (error) {
    console.log(error);

    res.status(500).json(JsonResposeError(error));
  }
});

router.put("/updatetransaction", (req, res) => {
  try {
    const { t_id, t_bank_account_id, t_reference_id, t_type, t_sub_type, t_description, t_payment_type, t_payment_sub_type, t_amount, t_transaction_date, t_transact_by, t_process_by, t_process_date, t_status, } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
    
        t_bank_account_id, t_reference_id, t_type, t_sub_type, t_description, t_payment_type, t_payment_sub_type, t_amount, t_transaction_date, t_transact_by, t_process_by, t_process_date, t_status, t_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Transaction.transaction.tablename,
        [Transaction.transaction.selectOptionsColumn.bank_account_id,
        Transaction.transaction.selectOptionsColumn.reference_id,
        Transaction.transaction.selectOptionsColumn.type,
        Transaction.transaction.selectOptionsColumn.sub_type,
        Transaction.transaction.selectOptionsColumn.description,
        Transaction.transaction.selectOptionsColumn.payment_type,
        Transaction.transaction.selectOptionsColumn.payment_sub_type,
        Transaction.transaction.selectOptionsColumn.amount,
        Transaction.transaction.selectOptionsColumn.transaction_date,
        Transaction.transaction.selectOptionsColumn.transact_by,
        Transaction.transaction.selectOptionsColumn.process_by,
        Transaction.transaction.selectOptionsColumn.process_date,
        Transaction.transaction.selectOptionsColumn.status,
        ],

        [Transaction.transaction.selectOptionsColumn.id],
      );

      await Update(update_sql, data);
      res.status(200).json(JsonResponseSuccess());
    }

    UpdateData();
  } catch (error) {
    console.log(error);
    res.status(500).json(JsonResposeError(error));
  }
});
