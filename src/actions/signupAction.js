export const signupAction = ( 
  name,
  email,
  password,
  dateOfBirth,
  country,
  city,
  area,
  mobileNumber,
  callback
) =>{ 
    return(
      {
        type: 'SIGNUP',
        payload: { 
          "name": name,
          "email": email,        
          "password": password,
          "dateOfBirth": dateOfBirth,
          "country": country,
          "city": city,
          "area": area,
          "mobileNumber": mobileNumber,
          callback: callback 
        },
      }
    )};
   