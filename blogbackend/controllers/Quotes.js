const Quotes = require('../models/Quotes')


exports.Quotes = (req, res) => {
    Quotes.find().then(
        response => {
            res.status(200).json({ message: "mealtypes Fetched Succesfully", Quotes: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
};
