export const internalMemory = {
  // metodo per ottenere i dati dal locale storage.
  get: (email: string): string | null => {
    const value = localStorage.getItem(email);
    //se l'elemento esiste lo parsa in oggetto Javascript
    return value ? JSON.parse(value) : null;
  },
  //metodo per salvare i valori del locale storage e in questo caso trasforma in una stringa/in un Json gli elementi
  set: (email: string, value: string): void => {
    localStorage.setItem(email, JSON.stringify(value));
  },
  // metoto per rimuovere gli elementi dal locale storage
  remove: (email: string): void => {
    localStorage.removeItem(email);
  },
};
