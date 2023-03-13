const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');
const auth = require('../controllers/auth');

router.post('auth/singin', )
router.post('auth/singup', [
    check('lastname').not().isEmpty().withMessage("lastname is required"),
    check('firstname').not().isEmpty().withMessage("firstname is required"),
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 1 })
], auth.singup)


// https://www.positronx.io/express-validator-tutorial-with-input-validation-examples/
module.exports = router;