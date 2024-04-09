import {useCallback, useMemo, useContext} from 'react'

import { SelectorContext } from '../../../shared/context/SelectorContext';
import { update } from '../../../shared/api/BooksAPI';

export function useBookSelector() {
  const { setShelfState } = useContext(SelectorContext);

  const onRemoveBook = useCallback((book) => {
    setShelfState(prevState => ({
      ...prevState, 
      [book.shelf]: prevState[book.shelf].filter(bookOnShelf => bookOnShelf.id !== book.id)
    }))
  },[setShelfState])
  
  const onUpdateBook = useCallback((book, shelfName) => {
    //update book
    const updatedBook = { ...book, shelf: shelfName };
    //update shelf
    setShelfState(prevState => ({
      ...prevState,
      [shelfName]: [...(prevState[shelfName]), updatedBook] 
    }))
    //persist to backend 
    update(book, shelfName);
  },[setShelfState])

  const onUpdateShelf = useCallback(async (book, shelfName, showAlert) => {
    try {
        onRemoveBook(book, shelfName);
        onUpdateBook(book, shelfName);
        if (showAlert) {
          showAlert();
        }
    } catch (error) {
      console.error('Error updating shelf:', error);
    };
  }, [onRemoveBook, onUpdateBook]);

  return useMemo (
    () => ({
      onUpdateBook,
      onRemoveBook,
      onUpdateShelf
    }), 
    [ onUpdateBook, onRemoveBook, onUpdateShelf]
  ) 
}
