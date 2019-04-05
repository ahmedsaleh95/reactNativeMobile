export const getAddressAction = (callback) => (
    {
      type: 'GET_ADDRESS',
      payload: { callback: callback },
    }
  );