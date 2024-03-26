import {useState, useCallback, useMemo } from 'react'

import { search, get } from '../../BooksAPI';

export function useBookShelf() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([]);
  const [single, setSingle] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const onSearch = useCallback(async () => {
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

  const onGetSingle = useCallback(async(id) => {
    try {
      const data = await get(id);
      setSingle(data);
    } catch(error) {
      console.error('error', Error);
    }
  }, []);

 return useMemo (
    () => ({
        onSearch, 
        onGetSingle,
        setQuery, 
        single,
        result, 
        errorState, 
        query, 
    }), 
    [onSearch, setQuery, onGetSingle, single, result, errorState, query]
  ) 
}