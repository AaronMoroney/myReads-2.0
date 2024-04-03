import {useCallback, useMemo,useState } from 'react'
import { update} from '../../BooksAPI';

export function useBookSelector() {
  const [ stageUpdate, setStageUpdate ] = useState('');

  const onUpdateSelector = useCallback(async (bookId, shelf) => {
    await update(bookId, shelf)
    .catch(error => {
      console.error('error', error);
    });
  },[])

  return useMemo (
    () => ({
      onUpdateSelector,
      setStageUpdate, 
      stageUpdate, 
    }), 
    [ setStageUpdate, stageUpdate, onUpdateSelector ]
  ) 
}