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
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("vendors", { title: "Express", currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getvendors", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.master_vendor.tablename,
        Accounting.master_vendor.selectColumns
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

router.post("/createvendor", (req, res) => {
  try {
    const {
      mv_business_name,
      mv_business_type,
      mv_contact_person,
      mv_email,
      mv_phone,
      mv_mobile,
      mv_business_address,
      mv_tin,
    } = req.body;
    let mv_status = STATUS.ACTIVE;

    console.log(req.body);

    async function ProcessData() {
      let data = [
        [
          mv_business_name,
          mv_business_type,
          mv_contact_person,
          mv_email,
          mv_phone,
          mv_mobile,
          mv_business_address,
          mv_tin,
          mv_status,
        ],
      ];

      console.log(data);

      let insert_sql = InsertStatement(
        Accounting.master_vendor.tablename,
        Accounting.master_vendor.prefix,
        Accounting.master_vendor.insertColumns
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

router.put("/updatevendor", (req, res) => {
  try {
    const {
      mv_id,
      mv_business_name,
      mv_business_type,
      mv_contact_person,
      mv_email,
      mv_phone,
      mv_mobile,
      mv_business_address,
      mv_tin,
      mv_status,
    } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        mv_business_name,
        mv_business_type,
        mv_contact_person,
        mv_email,
        mv_phone,
        mv_mobile,
        mv_business_address,
        mv_tin,
        mv_status,
        mv_id,
      ];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.master_vendor.tablename,
        [
          Accounting.master_vendor.selectOptionsColumn.business_name,
          Accounting.master_vendor.selectOptionsColumn.business_type,
          Accounting.master_vendor.selectOptionsColumn.contact_person,
          Accounting.master_vendor.selectOptionsColumn.email,
          Accounting.master_vendor.selectOptionsColumn.phone,
          Accounting.master_vendor.selectOptionsColumn.mobile,
          Accounting.master_vendor.selectOptionsColumn.business_address,
          Accounting.master_vendor.selectOptionsColumn.tin,
          Accounting.master_vendor.selectOptionsColumn.status,
        ],

        [Accounting.master_vendor.selectOptionsColumn.id]
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

router.get("/activevendors", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectWhereStatement(
        Accounting.master_vendor.tablename,
        Accounting.master_vendor.selectColumns,
        [Accounting.master_vendor.selectOptionsColumn.status],
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
