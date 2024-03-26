import { useEffect } from 'react';

import SearchBar from '../../../features/search/components/SearchBar'
import Results from '../../../features/search/components/Results'
import { useBookShelf } from '../../../shared/hooks/useBookshelf.js';

const Search = () => {
    const { onSearch, setQuery, result, errorState, query  } = useBookShelf();

    useEffect(() => {
        onSearch(query);
    }, [onSearch, query]);

    return (
        <>
            <SearchBar
                setQuery={setQuery}
                query={query}
            />
            <Results
                query={query}
                result={result}
                errorState={errorState}
            />
        </>
    )
}

export default Search