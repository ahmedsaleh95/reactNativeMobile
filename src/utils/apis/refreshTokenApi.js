export const refreshTokenApi = (uuid, refresh_token, callback) => {
    fetch(API_URL + "/api/users/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uuid: uuid,
        refresh_token: refresh_token,
        grant_type: "refresh_token",
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert("tamamssss")
        console.log("refreshTokenApi response : " + JSON.stringify(responseJson));
        callback(responseJson)
      })
      .catch(error => {
        callback(error)

        // console.log("Error in refreshTokenApi : " + error);
        // alert("exception in refresh token : " + error);
      });
  };
  