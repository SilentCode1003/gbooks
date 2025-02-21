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
const { Accounting } = require("../repository/model/accoutningsystem");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
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
      res.status(200).json(JsonResponseData(result));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createpayment_type", (req, res) => {
  try {
    const { pt_payment_id, pt_name } =
      req.body;
    let pt_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [pt_payment_id, pt_name, pt_status ],
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
    const { pt_id, pt_payment_id, pt_name, pt_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        pt_payment_id,
        pt_name,
        pt_status,
        pt_id];

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
