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

/* GET branch listing. */
router.get("/", function (req, res, next) {
  res.render('branch', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getbranch", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Inventory.master_branch.tablename,
        Inventory.master_branch.selectColumns
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

router.post("/createbranch", (req, res) => {
  try {
    const { mb_code, mb_description, mb_email, mb_phone, mb_mobile, mb_address, mb_manager } =
      req.body;
    let mb_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [mb_code, mb_description, mb_email, mb_phone,mb_mobile, mb_address, mb_manager, mb_status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Inventory.master_branch.tablename,
        Inventory.master_branch.prefix,
        Inventory.master_branch.insertColumns
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

router.put("/updatebranch", (req, res) => {
  try {
    const { mb_id, mb_code, mb_description, mb_email, mb_phone, mb_mobile, mb_address, mb_manager, mb_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        mb_code,
        mb_description,
        mb_email,
        mb_phone,
        mb_mobile,
        mb_address,
        mb_manager,
        mb_status,
        mb_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Inventory.master_branch.tablename,
        [Inventory.master_branch.selectOptionsColumn.code,
        Inventory.master_branch.selectOptionsColumn.description,
        Inventory.master_branch.selectOptionsColumn.email,
        Inventory.master_branch.selectOptionsColumn.phone,
        Inventory.master_branch.selectOptionsColumn.mobile,
        Inventory.master_branch.selectOptionsColumn.address,
        Inventory.master_branch.selectOptionsColumn.manager,
        Inventory.master_branch.selectOptionsColumn.status,
        ],

        [Inventory.master_branch.selectOptionsColumn.id],
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