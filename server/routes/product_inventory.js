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

/* GET inventory listing. */
router.get("/", function (req, res, next) {
  res.render('product_inventory', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getproduct_inventory", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Inventory.product_inventory.tablename,
        Inventory.product_inventory.selectColumns
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

router.post("/createproduct_inventory", (req, res) => {
  try {
    const { pi_product_id, pi_branch_id, pi_quantity, pi_unit  } =
      req.body;
    let pi_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [pi_product_id, pi_branch_id, pi_quantity, pi_unit, pi_status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Inventory.product_inventory.tablename,
        Inventory.product_inventory.prefix,
        Inventory.product_inventory.insertColumns
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

router.put("/updateproduct_inventory", (req, res) => {
  try {
    const { pi_id, pi_product_id, pi_branch_id, pi_quantity, pi_unit, pi_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        pi_product_id,
        pi_branch_id,
        pi_quantity,
        pi_unit,
        pi_status,
        pi_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Inventory.product_inventory.tablename,
        [Inventory.product_inventory.selectOptionsColumn.product_id,
        Inventory.product_inventory.selectOptionsColumn.branch_id,
        Inventory.product_inventory.selectOptionsColumn.quantity,
        Inventory.product_inventory.selectOptionsColumn.unit,
        Inventory.product_inventory.selectOptionsColumn.status,
        ],

        [Inventory.product_inventory.selectOptionsColumn.id],
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