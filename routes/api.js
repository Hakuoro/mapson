var express = require('express');
var router = express.Router();

router.route('/menu/')
    .get(function(req, res) {
        res.json({
            links:
            [{title: "top_menu.login", url: '#login-form', visibility:'block', selected:''},
            {title: "top_menu.dash", url: '#dash', visibility:'none', selected:''},
            {title: "top_menu.courses", url: '#courses', visibility:'none', selected:''},
            {title: "top_menu.exit", url: '#logout', visibility:'none', selected:''}]
        });
    });

module.exports = router;
