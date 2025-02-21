const jwt = require('jsonwebtoken');

const verifyjwt = (req, res, next) => {
    if (!req.session || !req.session.jwt) {
        return res.redirect('/unauthorized');
        
    }
    try {
        const token = req.session.jwt;
        const decoded = jwt.verify(token, "5L Secret Key");
        req.user = {
            mu_id: req.session.user.mu_id,
            mu_username: req.session.user.mu_username,
            mu_fullname: req.session.user.mu_fullname,
            mu_access: req.session.user.mu_access,
            mu_status: req.session.user.mu_status
        };
        next();
    } catch (error) {
        return res.redirect('/login');;
    }
};

module.exports = verifyjwt;
