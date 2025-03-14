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
const { AccountsPayable } = require("../repository/model/accounts_payable");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
const { DataModeling } = require("../repository/model/datamodeling");
var router = express.Router();

/* GET purchase_order_activity listing. */
router.get("/", function (req, res, next) {
  res.render('purchase_order_activity', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getpurchase_order_activity", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        AccountsPayable.purchase_order_activity.tablename,
        AccountsPayable.purchase_order_activity.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,AccountsPayable.purchase_order_activity.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createpurchase_order_activity", (req, res) => {
  try {
    const { purchase_order_id, type, remarks, user, date } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [purchase_order_id, type, remarks, user, date],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        AccountsPayable.purchase_order_activity.tablename,
        AccountsPayable.purchase_order_activity.prefix,
        AccountsPayable.purchase_order_activity.insertColumns
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

router.put("/updatepurchase_order_activity", (req, res) => {
  try {
    const { id, purchase_order_id, type, remarks, user, date } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        purchase_order_id,
        type,
        remarks,
        user,
        date,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        AccountsPayable.purchase_order_activity.tablename,
        [AccountsPayable.purchase_order_activity.selectOptionsColumn.purchase_order_id,
        AccountsPayable.purchase_order_activity.selectOptionsColumn.type,
        AccountsPayable.purchase_order_activity.selectOptionsColumn.remarks,
        AccountsPayable.purchase_order_activity.selectOptionsColumn.user,
        AccountsPayable.purchase_order_activity.selectOptionsColumn.date,
        ],

        [AccountsPayable.purchase_order_activity.selectOptionsColumn.id],
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