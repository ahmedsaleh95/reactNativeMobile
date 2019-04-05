export const getAreasAction = (id, callback) => (
    {
      type: 'GET_AREAS',
      payload: { 
        id: id,
        callback: callback 
      },
    }
  );