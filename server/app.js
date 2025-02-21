var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const swaggerDocs = require("./repository/documentation/swagger");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var vendorsRouter = require("./routes/vendors");
var customersRouter = require("./routes/customers");
var creditsRouter = require("./routes/credits");
var debitsRouter = require("./routes/debits");
var departmentsRouter = require("./routes/departments");
var bank_accountsRouter = require("./routes/bank_accounts");
var bank_balancesRouter = require("./routes/bank_balances");
var paymentsRouter = require("./routes/payments");
var payment_typesRouter = require("./routes/payment_types");
var productsRouter = require("./routes/products");
var product_inventoryRouter = require("./routes/product_inventory");
var inventory_historyRouter = require("./routes/inventory_history");
var branchRouter = require("./routes/branch");
var product_pricesRouter = require("./routes/product_prices");
var price_historyRouter = require("./routes/price_history");
var transactionsRouter = require("./routes/transactions");
var transaction_historyRouter = require("./routes/transaction_history");
var purchase_order_headersRouter = require("./routes/purchase_order_headers");
var purchase_order_itemsRouter = require("./routes/purchase_order_items");
var purchase_order_activityRouter = require("./routes/purchase_order_activity");
var sales_order_headersRouter = require("./routes/sales_order_headers");
var sales_order_itemsRouter = require("./routes/sales_order_items");
var sales_order_activityRouter = require("./routes/sales_order_activity");

var loginRouter = require("./routes/login");

const verifyjwt  = require('./repository/middleware/authentication');

const { SetMongo } = require("./repository/middleware/mongodb");

var app = express();

SetMongo(app);

// view engine setup
app.set("views", path.join(__dirname, "views/Layouts"));
app.set("view engine", "ejs");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 500000 })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use("/login", loginRouter);
//app.use(verifyjwt);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/vendors", vendorsRouter);
app.use("/customers", customersRouter);
app.use("/credits", creditsRouter);
app.use("/debits", debitsRouter);
app.use("/departments", departmentsRouter);
app.use("/bank_accounts", bank_accountsRouter);
app.use("/bank_balances", bank_balancesRouter);
app.use("/payments", paymentsRouter);
app.use("/payment_types", payment_typesRouter);

app.use("/products", productsRouter);
app.use("/product_inventory", product_inventoryRouter);
app.use("/inventory_history", inventory_historyRouter);
app.use("/branch", branchRouter);
app.use("/product_prices", product_pricesRouter);
app.use("/price_history", price_historyRouter);
app.use("/transactions", transactionsRouter);
app.use("/transaction_history", transaction_historyRouter);
app.use("/purchase_order_headers", purchase_order_headersRouter);
app.use("/purchase_order_items", purchase_order_itemsRouter);
app.use("/purchase_order_activity", purchase_order_activityRouter);
app.use("/sales_order_headers", sales_order_headersRouter);
app.use("/sales_order_items", sales_order_itemsRouter);
app.use("/sales_order_activity", sales_order_activityRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
