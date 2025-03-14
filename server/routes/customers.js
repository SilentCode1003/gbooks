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
  res.render('customers', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getcustomers", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.master_customer.tablename,
        Accounting.master_customer.selectColumns
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,Accounting.master_customer.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createcustomer", (req, res) => {
  try {
    const { business_name, business_type, customer_name, email, phone, mobile, address, tin } =
      req.body;
    let status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [business_name, business_type, customer_name, email, phone, mobile, address, tin, status ],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.master_customer.tablename,
        Accounting.master_customer.prefix,
        Accounting.master_customer.insertColumns
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

router.put("/updatecustomer", (req, res) => {
  try {
    const { id, business_name, business_type, customer_name, email, phone, mobile, address, tin, status, } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        business_name,
        business_type,
        customer_name,
        email,
        phone,
        mobile,
        address,
        tin,
        status,
        id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.master_customer.tablename,
        [Accounting.master_customer.selectOptionsColumn.business_name,
        Accounting.master_customer.selectOptionsColumn.business_type,
        Accounting.master_customer.selectOptionsColumn.customer_name,
        Accounting.master_customer.selectOptionsColumn.email,
        Accounting.master_customer.selectOptionsColumn.phone,
        Accounting.master_customer.selectOptionsColumn.mobile,
        Accounting.master_customer.selectOptionsColumn.address,
        Accounting.master_customer.selectOptionsColumn.tin,
        Accounting.master_customer.selectOptionsColumn.status,
        ],

        [Accounting.master_customer.selectOptionsColumn.id],
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

router.get("/activecustomers", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectWhereStatement(
        Accounting.master_customer.tablename,
        Accounting.master_customer.selectColumns,
        [Accounting.master_customer.selectOptionsColumn.status],
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