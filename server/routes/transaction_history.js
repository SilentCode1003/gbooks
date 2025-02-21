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
  res.render('transaction_history', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/gettransaction_history", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Transaction.transaction_history.tablename,
        Transaction.transaction_history.selectColumns
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

router.post("/createtransaction_history", (req, res) => {
  try {
    const { th_transaction_id, th_status, th_process_by, th_process_date } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [th_transaction_id, th_status, th_process_by, th_process_date  ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Transaction.transaction_history.tablename,
        Transaction.transaction_history.prefix,
        Transaction.transaction_history.insertColumns
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

router.put("/updatetransaction_history", (req, res) => {
  try {
    const { th_id, th_transaction_id, th_status, th_process_by, th_process_date  } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
    
        th_transaction_id,
        th_status,
        th_process_by,
        th_process_date,
        th_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Transaction.transaction_history.tablename,
        [Transaction.transaction_history.selectOptionsColumn.transaction_id, 
        Transaction.transaction_history.selectOptionsColumn.status,
        Transaction.transaction_history.selectOptionsColumn.process_by,
        Transaction.transaction_history.selectOptionsColumn.process_date,

        ],

        [Transaction.transaction_history.selectOptionsColumn.id],
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
