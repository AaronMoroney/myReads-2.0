//move into helpers
export const getFromLocalStorage = () => {
    let found = localStorage.getItem('goal');
    return found === null ? 0 : JSON.parse(found);
}