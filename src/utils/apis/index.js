import * as loginApi from "./loginApi";
import * as signupApi from "./signupApi";
import { getAddressApi } from "./getAddressApi";
import { getCitiesApi } from "./getCitiesApi";
// import { getAreasApi } from "./getAreasApi";

// import { getOffersApi } from "./getOffersApi";
// import { getToursApi } from "./getToursApi";
// import { getTourDetailsApi } from "./getTourDetailsApi";
// import { getSurveyApi } from "./getSurveyApi";
// import { refreshTokenApi } from "./refreshTokenApi";
// import { submitSurveyApi } from "./submitSurveyApi";
// import { getProfileApi } from "./getProfileApi";
// import { updateProfileApi } from "./updateProfileApi";

module.exports = {

    ...loginApi,
    ...signupApi,
    ...getAddressApi,
    ...getCitiesApi,
    // ...getAreasApi,

    // ...getOffersApi,
    // ...getToursApi,
    // ...getTourDetailsApi,
    // ...getSurveyApi,
    // ...refreshTokenApi,
    // ...submitSurveyApi,
    // ...getProfileApi,
    // ...updateProfileApi
  };
  