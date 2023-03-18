const {Schema, model} = require('mongoose');

const medicine = new Schema({
    // фото
    image:                   {type: Array},
    // Дәрінін аты :: Нурофен
    name:                   {type: String},
    // Форма выпуска :: Таблетки
    releaseForm:            {type: Array},
    // Упаковка :: 10
    package:                {type: Array},
    // фармакологический эффект
    pharmachologicEffect:   {type: Array},
    // Показания
    indications:            {type: Array},
    // противопоказания
    contraindications:      {type: Array},
    // // Применение при беременности к кормлении грудью
    // forPregnancy:           {type: String},
    // Особые указания
    specialInstructions:    {type: Array},
    // Состав
    compound:               {type: Array},
    // Способ применения и дозы
    dosageAndAdministration: {type: Array},
    // Передозировка
    overdose:                {type: Array},
    // Условия хранения
    storageConditions:       {type: Array},
    // Срок годности
    bestBeforeDate:          {type: Array}
});

module.exports = model('medicines', medicine);