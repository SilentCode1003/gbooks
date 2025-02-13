var express = require("express");
const {
  JsonResposeError,
  JsonResponseData,
  JsonResponseSuccess,
} = require("../repository/helper/enums");
const {
  SelectAllStatement,
  InsertStatement,
} = require("../repository/helper/customhelper");
const { Accounting } = require("../repository/model/accoutningsystem");
const { Select, Insert } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
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
    const { employee_id, fullname, position, username, password, access } =
      req.body;
    let status = STATUS.ACTIVE;

    console.log(req.body);
    

    async function ProcessData() {
      let data = [
        [employee_id, fullname, position, username, password, access, status],
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
