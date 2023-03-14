const {Schema, model} = require('mongoose');

const medicine = new Schema({
    // фото
    image:                   {type: String},
    // Дәрінін аты :: Нурофен
    name:                   {type: String},
    // Форма выпуска :: Таблетки
    releaseForm:            {type: String},
    // Упаковка :: 10
    package:                {type: String},
    // фармакологический эффект
    pharmachologicEffect:   {type: String},
    // Показания
    indications:            {type: String},
    // противопоказания
    contraindications:      {type: String},
    // // Применение при беременности к кормлении грудью
    // forPregnancy:           {type: String},
    // Особые указания
    specialInstructions:    {type: String},
    // Состав
    compound:               {type: String},
    // Способ применения и дозы
    dosageAndAdministration: {type: String},
    // Передозировка
    overdose:                {type: String},
    // Условия хранения
    storageConditions:       {type: String},
    // Срок годности
    bestBeforeDate:          {type: String}
});

module.exports = model('medicines', medicine);