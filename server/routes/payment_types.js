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
  SelectWhereStatement,
} = require("../repository/helper/customhelper");
const { Accounting } = require("../repository/model/accoutningsystem");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
const { DataModeling } = require("../repository/model/datamodeling");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render('payment_types', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getpayment_types", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.payment_type.tablename,
        Accounting.payment_type.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,Accounting.payment_type.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createpayment_type", (req, res) => {
  try {
    const { payment_id, name } =
      req.body;
    let status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [payment_id, name, status ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.payment_type.tablename,
        Accounting.payment_type.prefix,
        Accounting.payment_type.insertColumns
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

router.put("/updatepayment_type", (req, res) => {
  try {
    const { id, payment_id, name, status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        payment_id,
        name,
        status,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.payment_type.tablename,
        [Accounting.payment_type.selectOptionsColumn.payment_id, 
        Accounting.payment_type.selectOptionsColumn.name,
        Accounting.payment_type.selectOptionsColumn.status,
        ],

        [Accounting.payment_type.selectOptionsColumn.id],
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


router.get("/activepayment_types", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectWhereStatement(
        Accounting.payment_type.tablename,
        Accounting.payment_type.selectColumns,
        [Accounting.payment_type.selectOptionsColumn.status],
        [STATUS.ACTIVE]
      );
  
      let result = await Select(select_sql);
  
      res.status(200).json(JsonResponseData(result));
    }

    ProcessData();
  } catch (error) {
    console.log(error);
    res.status(500).json(JsonResposeError(error));
  }
});