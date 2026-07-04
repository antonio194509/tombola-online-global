// Admin API endpoints
module.exports = function(app) {
    app.post("/admin/login", (req, res) => {
        res.json({ success: false });
    });
};
