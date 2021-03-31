export const getProfile = state => state.auth.profile;

export const getIsLoading = state => state.auth.isLoading;

export const getIsRegistering = state => state.auth.isRegistering;

export const getEmailExists = state => state.auth.emailExists;

export const getIsValidatingEmail = state => state.auth.isValidatingEmail;

export const getIsRegistered = state => state.auth.isRegistered;

export const getIsConfirming = state => state.auth.isConfirming;

export const getError = state => state.auth.error;

export const getErrorEmail = state => state.auth.errorEmail;

export const getIsEmailSent = state => state.auth.isEmailSent;
