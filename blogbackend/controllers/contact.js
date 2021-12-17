const contact = require('../models/Feeds');
//req is an object containing information about the HTTP request that raised the event. In response to req,
// you use res to send back the desired HTTP response.
exports.contact = (req, res, next) => {
    const { email, name, message } = req.body;
    contact.find()
        .then(response => {

            const contactus = new Feeds({ email: email, name: name, message: message });
            contactus.save().then(response => {
                    res.status(200).json({ message: "Reported Succesfully", contact: response })
                })
                .catch(err => {
                    res.status(500).json({ error: err })
                })

        })
        .catch(err => {
            res.status(500).json({ error: err })
        })


}