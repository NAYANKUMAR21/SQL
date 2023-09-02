export const UserInit = {
  loading: false,
  error: false,
  data: {
    token: localStorage.getItem('token'),
    isAuth: localStorage.getItem('token') || '',
  },
  isSigned: false,
};
