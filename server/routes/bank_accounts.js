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
  res.send("respond with a resource");
});

module.exports = router;

router.get("/getbank_accounts", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.master_bank_account.tablename,
        Accounting.master_bank_account.selectColumns
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

router.post("/createbank_account", (req, res) => {
  try {
    const { code, account_name, account_number, bank_type } =
      req.body;
    let status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [code, account_name, account_number, bank_type, status ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.master_bank_account.tablename,
        Accounting.master_bank_account.prefix,
        Accounting.master_bank_account.insertColumns
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

router.put("/updatebank_account", (req, res) => {
  try {
    const { id, code, account_name, account_number, bank_type, status, } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        code,
        account_name,
        account_number,
        bank_type,
        status,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.master_bank_account.tablename,
        [Accounting.master_bank_account.selectOptionsColumn.code,
        Accounting.master_bank_account.selectOptionsColumn.account_name,
        Accounting.master_bank_account.selectOptionsColumn.account_number,
        Accounting.master_bank_account.selectOptionsColumn.bank_type,
        Accounting.master_bank_account.selectOptionsColumn.status,
        ],

        [Accounting.master_bank_account.selectOptionsColumn.id],
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
