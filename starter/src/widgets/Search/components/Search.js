import { useEffect } from 'react';

import SearchBar from '../../../features/search/components/SearchBar'
import Results from '../../../features/search/components/Results'
import { useBookShelf } from '../../../shared/hooks/useBookshelf.js';

const Search = () => {
    const { onSearch, setQuery, result, errorState, query, onQueryType } = useBookShelf();
   
    //working
    const handleInputChange = (e) => {
        onQueryType(e);
    }
    
    useEffect(() => {
       onSearch(query);
    },[onSearch, query]);

    return (
        <>
            <SearchBar
                setQuery={setQuery}
                handleInputChange={handleInputChange}
            />
            <Results
                result={result}
                errorState={errorState}
            /> 
        </>
    )
}

export default Search