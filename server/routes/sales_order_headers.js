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
var router = express.Router();

/* GET sales_order_headers listing. */
router.get("/", function (req, res, next) {
  res.render('sales_order_headers', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getsales_order_headers", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        AccountsReceivable.sales_order_header.tablename,
        AccountsReceivable.sales_order_header.selectColumns
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

router.post("/createsales_order_header", (req, res) => {
  try {
    const { soh_sequence, soh_customer_id, soh_order_date, soh_delivery_date, soh_total_cost, soh_status } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [soh_sequence, soh_customer_id, soh_order_date, soh_delivery_date, soh_total_cost, soh_status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        AccountsReceivable.sales_order_header.tablename,
        AccountsReceivable.sales_order_header.prefix,
        AccountsReceivable.sales_order_header.insertColumns
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

router.put("/updatesales_order_header", (req, res) => {
  try {
    const { soh_id, soh_sequence, soh_customer_id, soh_order_date, soh_delivery_date, soh_total_cost, soh_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        soh_sequence,
        soh_customer_id,
        soh_order_date,
        soh_delivery_date,
        soh_total_cost,
        soh_status,
        soh_id];

      console.log(data);

      let update_sql = UpdateStatement(
        AccountsReceivable.sales_order_header.tablename,
        [AccountsReceivable.sales_order_header.selectOptionsColumn.sequence,
        AccountsReceivable.sales_order_header.selectOptionsColumn.customer_id,
        AccountsReceivable.sales_order_header.selectOptionsColumn.order_date,
        AccountsReceivable.sales_order_header.selectOptionsColumn.delivery_date,
        AccountsReceivable.sales_order_header.selectOptionsColumn.total_cost,
        AccountsReceivable.sales_order_header.selectOptionsColumn.status,
        ],

        [AccountsReceivable.sales_order_header.selectOptionsColumn.id],
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