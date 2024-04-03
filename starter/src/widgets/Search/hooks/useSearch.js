import {useState, useCallback, useMemo } from 'react'

import { search } from '../../../BooksAPI';

export function useSearch() {
  const [query, setQuery] = useState(localStorage.getItem('storedQuery')) //initialised with ''
  const [result, setResult] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const onQueryType = useCallback((param) => {
    const newQuery = param.target.value;
    setQuery(newQuery);
    localStorage.setItem('storedQuery', newQuery);
  },[])

  const onSearch = useCallback(async () => {
    if(query === null) {
      return
    }

    if(query !== '') {
      search(query)
      .then(data => {
        if (Array.isArray(data)) {
          setResult(data);
          setErrorState(false);
        } else {
          // If not an array, no results found because of API limitations
          setResult([]);
          setErrorState(true);
        }
      })
      .catch(error => {
        console.error('error', Error);
      })
    }
  },[query])

 return useMemo (
    () => ({
      onSearch, 
      onQueryType,
      setQuery, 
      result, 
      errorState, 
      query, 
    }), 
    [onSearch, setQuery, onQueryType, result, errorState, query]
  ) 
}