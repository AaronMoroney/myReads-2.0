//move into helpers
export const getFromLocalStorage = () => {
    let found = localStorage.getItem('goal');
    return found === null ? 0 : JSON.parse(found);
}

export const calculateProgress = (shelfState, bookGoal) => {
    if(!shelfState || bookGoal === 0) {
        return 0;
    } 

    const read = shelfState?.filter(book => book.shelf === 'read');
    return Math.min(100, Math.round(read.length / bookGoal * 100));
}