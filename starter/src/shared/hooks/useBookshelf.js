import {useState, useCallback, useMemo } from 'react'

import { search } from '../../BooksAPI';

export function useBookShelf() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([]);
  const [errorState, setErrorState] = useState(false);

  const onSearch = useCallback(() => {
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


 return useMemo(
    () => ({
        onSearch, 
        setQuery, 
        result, 
        errorState, 
        query, 
    }), 
    [onSearch, setQuery, result, errorState, query]
 ) 
}