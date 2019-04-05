export const getCitiesAction = (id, callback) => (
    {
      type: 'GET_CITIES',
      payload: { 
        id: id,
        callback: callback 
      },
    }
  );