const Digital = require('../models/Digital')

exports.Digital = (req, res) => {
    Digital.find().then(
        response => {
            res.status(200).json({ message: "digital Fetched Succesfully", Digital: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}