export const loginAction = (email, password, callback) => (
    {
      type: 'LOGIN',
      payload: { email: email, password: password, callback: callback },
    }
  );