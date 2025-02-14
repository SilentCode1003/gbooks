var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const swaggerDocs = require("./repository/documentation/swagger");
const swaggerUi = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var vendorsRouter = require("./routes/vendors");
var customersRouter = require("./routes/customers");
var creditsRouter = require("./routes/credits");
var debitsRouter = require("./routes/debits");
var departmentsRouter = require("./routes/departments");
var bank_accountsRouter = require("./routes/bank_accounts");

const { SetMongo } = require("./repository/middleware/mongodb");

var app = express();

SetMongo(app);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 500000 })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/vendors", vendorsRouter);
app.use("/customers", customersRouter);
app.use("/credits", creditsRouter);
app.use("/debits", debitsRouter);
app.use("/departments", departmentsRouter);
app.use("/bank_accounts", bank_accountsRouter);

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
