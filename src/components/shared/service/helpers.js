export const updateLocalStorage = (objectID, item) => {

    localStorage.setItem(objectID, JSON.stringify(item));

    return item;

};
