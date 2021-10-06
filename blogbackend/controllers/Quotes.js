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

exports.QuotesbyId = (req, res) => {
    const _id = req.params.QId;
    Quotes.find({ "name": _id }).then(
        response => {
            res.status(200).json({ message: "Quotes Fetched Succesfully", Quotes: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )

};
exports.QuotesbyId = (req, res) => {
    const { QuoteId } = req.params;
    Quotes.find({ Quote_id: QuoteId })
        .then(response => {
            res.status(200).json({ message: "Quotes Fetched Succesfully", Quotes: response })
        }).catch(err => {
            res.status(500).json({ error: err })
        })
}