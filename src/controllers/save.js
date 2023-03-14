const saveModel = require('../models/save');
const medicinesModel = require('../models/medicine');

class Save {
    add = async (req, res) => {
        const {uid, medicineId} = req.body;

        const newSave = new saveModel({
            uid: uid,
            medicineId: medicineId
        }).save();

        if(!newSave){
            res.status(500).json({"massage" : "server bad work"});
            return
        }
        
        res.status(201).json({"massage" : "saved"});
    }
    get = async (req, res) => {
        const {uid} = req.body;

        const allSaved = await saveModel.find({uid: uid});

        if(!allSaved) {
            res.status(500).json({"massage" : "server bad work"});
            return
        }

        let data = [];

        allSaved.forEach(async element => {
            let medicine = await medicinesModel.findById(element.medicineId)  
            data.push(medicine)
        });
        
        res.status(200).json(data);
        
    }
    delete = async (req, res) => {
        const {uid, medicineId} = req.body;
        const saveDrop = await saveModel.deleteOne({uid: uid, medicineId: medicineId});

        if(saveDrop) {
            res.status(200).json({massage: "deleted"})
        }else{
            res.status(400).json({massage: "err"})
        }
    }
}

module.exports = new Save;