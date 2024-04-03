import {useCallback, useMemo, useContext, useState } from 'react'

import { update } from '../../BooksAPI';
import { SelectorContext } from '../../features/book/context/SelectorContext';
import { getAll } from '../../BooksAPI';

export function useBookSelector() {
  const { setShelfState } = useContext(SelectorContext); 
   const [stageUpdate, setStageUpdate] = useState('');

  const onUpdateSelector = useCallback(async (bookId, shelf) => {
    update(bookId, shelf)
    .catch(error => {
      console.error('error', error);
    });
  },[])

  const updateShelf = useCallback(async ( book ) => {
    try {
      await onUpdateSelector(book, stageUpdate);
      let result = await getAll();
      setShelfState(result); 
    } catch (error) {
      console.error('Error updating shelf:', error);
    }
  }, [onUpdateSelector, setShelfState, stageUpdate]);

 return useMemo (
    () => ({
      onUpdateSelector,
      updateShelf, 
      setStageUpdate
    }), 
    [ onUpdateSelector , updateShelf, setStageUpdate]
  ) 
}