export const UserInit = {
  loading: false,
  error: false,
  name: localStorage.getItem('name'),
  avatar: localStorage.getItem('avatar'),
  data: {
    token: localStorage.getItem('token'),
    isAuth: localStorage.getItem('token') || '',
  },
  signupError: false,
  isSigned: false,
};
