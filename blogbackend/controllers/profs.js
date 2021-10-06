const profs = require('../models/profs');

exports.profs = (req, res) => {
    profs.find().then(
        response => {
            res.status(200).json({ message: "profs Fetched Succesfully", profs: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}