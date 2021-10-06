const QofDay = require('../models/profs');

exports.QofDay = (req, res) => {
    QofDay.find().then(
        response => {
            res.status(200).json({ message: "profs Fetched Succesfully", QofDay: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}