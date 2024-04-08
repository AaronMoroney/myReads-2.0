import {useCallback, useMemo, useContext} from 'react'

import { SelectorContext } from '../../../shared/context/SelectorContext';

export function useBookSelector() {
  const { setShelfState } = useContext(SelectorContext);

  const onRemoveSelector = useCallback((book) => {
    //remove from shelf
    setShelfState(prevState => ({
      ...prevState, 
      [book.shelf]: prevState[book.shelf].filter(bookOnShelf => bookOnShelf.id !== book.id)
    }))
  },[setShelfState])
  
  const onUpdateSelector = useCallback(async (book, shelf) => {
    //add to shelf
    setShelfState(prevState => ({
      ...prevState, 
      [shelf]: [...prevState[shelf], book]
    }))

  },[setShelfState])

  return useMemo (
    () => ({
      onUpdateSelector,
      onRemoveSelector,
    }), 
    [ onUpdateSelector, onRemoveSelector ]
  ) 
}
