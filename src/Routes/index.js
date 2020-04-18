const express = require('express')
const templateRouter = express.Router()
const Data = require('../Models/Data')
const TemplateController = require('../Controllers')

templateRouter.get('/get-all-datas', TemplateController.get_all_datas)

templateRouter.get('/get_single_data/:dataId', TemplateController.get_single_data)

// templateRouter.post('/create_a_data', TemplateController.create_a_data)

// templateRouter.delete('/delete_a_data/:dataId', TemplateController.delete_a_data)

// templateRouter.patch('/update_a_data/:dataId', TemplateController.update_a_data)

module.exports = templateRouter

