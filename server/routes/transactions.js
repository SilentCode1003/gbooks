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
  SelectAllStatementDesc,
} = require("../repository/helper/customhelper");
const { Transaction } = require("../repository/model/transactions");
const { Select, Insert, Update } = require("../repository/helper/dbconnect");
const { STATUS } = require("../repository/helper/dictionary");
const { EncrypterString } = require("../repository/helper/crytography");
const { DataModeling } = require("../repository/model/datamodeling");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render('transactions', { title: 'Express', currentRoute: req.originalUrl, user: req.session.user.mu_username });
});

module.exports = router;
router.get("/gettransactions", (req, res) => {

  try {
    const { offset, limit } = req.query;
    console.log("OFFSET:", offset);
    async function ProcessData() {

      let select_sql = SelectAllStatementDesc(
        Transaction.transaction.tablename,
        Transaction.transaction.selectColumns,
        Transaction.transaction.selectOptionsColumn.id,

        limit,
        offset
      );

      let result = await Select(select_sql);

      console.log(result);
      res.status(200).json(JsonResponseData(DataModeling(result,Transaction.transaction.prefix)));
    }

    ProcessData();
  } catch (error) {
    res.status(500).json(JsonResposeError(error));
  }
});

router.post("/createtransaction", async (req, res) => {
  try {
    let { bank_account_id, reference_id, type, sub_type, description, payment_type, payment_sub_type, amount } = req.body;
    console.log('PAYMENTS:', payment_type, payment_sub_type);

    if (payment_sub_type === "") {
      payment_sub_type = 0;
    }

    const user = req.session.user.mu_id;
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const status = "Not Paid";

    console.log("Request Body:", req.body);

    let data = [
      [bank_account_id, reference_id, type, sub_type, description, payment_type, payment_sub_type, amount, currentDate, user, user, currentDate, status],
    ];

    console.log("Transaction Data to Insert:", data);

    let insert_sql = InsertStatement(
      Transaction.transaction.tablename,
      Transaction.transaction.prefix,
      Transaction.transaction.insertColumns
    );

    let result = await Insert(insert_sql, data);
    console.log("Insert Result:", result);

    let transaction_id = result[0]?.id;
    if (!transaction_id) {
      throw new Error("Failed to insert transaction, no transaction ID returned.");
    }

    console.log('TRANSACTION ID:', transaction_id);
    let historyData = [[transaction_id, status, user, currentDate]];
    let historyInsertSql = InsertStatement(
      Transaction.transaction_history.tablename,
      Transaction.transaction_history.prefix,
      Transaction.transaction_history.insertColumns
    );

    let historyResult = await Insert(historyInsertSql, historyData);
    console.log("History Insert Result:", historyResult); 
    res.status(200).json({
      message: 'Transaction tuition inserted successfully',
      transaction_id: transaction_id,
      data: result,
      showModal: false,
      showingId: transaction_id
    });

  } catch (error) {
    console.error("Transaction Error:", error);
    res.status(500).json(JsonResposeError(error));
  }
});



router.put("/update-batch-transaction", (req, res) => {
  try {
    const { data } = req.body;
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const user = req.session.user.mu_id;
    console.log(" DATA:", data);

    
    async function UpdateData() {
      for(var d in data){
        const { id, status } = data[d];
        
        let data_transactions = [
          user, currentDate, status, id
       ];
 
 
       let update_sql = UpdateStatement(
         Transaction.transaction.tablename,
         [
         Transaction.transaction.selectOptionsColumn.process_by,
         Transaction.transaction.selectOptionsColumn.process_date,
         Transaction.transaction.selectOptionsColumn.status,
         ],
 
         [Transaction.transaction.selectOptionsColumn.id],
       );
 
       await Update(update_sql, data_transactions);
      
       
       let historyData = [[id, status, user, currentDate]];
       let historyInsertSql = InsertStatement(
         Transaction.transaction_history.tablename,
         Transaction.transaction_history.prefix,
         Transaction.transaction_history.insertColumns
       );
   
       let historyResult = await Insert(historyInsertSql, historyData);
      
      }
      res.status(200).json(JsonResponseSuccess());
    }

    UpdateData();
  } catch (error) {
    console.log(error);
    res.status(500).json(JsonResposeError(error));
  }
});

router.put("/updatetransaction", (req, res) => {
  try {
    const { id, status } = req.body;
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const user = req.session.user.mu_id;

    
    async function UpdateData() {

        let data_transactions = [
          user, currentDate, status, id
       ];
 
 
       let update_sql = UpdateStatement(
         Transaction.transaction.tablename,
         [
         Transaction.transaction.selectOptionsColumn.process_by,
         Transaction.transaction.selectOptionsColumn.process_date,
         Transaction.transaction.selectOptionsColumn.status,
         ],
 
         [Transaction.transaction.selectOptionsColumn.id],
       );
 
       await Update(update_sql, data_transactions);
      
       
       let historyData = [[id, status, user, currentDate]];
       let historyInsertSql = InsertStatement(
         Transaction.transaction_history.tablename,
         Transaction.transaction_history.prefix,
         Transaction.transaction_history.insertColumns
       );

       let historyResult = await Insert(historyInsertSql, historyData);
       res.status(200).json(JsonResponseSuccess());
      }

    

    UpdateData();
  } catch (error) {
    console.log(error);
    res.status(500).json(JsonResposeError(error));
  }
});
