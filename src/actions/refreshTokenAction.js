export const refreshTokenAction = (token) => (
    {
      type: 'REFRESH_TOKEN',
      payload: { token: token },
    }
  );