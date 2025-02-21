var express = require('express');
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
const { EncrypterString, DecrypterString } = require("../repository/helper/crytography");
const jwt = require('jsonwebtoken');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
        res.render('login', { title: 'Express' });
});

module.exports = router;

router.post('/check-credentials', (req, res) => {
        try {
                const { mu_username, mu_password } = req.body;

                if (!mu_username || !mu_password) {
                        return res.status(400).json({ message: 'Username and password are required' });
                }

                async function ProcessData() {
                        let select_sql = SelectAllStatement(
                                Accounting.master_user.tablename,
                                Accounting.master_user.selectColumns,
                                `mu_username = '${mu_username}'`
                        );

                        let result = await Select(select_sql);

                        if (result.length === 0) {
                                return res.status(401).json({ message: 'Invalid credentials' });
                        }

                        const decryptedPassword = DecrypterString(result[0].mu_password);
                        if (mu_password !== decryptedPassword) {
                                return res.status(401).json({ message: 'Invalid credentials' });
                        }

                        const token = jwt.sign(
                                { userId: result[0].mu_id, username: result[0].mu_username, fullname: result[0].mu_fullname },
                                "sample",
                                { expiresIn: "1h" }
                        );

                        req.session.user = {
                                mu_id: result[0].mu_id,
                                mu_username: result[0].mu_username,
                                mu_fullname: result[0].mu_fullname,
                                mu_access: result[0].mu_access,
                                mu_status: result[0].mu_status
                        };
                        req.session.jwt = token;

                        console.log("Session after login:", req.session);

                        return res.status(200).json({ success: true, message: 'Login successful', token: token });
                }

                ProcessData();
        } catch (error) {
                res.status(500).json(JsonResposeError(error));
        }
});
