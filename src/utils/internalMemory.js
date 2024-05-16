export const internalMemory = {
  get: (email) => {
    return JSON.parse(localStorage.getItem(email));
  },
  set: (email, value) => {
    localStorage.setItem(email, JSON.stringify(value));
  },
  remove: (email) => {
    localStorage.removeItem(email);
  },
};
