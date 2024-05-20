export const internalMemory = {
  get: (email: string): string | null => {
    const value = localStorage.getItem(email);
    return value ? JSON.parse(value) : null;
  },
  set: (email: string, value: string): void => {
    localStorage.setItem(email, JSON.stringify(value));
  },
  remove: (email: string): void => {
    localStorage.removeItem(email);
  },
};
