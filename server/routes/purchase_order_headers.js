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

/* GET purchase_order_headers listing. */
router.get("/", function (req, res, next) {
  res.render('purchase_order_headers', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getpurchase_order_headers", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        AccountsPayable.purchase_order_header.tablename,
        AccountsPayable.purchase_order_header.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,AccountsPayable.purchase_order_header.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createpurchase_order_header", (req, res) => {
  try {
    const { sequence, vendor_id, order_date, delivery_date, total_cost, status } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [sequence, vendor_id, order_date, delivery_date, total_cost, status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        AccountsPayable.purchase_order_header.tablename,
        AccountsPayable.purchase_order_header.prefix,
        AccountsPayable.purchase_order_header.insertColumns
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

router.put("/updatepurchase_order_header", (req, res) => {
  try {
    const { id, sequence, vendor_id, order_date, delivery_date, total_cost, status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        sequence,
        vendor_id,
        order_date,
        delivery_date,
        total_cost,
        status,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        AccountsPayable.purchase_order_header.tablename,
        [AccountsPayable.purchase_order_header.selectOptionsColumn.sequence,
        AccountsPayable.purchase_order_header.selectOptionsColumn.vendor_id,
        AccountsPayable.purchase_order_header.selectOptionsColumn.order_date,
        AccountsPayable.purchase_order_header.selectOptionsColumn.delivery_date,
        AccountsPayable.purchase_order_header.selectOptionsColumn.total_cost,
        AccountsPayable.purchase_order_header.selectOptionsColumn.status,
        ],

        [AccountsPayable.purchase_order_header.selectOptionsColumn.id],
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