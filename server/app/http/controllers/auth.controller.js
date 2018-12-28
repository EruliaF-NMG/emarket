import User from "../../models/user.model";
import Client from "../../models/client.model";
import errorHandler from "../../helpers/dbErrorHandler";
import oauth2 from "../../helpers/auth/oauth2";
import passport from "passport";

const registerUser = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    oauth2.generateTokens({
      userId: user._id,
      clientId: "android"
    },function(ex, tokenValue, refreshTokenValue,expires){
     
     if(ex){
      res.json(ex);
     }else{
      res.json({
        "access_token": tokenValue,
        "refresh_token": refreshTokenValue,
        "expires_in": expires.expires_in,
        "token_type": "Bearer"
      });
     } 

    });
  });
};

const signin = (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (err || !user)
        return res.status("401").json({
          error: "User not found"
        });

      if (!user.authenticate(req.body.password)) {
        return res.status("401").send({
          error: "Email and password don't match."
        });
      }else{

        // const client = new Client({name:"test",clientId:"android",clientSecret:"abc12345"});
        // client.save((err, result) => {
        //     if (err) {
        //       return res.status(400).json({
        //         error: errorHandler.getErrorMessage(err)
        //       });
        //     }           
        // });

        res.json(user);
      }


    }
  );
};

const requireSignin=passport.authenticate('bearer', { session: false });

export default {
  registerUser,
  signin,
  requireSignin
};
