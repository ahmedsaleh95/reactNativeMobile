export const getCitiesApi = (id, callback) => {

    fetch(API_URL + "/api/country/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + auth
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert(JSON.stringify(responseJson))
        callback(responseJson);
      })
      .catch(error => {
          // alert("ERRORRRR " + JSON.stringify(error))
        // callback({msg: ERROR_MSG})
      });
  };
    