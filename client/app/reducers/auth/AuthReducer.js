import {
    checkAuthLoginKey,logoutAuthUserKey,setProfileKey 
} from '../../config/StateKeys';


const initialState = {
    authToken: null,
    isAuthenticated: false,
    authUserProfileInfo:false
}



export default function authReducer(state = initialState, action) {
  switch (action.type) {    
    case checkAuthLoginKey:
      return {
        ...state,
        authToken: action.payload.authToken,
        isAuthenticated: action.payload.status
      };
      break;   
    case setProfileKey:
      return {
        ...state,
        authUserProfileInfo:action.payload
      };
      break;    
    case logoutAuthUserKey:
      return state=initialState;      
      break;
    default:
      return state
  }
}