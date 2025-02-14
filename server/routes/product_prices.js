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
var router = express.Router();

/* GET product_prices listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

router.get("/getproduct_prices", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Inventory.product_price.tablename,
        Inventory.product_price.selectColumns
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

router.post("/createproduct_price", (req, res) => {
  try {
    const { product_id, cost, markup_rate, vat_ex, vat_inc  } =
      req.body;
    let status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [product_id, cost, markup_rate, vat_ex,vat_inc, status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Inventory.product_price.tablename,
        Inventory.product_price.prefix,
        Inventory.product_price.insertColumns
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

router.put("/updateproduct_price", (req, res) => {
  try {
    const { id, product_id, cost, markup_rate, vat_ex, vat_inc, status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        product_id,
        cost,
        markup_rate,
        vat_ex,
        vat_inc,
        status,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Inventory.product_price.tablename,
        [Inventory.product_price.selectOptionsColumn.product_id,
        Inventory.product_price.selectOptionsColumn.cost,
        Inventory.product_price.selectOptionsColumn.markup_rate,
        Inventory.product_price.selectOptionsColumn.vat_ex,
        Inventory.product_price.selectOptionsColumn.vat_inc,
        Inventory.product_price.selectOptionsColumn.status,
        ],

        [Inventory.product_price.selectOptionsColumn.id],
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