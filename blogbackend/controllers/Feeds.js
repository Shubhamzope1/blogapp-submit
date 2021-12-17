const Feeds = require('../models/Feeds');

exports.Feeds = (req, res, next) => {
    const {name, message } = req.body;
    Feeds.find()
        .then(response => {

            const Feedback = new Feeds({name: name, message: message });
            Feedback.save().then(response => {
                    res.status(200).json({ message: "Reported Succesfully", Feeds: response })
                })
                .catch(err => {
                    res.status(500).json({ error: err })
                })

        })
        .catch(err => {
            res.status(500).json({ error: err })
        })


}
exports.feedres = (req, res) => {
    Feeds.find().then(
        response => {
            res.status(200).json({ message: "Feeds Fetched Succesfully", Feeds: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}