const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');
const passport = require('passport');
const auth = require('../controllers/auth');
const medicines = require('../controllers/medicines');
const save = require('../controllers/save');

// AUTH
router.post('/auth/singin', [
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 1 })
], auth.singin);
router.post('/auth/singup', [
    check('lastname').not().isEmpty().withMessage("lastname is required"),
    check('firstname').not().isEmpty().withMessage("firstname is required"),
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], auth.singup);
router.delete('/auth/user/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    console.log("end point delete user")
    
    res.status(200).json({
        "massage": "this endpoint test version"
    })
})

// medicines
router.get('/medicines', medicines.getAll);
router.get('/medicine/:id', medicines.getById);
router.post('/medicine/byides', [
    check('ides').not().isEmpty().withMessage("ides is required"),
], medicines.getByIds);
router.post('/medicine/add', passport.authenticate('jwt', {session: false}), [
    check('name').not().isEmpty().withMessage("name is required"),
    check('releaseForm').not().isEmpty().withMessage("releaseForm is required"),
    check('packages').not().isEmpty().withMessage("package is required"),
    check('pharmachologicEffect').not().isEmpty().withMessage("pharmachologicEffect is required"),
    check('indications').not().isEmpty().withMessage("indications is required"),
    check('contraindications').not().isEmpty().withMessage("contraindications is required"),
    check('specialInstructions').not().isEmpty().withMessage("specialInstructions is required"),
    check('compound').not().isEmpty().withMessage("compound is required"),
    check('dosageAndAdministration').not().isEmpty().withMessage("dosageAndAdministration is required"),
    check('overdose').not().isEmpty().withMessage("overdose is required"),
    check('storageConditions').not().isEmpty().withMessage("storageConditions is required"),
    check('bestBeforeDate').not().isEmpty().withMessage("bestBeforeDate is required"),
], medicines.add);
router.post('/medicine/delete', passport.authenticate('jwt', {session: false}), medicines.delete);

// save
router.post('/save/add', passport.authenticate('jwt', {session: false}), save.add);
router.post('/save/delete', passport.authenticate('jwt', {session: false}), save.delete);
router.get('/save', passport.authenticate('jwt', {session: false}), save.get);


// https://www.positronx.io/express-validator-tutorial-with-input-validation-examples/
module.exports = router;