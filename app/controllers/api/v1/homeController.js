module.exports = new class Ping{
    ping(req, res) {
        res.json({
            pong : true,
        });
    }
};