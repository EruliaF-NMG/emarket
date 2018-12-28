import passport from "passport";
import {BasicStrategy} from "passport-http";
import {Strategy as ClientPasswordStrategy} from "passport-oauth2-client-password";
import {Strategy as BearerStrategy} from "passport-http-bearer";

import {tokenLife} from "../../../config/core"
import Client from "../../models/client.model";
import AccessToken from "../../models/accessToken.model";
import User from "../../models/user.model";

passport.use(
  new BasicStrategy(function(username, password, done) {
    Client.findOne({ clientId: username }, function(err, client) {
      if (err) {
        return done(err);
      }
      if (!client) {
        return done(null, false);
      }
      if (client.clientSecret != password) {
        return done(null, false);
      }

      return done(null, client);
    });
  })
);

passport.use(new ClientPasswordStrategy(
    function (clientId, clientSecret, done) {
        Client.findOne({ clientId: clientId }, function (err, client) {
            if (err) {
                return done(err);
            }

            if (!client) {
                return done(null, false);
            }

            if (client.clientSecret !== clientSecret) {
                return done(null, false);
            }

            return done(null, client);
        });
    }
));



passport.use(new BearerStrategy(
    function (accessToken, done) {
        AccessToken.findOne({ token: accessToken }, function (err, token) {

            if (err) {
                return done(err);
            }

            if (!token) {
                return done(null, false);
            }

            if (Math.round((Date.now() - token.created) / 1000) > tokenLife) {

                AccessToken.remove({ token: accessToken }, function (err) {
                    if (err) {
                        return done(err);
                    }
                });

                return done(null, false, { message: 'Token expired' });
            }

            User.findById(token.userId, function (err, user) {

                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, { message: 'Unknown user' });
                }

                const info = { scope: '*' };
                done(null, user, info);
            });
        });
    }
));