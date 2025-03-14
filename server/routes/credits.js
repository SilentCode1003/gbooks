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
  res.render('credits', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getcredits", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.master_credit.tablename,
        Accounting.master_credit.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,Accounting.master_credit.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createcredit", (req, res) => {
  try {
    const { type } =
      req.body;
    let status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [type, status ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.master_credit.tablename,
        Accounting.master_credit.prefix,
        Accounting.master_credit.insertColumns
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

router.put("/updatecredit", (req, res) => {
  try {
    const { id, type, status, } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
    
        type,
        status,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.master_credit.tablename,
        [Accounting.master_credit.selectOptionsColumn.type,
        Accounting.master_credit.selectOptionsColumn.status,
        ],

        [Accounting.master_credit.selectOptionsColumn.id],
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

router.get("/activecredits", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectWhereStatement(
        Accounting.master_credit.tablename,
        Accounting.master_credit.selectColumns,
        [Accounting.master_credit.selectOptionsColumn.status],
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