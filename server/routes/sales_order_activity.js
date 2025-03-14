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
const { AccountsReceivable } = require("../repository/model/accounts_receivable");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
const { DataModeling } = require("../repository/model/datamodeling");
var router = express.Router();

/* GET sales_order_activity listing. */
router.get("/", function (req, res, next) {
  res.render('sales_order_activity', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getsales_order_activity", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        AccountsReceivable.sales_order_activity.tablename,
        AccountsReceivable.sales_order_activity.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,AccountsReceivable.sales_order_activity.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createsales_order_activity", (req, res) => {
  try {
    const { sales_order_id, type, remarks, user, date } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [sales_order_id, type, remarks, user, date],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        AccountsReceivable.sales_order_activity.tablename,
        AccountsReceivable.sales_order_activity.prefix,
        AccountsReceivable.sales_order_activity.insertColumns
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

router.put("/updatesales_order_activity", (req, res) => {
  try {
    const { id, sales_order_id, type, remarks, user, date } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        sales_order_id,
        type,
        remarks,
        user,
        date,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        AccountsReceivable.sales_order_activity.tablename,
        [AccountsReceivable.sales_order_activity.selectOptionsColumn.sales_order_id,
        AccountsReceivable.sales_order_activity.selectOptionsColumn.type,
        AccountsReceivable.sales_order_activity.selectOptionsColumn.remarks,
        AccountsReceivable.sales_order_activity.selectOptionsColumn.user,
        AccountsReceivable.sales_order_activity.selectOptionsColumn.date,
        ],

        [AccountsReceivable.sales_order_activity.selectOptionsColumn.id],
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