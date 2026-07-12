function validate(req, res, next) {

    const { title, content, author, category } = req.body;

    if (!title || !content || !author || !category) {

        return res.status(400).json({
            message: "All fields are required"
        });

    }

    next();

}

module.exports = validate;