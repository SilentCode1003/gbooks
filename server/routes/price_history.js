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
const { Inventory } = require("../repository/model/inventory");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
const { DataModeling } = require("../repository/model/datamodeling");
var router = express.Router();

/* GET price_history listing. */
router.get("/", function (req, res, next) {
  res.render('price_history', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getprice_history", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Inventory.price_history.tablename,
        Inventory.price_history.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,Inventory.price_history.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createprice_history", (req, res) => {
  try {
    const { product_id, cost, markup_rate, vat_ex, vat_inc, date  } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [product_id, cost, markup_rate, vat_ex,vat_inc, date],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Inventory.price_history.tablename,
        Inventory.price_history.prefix,
        Inventory.price_history.insertColumns
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

router.put("/updateprice_history", (req, res) => {
  try {
    const { id, product_id, cost, markup_rate, vat_ex, vat_inc, date } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        product_id,
        cost,
        markup_rate,
        vat_ex,
        vat_inc,
        date,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Inventory.price_history.tablename,
        [Inventory.price_history.selectOptionsColumn.product_id,
        Inventory.price_history.selectOptionsColumn.cost,
        Inventory.price_history.selectOptionsColumn.markup_rate,
        Inventory.price_history.selectOptionsColumn.vat_ex,
        Inventory.price_history.selectOptionsColumn.vat_inc,
        Inventory.price_history.selectOptionsColumn.date,
        ],

        [Inventory.price_history.selectOptionsColumn.id],
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