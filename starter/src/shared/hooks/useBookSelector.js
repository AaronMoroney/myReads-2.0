import {useCallback, useMemo} from 'react'

import { update, getAll } from '../api/BooksAPI';
// import { SelectorContext } from '../../features/book/context/SelectorContext';


export function useBookSelector() {
  // const [isLoading, setIsLoading] = useState(false);
  // const { setShelfState } = useContext(SelectorContext);

  const onUpdateSelector = useCallback(async (bookId, shelf) => {
    await update(bookId, shelf)
    .catch(error => {
      console.error('error', error);
    });
  },[])

  const onUpdateShelf = useCallback(async () => {
    try {
      // await onUpdateSelector(book.id, shelf); 
      await getAll(); 
    } catch (error) {
      console.error('Error updating shelf:', error);
    } 
  }, []);

  return useMemo (
    () => ({
      onUpdateSelector,
      onUpdateShelf, 
    }), 
    [ onUpdateSelector, onUpdateShelf ]
  ) 
}

 // const onUpdateShelf = useCallback(async (book, stageUpdate, onToggle) => {
  //   if (!stageUpdate) return;

  //   try {
  //     setIsLoading(true);
  //     await onUpdateSelector(book.id, stageUpdate); 
  //     const result = await getAll(); 
  //     // setShelfState(result);
  //     return result;
  //     // onToggle(); 
  //   } catch (error) {
  //     console.error('Error updating shelf:', error);
  //   } finally {
  //     setIsLoading(false);
      
  //   }
  // }, [onUpdateSelector]);