const mongoose = require('mongoose')
const Data = require('../Models/Data')

exports.get_all_datas = (req, res) => {
  Data.find((err, docs) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: 'An error has occurred whilst getting the Datas.', msgError: true, err },
      })
      return
    }
    res.status(200).json({ data: docs })
  })
}

exports.get_single_data = (req, res) => {
  Data.findById(req.params.dataId)
    .then((doc, err) => {
      console.log(doc)
      if (err) {
        res.status(500).json({
          message: { msgBody: 'An error has occurred whilst getting a single Data.', msgError: true, err },
        })
        return
      }
      res.status(200).json({ data: doc })
    })
}