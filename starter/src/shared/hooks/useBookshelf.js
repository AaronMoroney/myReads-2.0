import {useState, useCallback, useMemo } from 'react'

import { search, get } from '../../BooksAPI';

export function useBookShelf() {
  const [query, setQuery] = useState(localStorage.getItem('storedQuery')) //initialised with ''
  const [result, setResult] = useState([]);
  const [single, setSingle] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const onQueryType = useCallback((param) => {
    const newQuery = param.target.value;
    setQuery(newQuery);
    localStorage.setItem('storedQuery', newQuery);
  },[])

  //problem is here
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
        onQueryType,
        setQuery, 
        single,
        result, 
        errorState, 
        query, 
    }), 
    [onSearch, setQuery, onGetSingle, onQueryType, single, result, errorState, query ]
  ) 
}