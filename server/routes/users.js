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
  res.render('users', { title: 'Express', currentRoute: req.originalUrl });
});

module.exports = router;

router.get("/getusers", (req, res) => {
  try {
    async function ProcessData() {
      let select_sql = SelectAllStatement(
        Accounting.master_user.tablename,
        Accounting.master_user.selectColumns
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

router.post("/createuser", (req, res) => {
  try {
    const { mu_employee_id, mu_fullname, mu_position, mu_username, mu_password, mu_access } =
      req.body;
    let mu_status = STATUS.ACTIVE;

    console.log(req.body);


    async function ProcessData() {
      let data = [
        [mu_employee_id, mu_fullname, mu_position, mu_username, EncrypterString(mu_password), mu_access, mu_status],
      ];

      console.log(data);


      let insert_sql = InsertStatement(
        Accounting.master_user.tablename,
        Accounting.master_user.prefix,
        Accounting.master_user.insertColumns
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

router.put("/updateuser", (req, res) => {
  try {
    const { mu_id, mu_employee_id, mu_fullname, mu_position, mu_username,  mu_access, mu_status } = req.body;

    console.log(req.body);

    async function UpdateData() {
      let data = [
        mu_employee_id,
        mu_fullname,
        mu_position,
        mu_username,
        mu_access,
        mu_status,
        mu_id];

      console.log(data);

      let update_sql = UpdateStatement(
        Accounting.master_user.tablename,
        [Accounting.master_user.selectOptionsColumn.employee_id,
        Accounting.master_user.selectOptionsColumn.fullname,
        Accounting.master_user.selectOptionsColumn.position,
        Accounting.master_user.selectOptionsColumn.username,
        Accounting.master_user.selectOptionsColumn.access,
        Accounting.master_user.selectOptionsColumn.status,
        ],

        [Accounting.master_user.selectOptionsColumn.id],
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
/*
router.delete("/deleteuser", (req, res) => {
  try {
    const { id } = req.body;

    async function DeleteData() {
      let data = [id];

      let delete_sql = DeleteData

      await Update(delete_sql, data);
      res.status(200).json(JsonResponseSuccess());
    }

    DeleteData();
  } catch (error) {
    console.log(error);
    res.status(500).json(JsonResposeError(error));
  }
}
*/