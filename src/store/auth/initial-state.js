export const initialState = {
  profile: null,
  token: null,
  error: null,
  isLoading: false,
  isValidatingToken: false,
  isAuthorized: false,
  isRegistering: false,
  isRegistered: false,
  isConfirming: false,
  emailExists: null,
  isValidatingEmail: false,
  register: { name: '', surname: '', email: '', password: '', terms: false },
};
