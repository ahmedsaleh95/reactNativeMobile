export const setLoadingAction = (isLoading, message) => (
    {
      type: 'SET_LOADING',
      payload: { isLoading: isLoading, message: message },
    }
  );