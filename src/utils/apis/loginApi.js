export const loginApi = (email, password, callback) => {
    
  // alert("email: " + email + " password: " + password)

    fetch(API_URL + "/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        // "grant_type": "password",
        // player_id: playerId,
      })
      })
      .then(response => response.json())
      .then(responseJson => {
        callback(responseJson)
      })
      // .catch(error => {
      //   console.log("Login Error : " + error);
      //   callback({msg: ERROR_MSG});
      // });
  };
  