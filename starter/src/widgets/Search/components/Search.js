import { useEffect } from 'react';

import { SearchBar } from '../../../features/search'
import { Results } from '../../../features/search'
import { useSearch } from '../../../widgets/Search/hooks/useSearch'

const Search = () => {
    const { onSearch, setQuery, result, errorState, query, onQueryType } = useSearch();

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