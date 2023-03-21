const { validationResult } = require('express-validator');
const medicinesModel = require('../models/medicine');

class Medicines{ 
    getAll = async (req, res) => {
        const medicines = await medicinesModel.find({}, {name: 1, _id: 1, image: 1, pharmachologicEffect: 1})
        if(!medicines) {
            res.status(500).json({"massage" : "server bad work"});
            return;
        }
        res.status(200).json(medicines);
    }
    getById = async (req, res) => {
        const medicineId = req.params.id;

        const medicine = await medicinesModel.findById(medicineId)

        if(!medicine) {
            res.status(400).json({ "massage" : "you sent the wrong id" });
            return;
        }
    
        res.status(200).json(medicine);
    }
    getByIds = async (req, res) => {
        var errors = validationResult(req).array();
        if(errors.length >= 1){ 
            res.status(400).json({
                "massage" : "send all data"
            })
            return
        }
        
        const ides = req.body.ides;
        console.log(ides[0]);
        let medicines = [];
        console.log(typeof(ides));


        for(let i=0; i<ides.length; i++){
            let medicineDbRes = await medicinesModel.findById(ides[i], {name: 1, _id: 1, image: 1, pharmachologicEffect: 1});
            // console.log(medicineDbRes);
            if(medicineDbRes){
                medicines.push(medicineDbRes);
            }
            console.log(medicines);
        }

        
        res.status(200).json(medicines)

        // "64143e758f83acf907281454",
        // "6415b754a6f61c3b3d5ecabf",
    }
    add = async (req, res) => {
        var errors = validationResult(req).array();
        if(errors.length >= 1){ 
            res.status(400).json({
                "massage" : "send all data"
            })
            return
        }
        
        const { image,
                name,
                releaseForm, 
                packages, 
                pharmachologicEffect, 
                indications, 
                contraindications, 
                specialInstructions, 
                compound, 
                dosageAndAdministration, 
                overdose, 
                storageConditions, 
                bestBeforeDate
            } = req.body;
        
        const newMedicines = new medicinesModel({
            image: image,
            name: name,
            releaseForm: releaseForm,
            package: packages,
            pharmachologicEffect: pharmachologicEffect,
            indications: indications,
            contraindications: contraindications,
            specialInstructions: specialInstructions,
            compound: compound,
            dosageAndAdministration: dosageAndAdministration,
            overdose: overdose,
            storageConditions: storageConditions,
            bestBeforeDate: bestBeforeDate
        }).save();

        if(!newMedicines) {
            res.status(500).json({"massage" : "server bad work"})
            return
        }

        res.status(201).json({"massage" : "created"})
    }
    delete = async (req, res) => {

    }
}

module.exports = new Medicines;