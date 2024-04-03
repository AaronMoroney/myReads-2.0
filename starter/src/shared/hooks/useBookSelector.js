import {useCallback, useMemo } from 'react'
import { update } from '../../BooksAPI';

export function useBookSelector() {

  const onUpdateSelector = useCallback(async (bookId, shelf) => {
    await update(bookId, shelf)
    .catch(error => {
      console.error('error', error);
    });
  },[])

  return useMemo (
    () => ({
      onUpdateSelector,
    }), 
    [ onUpdateSelector ]
  ) 
}