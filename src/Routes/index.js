const express = require('express')
const templateRouter = express.Router()
const Data = require('../Models/Data')
const TemplateController = require('../Controllers')

templateRouter.get('/get-datas', TemplateController.get_all_datas)

templateRouter.get('/get_single_data/:dataId', TemplateController.get_single_data)

module.exports = templateRouter

