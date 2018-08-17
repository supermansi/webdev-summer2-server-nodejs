module.exports = function(app) {

    var userModel = require('../models/user/user.model.server')

    function login(req, res) {
        var user = req.body;
        userModel.findUserByCredentials(user.username, user.password)
            .then(user => {
                if(user !== null) {
                    console.log(user);
                    req.session['currentUser'] = user;
                    res.send(req.session['currentUser']);
                }
                else {
                    res.send(null);
                }
            })
    }

    /*function register(req, res) {
        var user = req.body;
        userModel.findUserByUsername(user.username)
            .then(user => {
                console.log(user);
                if(!user){
                    return userModel.createUser(user)
                }
                else{
                    res.sendStatus(406);
                }
            })
            .then(user => {
            req.session['currentUser'] = user;
            res.send(req.session['currentUser']);
        });
    }*/

    function register(req, res) {
        var user = req.body;
        console.log(userModel.findUserByUsername(user.username));
        userModel.createUser(user)
            .then(user => {
                req.session['currentUser'] = user;
                res.send(req.session['currentUser'])
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
        // console.log(req.session['currentUser']);
        const currentUser = req.session['currentUser'];
        if(currentUser) {
            res.send(req.session['currentUser']);
        }
        else{
            res.send(req.session['currentUser']);
        }
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(users => res.send(users));
    }

    function updateUser(req, res) {
        let user = req.body;
        return userModel.updateUser(user._id, user)
            .then(user =>{
                console.log(user);
                req.session['currentUser'] = user;
                res.send(req.session['currentUser']);
            });
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    findUserById = (req, res) =>
        userModel.findUserById(req.params['userId'])
            .then(user => res.send(user));

/*    userModel.findAllUsers()
        .then(users => console.log(users));*/

    app.get('/api/session/set/:name/:value',
        setSession);

    app.get('/api/session/get/:name',
        getSession);

    app.get('/api/session/get',
        getSessionAll);

    app.get('/api/session/reset',
        resetSession);

    app.post('/api/login',
        login);

    app.post('/api/register',
        register);

    app.get('/api/profile',
        currentUser);

    app.get('/api/user',
        findAllUsers);

    app.put('/api/profile',
        updateUser);

    app.post('/api/logout',
        logout);

    app.get('/api/user/:userId',
        findUserById);

}