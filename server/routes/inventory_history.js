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

/* GET inventory listing. */
router.get("/", function (req, res, next) {
  res.render('inventory_history', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getinventory_history", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Inventory.inventory_history.tablename,
        Inventory.inventory_history.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,Inventory.inventory_history.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createinventory_history", (req, res) => {
  try {
    const { inventory_id, date, transaction_type, quantity, unit  } =
      req.body;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [inventory_id, date, transaction_type, quantity, unit],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Inventory.inventory_history.tablename,
        Inventory.inventory_history.prefix,
        Inventory.inventory_history.insertColumns
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

router.put("/updateinventory_history", (req, res) => {
  try {
    const { id, inventory_id, date, transaction_type, quantity, unit } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        inventory_id,
        date,
        transaction_type,
        quantity,
        unit,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Inventory.inventory_history.tablename,
        [Inventory.inventory_history.selectOptionsColumn.inventory_id,
        Inventory.inventory_history.selectOptionsColumn.date,
        Inventory.inventory_history.selectOptionsColumn.transaction_type,
        Inventory.inventory_history.selectOptionsColumn.quantity,
        Inventory.inventory_history.selectOptionsColumn.unit,
        ],

        [Inventory.inventory_history.selectOptionsColumn.id],
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