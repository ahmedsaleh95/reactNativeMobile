export const signupApi = (
    name,
    email,
    password,
    dateOfBirth,
    country,
    city,
    area,
    mobileNumber,
    callback
  ) => {

    // alert(firstName + lastName + email + phoneNumber + country + city + password)
    fetch(API_URL + "/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "email": email,        
        "password": password,
        "dateOfBirth": dateOfBirth,
        "country": country,
        "city": city,
        "area": area,
        "mobileNumber": mobileNumber,

      })
    })
      .then(response => { 
  
        return response.json();
      })
      .then(responseJson => {
        callback(responseJson);        
      })
    //   .catch(error => {
    //     // callback({msg: ERROR_MSG});
    //     callback(error);
    //   });
  };
  