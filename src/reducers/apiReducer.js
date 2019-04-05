import { Alert, AsyncStorage } from "react-native";
import { getAddressApi } from "../utils/apis/getAddressApi";
import { getCitiesApi } from "../utils/apis/getCitiesApi";
// import { getAreasApi } from "../utils/apis/getAreasApi";
import { signupApi } from "../utils/apis/signupApi";
import { loginApi } from "../utils/apis/loginApi";

/* 
import { getHomeDataApi } from "../utils/apis/getHomeDataApi";
import { getOffersApi } from "../utils/apis/getOffersApi";
import { getToursApi } from "../utils/apis/getToursApi";
import { getTourDetailsApi } from "../utils/apis/getTourDetailsApi";
import { getSurveyApi } from "../utils/apis/getSurveyApi";
import { submitSurveyApi } from "../utils/apis/submitSurveyApi";
import { getProfileApi } from "../utils/apis/getProfileApi";
import { updateProfileApi } from "../utils/apis/updateProfileApi";
 */
const save = state => {
  AsyncStorage.setItem("state", JSON.stringify(state)).catch(error => {
    alert("Save state : " + error);
  });
  return state;
};
export const apiReducer = (state = {}, action) => {
  switch (action.type) {

    case "LOAD_STATE": {
      return action.payload.state;
    }
    
    case "SET_LOADING": {
      return save({
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message
      });
    }

    case "SIGNUP": {
      signupApi(
        action.payload.name,
        action.payload.email,
        action.payload.password,
        action.payload.dateOfBirth,
        action.payload.country,
        action.payload.city,
        action.payload.area,
        action.payload.mobileNumber,
        action.payload.callback
      );
      return state;
    }

    case "GET_ADDRESS": {
      getAddressApi(
        action.payload.callback
      );
      return state;
    }

    case "GET_CITIES": {
      getCitiesApi(
        action.payload.id,
        action.payload.callback
      );
      return state;
    }

    // case "GET_AREAS": {
    //   getAreasApi(
    //     action.payload.id,
    //     action.payload.callback
    //   );
    //   return state;
    // }

    case "LOGIN": {
      loginApi(
        action.payload.email,
        action.payload.password,
        action.payload.callback
      );
      return state;
    }

    case "SIGNUP_RESPONSE": {
      
      return save({ ...state, ...action.payload.response });
    }

    // case "SIGN_OUT": {
    //   return save({ isLoading: false });
    // }


    // case "SET_PROFILE": {
    //   return save({ ...state, ...action.payload.profile });
    // }

    // case "GET_HOME_DATA": {
    //   getHomeDataApi(
    //     action.payload.auth,
    //     action.payload.callback
    //   );
    //   return state;
    // }
    
    // case "REFRESH_TOKEN": {
    //   return save({ ...state, token: action.payload.token });
    // }

    // case "GET_OFFERS": {
    //   getOffersApi(
    //     action.payload.auth,
    //     action.payload.callback
    //   );
    //   return state;
    // }

    // case "GET_TOUR_DETAILS": {
    //   getTourDetailsApi(
    //     action.payload.auth,
    //     action.payload.id,        
    //     action.payload.callback
    //   );
    //   return state;
    // }

    // case "GET_SURVEY": {
    //   getSurveyApi(
    //     action.payload.auth,
    //     action.payload.id,        
    //     action.payload.callback
    //   );
    //   return state;
    // }

    // case "GET_PROFILE": {
    //   getProfileApi(
    //     action.payload.auth,
    //     action.payload.callback
    //   );
    //   return state;
    // }

    // case "SUBMIT_SURVEY": {
    //   submitSurveyApi(
    //     action.payload.auth,
    //     action.payload.id,        
    //     action.payload.answers,        
    //     action.payload.callback
    //   );
    //   return state;
    // }

    // case "UPDATE_PROFILE": {
    //   updateProfileApi(
    //     action.payload.auth,
    //     action.payload.id,        
    //     action.payload.profile,        
    //     action.payload.callback
    //   );
    //   return state;
    // }

    // case "GET_TOURS": {
    //   getToursApi(
    //     action.payload.auth,
    //     action.payload.callback
    //   );
    //   return state;
    // } */
      
    default: {
      return state;
    }
  }
};
