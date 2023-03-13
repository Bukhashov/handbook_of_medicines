const { check, validationResult } = require('express-validator');

const userModel = require('../models/user');

class Auth {
    singin = async (req, res) => {
    }
    singup = async (req, res) => {
        var errors = validationResult(req).array();
        if(errors){
            console.log(errors)
            
            res.status(400).json({
                "massage" : "bad req"
            })
            return
        }

        const {lastname, firstname, email, password} = req.body;
        

    }
}

module.exports = new Auth