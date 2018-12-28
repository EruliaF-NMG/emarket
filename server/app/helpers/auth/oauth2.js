import oauth2orize from "oauth2orize";
import passport from "passport";
import crypto from "crypto";

import {tokenLife} from "../../../config/core"
import User from "../../models/user.model";
import RefreshToken from "../../models/refreshToken.model";
import AccessToken from "../../models/accessToken.model";

// create OAuth 2.0 server
var server = oauth2orize.createServer();

// Generic error handler
const errFn = (cb, err)=> {
    if (err) {
        return cb(err);
    }
};

// Destroy any old tokens and generates a new access and refresh token
const generateTokens = (data, done)=> {   

   
    RefreshToken.remove(data, function (err) {
        if (err){
            return done(err);
        } 
    });
    AccessToken.remove(data, function (err) {
        if (err) {
            return done(err);
        }
    });

    tokenValue = crypto.randomBytes(32).toString('hex');
    refreshTokenValue = crypto.randomBytes(32).toString('hex');

        let tokenValue = crypto.randomBytes(32).toString('hex');
        let refreshTokenValue = crypto.randomBytes(32).toString('hex');

        data.token = tokenValue;
        const token = new AccessToken(data);
        data.token = refreshTokenValue;
        const refreshToken = new AccessToken(data);    

        refreshToken.save(function (err) {
            if (err) { 
                return done(err);
            }
        });

        const info = { scope: '*' }

        token.save(function (err, token) {
            if (err) { 
                return done(err);
            }
            done(null, tokenValue, refreshTokenValue, { 'expires_in': tokenLife });
        });
};


// Exchange email & password for access token
server.exchange(oauth2orize.exchange.password(function (client, username, password, scope, done) {   
    User.findOne({ email: username }, function (err, user) {

        if (err) {
            return done(err);
        }

        if (!user || !user.authenticate(password)) {
            return done(null, false);
        }

        const model = {
            userId: user.userId,
            clientId: client.clientId
        };

        generateTokens(model, done);
    });

}));


// Exchange refreshToken for access token
server.exchange(oauth2orize.exchange.refreshToken(function (client, refreshToken, scope, done) {

    RefreshToken.findOne({ token: refreshToken, clientId: client.clientId }, function (err, token) {
        
        if (err) {
            return done(err);
        }

        if (!token) {
            return done(null, false);
        }

        User.findById(token.userId, function (err, user) {
            if (err) { 
                return done(err); 
            }

            if (!user) { 
                return done(null, false); 
            }

            var model = {
                userId: user.userId,
                clientId: client.clientId
            };

            generateTokens(model, done);
        });
    });
}));


const token = [
    passport.authenticate(['basic', 'oauth2-client-password'], { session: false }),
    server.token(),
    server.errorHandler()
];

export default{
    token,
    generateTokens
}