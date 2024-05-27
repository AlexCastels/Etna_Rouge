// Convertire qualsiasi input in una stringa.
// Definire una regola che controlla se una stringa contiene solo numeri.
// Verificare se l'input originale soddisfa questa regola.

export const isValidId = (id: any): boolean => {
    //Si trasforma in stringa perche la funzione regex lavora meglio con le stringhe
    const idString = String(id);
    // => ^ : Inizio della stringa. // $ : Fine della stringa.
    const regex = /^[0-9]+$/;
    return regex.test(idString);
};

export default isValidId;