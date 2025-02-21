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

/* GET products listing. */
router.get("/", function (req, res, next) {
  res.render('products', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getproducts", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Inventory.master_product.tablename,
        Inventory.master_product.selectColumns
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

router.post("/createproduct", (req, res) => {
  try {
    const { mp_vendor_id, mp_upc, mp_code, mp_description, mp_category, mp_subcategory } =
      req.body;
    let mp_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [mp_vendor_id, mp_upc, mp_code, mp_description,mp_category, mp_subcategory, mp_status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Inventory.master_product.tablename,
        Inventory.master_product.prefix,
        Inventory.master_product.insertColumns
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

router.put("/updateproduct", (req, res) => {
  try {
    const { mp_id, mp_vendor_id, mp_upc, mp_code, mp_description, mp_category, mp_subcategory, mp_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        mp_vendor_id,
        mp_upc,
        mp_code,
        mp_description,
        mp_category,
        mp_subcategory,
        mp_status,
        mp_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Inventory.master_product.tablename,
        [Inventory.master_product.selectOptionsColumn.vendor_id,
        Inventory.master_product.selectOptionsColumn.upc,
        Inventory.master_product.selectOptionsColumn.code,
        Inventory.master_product.selectOptionsColumn.description,
        Inventory.master_product.selectOptionsColumn.category,
        Inventory.master_product.selectOptionsColumn.subcategory,
        Inventory.master_product.selectOptionsColumn.status,
        ],

        [Inventory.master_product.selectOptionsColumn.id],
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