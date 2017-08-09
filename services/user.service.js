var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function authenticate(email, password) {
    var deferred = Q.defer();
       console.log("mailpassword", email, password);
       
    db.users.findOne({ email: email }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve(jwt.sign({ sub: user._id }, config.secret));
            } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getById(_id) {
	console.log("id", _id);
    var deferred = Q.defer();
	console.log("getDeferred", deferred);
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findOne(
        { email: userParam.email },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('User Info"' + userParam.email + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');
             console.log(user);
        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, userParam) {
	console.log("update",_id, userParam);
    var deferred = Q.defer();
  console.log("deferred", deferred)
    // validation
    db.users.findById(_id, function (err, user) {
    	console.log("user", user);
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.email !== userParam.email) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { email: userParam.email },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // username already exists
                        deferred.reject('User Info "' + req.body.email + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            firstName			: userParam.firstName,
            lastName			: userParam.lastName,
            email   			: userParam.email,
            datetimepicker		: userParam.datetimepicker,
            website   			: userParam.website,
            phoneNumber  		: userParam.phoneNumber,
            country   			: userParam.country,
            state   			: userParam.state,
            city   				: userParam.city,
            personalDescription : userParam.personalDescription,
            gender   			: userParam.gender,
            religiousBelifs   	: userParam.religiousBelifs,
            birthPlace   		: userParam.birthPlace,
            occupation   		: userParam.occupation,
            maritalStatus   	: userParam.maritalStatus,
            politicalIncline   	: userParam.politicalIncline,
            facebookAccount   	: userParam.facebookAccount,
            twitterAccount   	: userParam.twitterAccount,
            rssFeedAccount   	: userParam.rssFeedAccount,
            dribbleAccount   	: userParam.dribbleAccount,
            spotifyAccount   	: userParam.spotifyAccount
            
        };
            console.log("set", set)
        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}