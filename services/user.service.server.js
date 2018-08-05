module.exports = function(app) {

    var userModel = require('../models/user.model.server')

    function login(req, res) {
        var user = req.body;
        userModel.findUserByCredentials(user.username, user.password)
            .then(user => {
                req.session[currentUser] = user;
                res.send(user)
            })
    }

    function setSession(req, res) {
        var name = req.params['name'];
        var value = req.params['value'];
        req.session[name] = value;
        res.send(req.session);
    }

    function getSession(req, res) {
        var name = req.params['name'];
        var value = req.session[name];
        res.send(value);
    }

    function getSessionAll(req, res) {
        res.send(req.session);
    }

    function resetSession(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function currentUser(req, res) {
        res.send(req.session);
    }

/*    userModel.findAllUsers()
        .then(users => console.log(users));*/

    app.get('/api/session/set/:name/:value',
        setSession);

    app.get('/api/session/get/:name',
        getSession);

    app.get('/api/session/get',
        getSessionAll);

    app.get('/api/session/reset',
        resetSession)

    app.post('/api/login',
        login)

    app.post('/api/login', login);

    app.get('/currentUser', currentUser);
}