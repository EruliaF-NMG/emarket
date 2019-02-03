import Validate from "../../helpers/validation/Validate";
import CallApi from "../../helpers/common/CallApi";
import {logout} from "../../helpers/common/ManageStorage";
import {setToLocalStorage} from "../../helpers/common/ManageStorage";
import {authTokenStorageKey,authUserProfileInfoKey} from "../../config/Core";
import {loginUserAPI,getUserInfoAPI,createUserAPI} from "../../config/APIEndPoints";
import {checkAuthLoginKey,logoutAuthUserKey,setProfileKey} from "../../config/StateKeys";

import { setInputErrors, unsetInputErrors } from "../common/CoreActions";
import {setPreLoader} from "../common/CoreUIActions";
import {resetChatState} from "../common/ChatActions";


function registerUser(formObject) {
  return dispatch => {
    try {

    let formData = {
      name: formObject.name || "",
      email: formObject.email || "",
      password: formObject.password || "",
      seller:formObject.seller || false
    };

    //set loader
    dispatch(setPreLoader(true));

    CallApi.call(createUserAPI, "POST", false, formData)
    .then(function(response) {

       //Remove loader
       dispatch(setPreLoader(false));

      if(response.data.status=="validation-error"){
        //set Error                        
        dispatch(setInputErrors(response.data.result));

      }else if(response.data.status=="success"){
          //remove errors
          dispatch(setInputErrors({}));

          const storageValue = {
            accessToken: response.data.result.access_token,
            refreshToken: response.data.result.refresh_token,
            createAt: new Date(),
            expiresIn: response.data.result.expires_in
          };

          if (setToLocalStorage(authTokenStorageKey, storageValue)) {
             dispatch(setCurrentAuthenticationStatus(storageValue,true));
          } else {
            alert("Something went wrong ");
          }
          

      }

    })
    .catch(function(error) {
       //Remove loader
       dispatch(setPreLoader(false));
       alert("Something went wrong ");
    });
      

    } catch (ex) {
      //Remove loader
      dispatch(setPreLoader(false));
      alert("Something went wrong ");
    }

  };
}

function loginUser(formObject) {
  
  return dispatch => {
    try {
      
      let formData = {
        username: formObject.authEmail || "",
        password: formObject.authPwd || "",
        grant_type: "password",
        client_id: "android",
        client_secret: "abc12345"
      };

      //set loader
      dispatch(setPreLoader(true));

      CallApi.call(loginUserAPI, "POST", false, formData)
        .then(function(response) {
          
          //Remove loader
          dispatch(setPreLoader(false));

          if (response.data.hasOwnProperty("status") && response.data.status=="validation-error")
          {
            // api errors
            dispatch(setInputErrors({
                "authEmail":response.data.result.username,
                "authPwd":response.data.result.password
            }));

          }else if (response.success==false || response.data.hasOwnProperty('error')) {
              dispatch(setInputErrors({
                "authEmail":"The user credentials were incorrect.",
              }));
          } else {
            
            //remove api errors
            dispatch(setInputErrors({}));

            const storageValue = {
              accessToken: response.data.access_token,
              refreshToken: response.data.refresh_token,
              createAt: new Date(),
              expiresIn: response.data.expires_in
            };

            if (setToLocalStorage(authTokenStorageKey, storageValue)) {
               dispatch(setCurrentAuthenticationStatus(storageValue,true));
            } else {
              alert("Something went wrong ");
            }

          }
        })
        .catch(function(error) {
           //Remove loader
           dispatch(setPreLoader(false));
           alert("Something went wrong ");
        });
    } catch (ex) {
      //Remove loader
      dispatch(setPreLoader(false));
      alert("Something went wrong ");
    }
  };
}

function getCurrentUserInfo(){
  return dispatch => {
    try {
      CallApi.call(getUserInfoAPI, 'GET', true)
        .then(function (response) {

          if (response.data.hasOwnProperty('message') || response.data.message == "Unauthenticated.") {
            dispatch(logoutUser());
          } else {

            if (setToLocalStorage(authUserProfileInfoKey, response.data.result)) {
              dispatch({
                type: setProfileKey, payload: response.data.result
              });
            } else {

              dispatch({
                type: setProfileKey, payload: false
              });

              alert("Something went wrong ");
            }
          }
        }).catch(function (error) {
          dispatch({
            type: setProfileKey, payload: false
          });
        });

    } catch (ex) {
      dispatch({
        type: setProfileKey, payload: false
      });
    }
  }
}

function setCurrentAuthenticationStatus(authToken, status) {
  return {
      type: checkAuthLoginKey,
      payload: { authToken: authToken, status: status }
  }
}

function logoutUser() {
  return  {
      type: logoutAuthUserKey
  }
}

function setToAuthReducer(key, payload) {
  return {
      type: key,
      payload: payload
  }
}

function userLogout(socketOBj){
  return dispatch => {
    
    if(socketOBj){
      socketOBj.emit('forceDisconnect',socketOBj.id);
    }

    dispatch(resetChatState());
    logout();
    dispatch(logoutUser());
  }
}

export { 
  registerUser,
  loginUser,
  setCurrentAuthenticationStatus,
  logoutUser,
  getCurrentUserInfo,
  setToAuthReducer,
  userLogout
};
