export const validateEmail = (value) => {
  const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(value)) {
    return "Please enter a valid email address";
  }
  return true;
};
