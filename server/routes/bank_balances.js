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
const { Accounting } = require("../repository/model/accoutningsystem");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render('bank_balances', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getbank_balances", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.bank_balance.tablename,
        Accounting.bank_balance.selectColumns
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

router.post("/createbank_balance", (req, res) => {
  try {
    const { bb_bank_account_id, bb_transaction_date, bb_update_date, bb_previous_amount, bb_current_amount } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [bb_bank_account_id, bb_transaction_date, bb_update_date, bb_previous_amount, bb_current_amount],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.bank_balance.tablename,
        Accounting.bank_balance.prefix,
        Accounting.bank_balance.insertColumns
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

router.put("/updatebank_balance", (req, res) => {
  try {
    const { bb_id, bb_bank_account_id, bb_transaction_date, bb_update_date, bb_previous_amount, bb_current_amount } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        bb_bank_account_id,
        bb_transaction_date,
        bb_update_date,
        bb_previous_amount,
        bb_current_amount,
        bb_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.bank_balance.tablename,
        [
        Accounting.bank_balance.selectOptionsColumn.bank_account_id,
        Accounting.bank_balance.selectOptionsColumn.transaction_date,
        Accounting.bank_balance.selectOptionsColumn.update_date,
        Accounting.bank_balance.selectOptionsColumn.previous_amount,
        Accounting.bank_balance.selectOptionsColumn.current_amount,
        ],

        [Accounting.bank_balance.selectOptionsColumn.id],
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
