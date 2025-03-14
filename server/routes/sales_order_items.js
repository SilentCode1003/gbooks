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

/* GET sales_order_items listing. */
router.get("/", function (req, res, next) {
  res.render('sales_order_items', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getsales_order_items", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        AccountsReceivable.sales_order_item.tablename,
        AccountsReceivable.sales_order_item.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,AccountsReceivable.sales_order_item.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createsales_order_item", (req, res) => {
  try {
    const { sales_order_id, product_id, product_cost, quantity, unit } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [sales_order_id, product_id, product_cost, quantity, unit],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        AccountsReceivable.sales_order_item.tablename,
        AccountsReceivable.sales_order_item.prefix,
        AccountsReceivable.sales_order_item.insertColumns
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

router.put("/updatesales_order_item", (req, res) => {
  try {
    const { id, sales_order_id, product_id, product_cost, quantity, unit } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        sales_order_id,
        product_id,
        product_cost,
        quantity,
        unit,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        AccountsReceivable.sales_order_item.tablename,
        [AccountsReceivable.sales_order_item.selectOptionsColumn.sales_order_id,
        AccountsReceivable.sales_order_item.selectOptionsColumn.product_id,
        AccountsReceivable.sales_order_item.selectOptionsColumn.product_cost,
        AccountsReceivable.sales_order_item.selectOptionsColumn.quantity,
        AccountsReceivable.sales_order_item.selectOptionsColumn.unit,
        ],

        [AccountsReceivable.sales_order_item.selectOptionsColumn.id],
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