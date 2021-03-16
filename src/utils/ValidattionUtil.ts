export const validatePhone = (phonenumber: string): string | undefined => {
  if (
    !phonenumber ||
    phonenumber.length !== 10 ||
    !phonenumber.startsWith("0")
  ) {
    return "Invalid phone number.";
  }
  return undefined;
};
export const validateUsername = (username: string) => {
  if (!username || username.length < 6 || username.length > 30) {
    return "Invalid username.";
  }
  return undefined;
};
export const validatePassword = (password: string) => {
  if (!password) {
    return "Invalid password.";
  }
  if (password.length < 6) {
    return "Password must atleat 6 chars.";
  }
  if (password.length > 40) {
    return "Password must less than 40 chars.";
  }
  return undefined;
};
export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
