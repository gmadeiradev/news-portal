module.exports = (app) => {
    // form add news route
    app.get("/form-add-news", (req, res) => {
        res.render("admin/form-add-news");
    });
}