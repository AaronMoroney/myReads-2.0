import {useCallback, useMemo, useContext} from 'react'

import { update, getAll } from '../../../shared/api/BooksAPI';
import { SelectorContext } from '../../../shared/context/SelectorContext';

export function useBookSelector() {
  const { setShelfState } = useContext(SelectorContext);
  // const { wantToRead, read, currentlyReading } = useContext(SelectorContext);
  
  const onUpdateSelector = useCallback(async (bookId, shelf) => {
    await update(bookId, shelf);
    let result = await getAll(); 
    await setShelfState(result);
  },[setShelfState])

  return useMemo (
    () => ({
      onUpdateSelector,
    }), 
    [ onUpdateSelector ]
  ) 
}
