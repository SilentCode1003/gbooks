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
  res.render('payments', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getpayments", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.master_payment.tablename,
        Accounting.master_payment.selectColumns
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

router.post("/createpayment", (req, res) => {
  try {
    const { mp_code, mp_description } =
      req.body;
    let mp_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [mp_code, mp_description, mp_status ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.master_payment.tablename,
        Accounting.master_payment.prefix,
        Accounting.master_payment.insertColumns
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

router.put("/updatepayment", (req, res) => {
  try {
    const { mp_id, mp_code, mp_description, mp_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
    
        mp_code,
        mp_description,
        mp_status,
        mp_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.master_payment.tablename,
        [Accounting.master_payment.selectOptionsColumn.code, 
        Accounting.master_payment.selectOptionsColumn.description,
        Accounting.master_payment.selectOptionsColumn.status,
        ],

        [Accounting.master_payment.selectOptionsColumn.id],
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
