import { Route, Routes} from 'react-router-dom'
import { useEffect, useState, useMemo} from 'react';

import '../../css/App.css';
import { SelectorContext } from '../../shared/context/SelectorContext.js';
import { getAll } from '../../shared/api/BooksAPI.js';
import  Library  from '../../widgets/Library/components/Library.js';
import  Search from '../../widgets/Search/components/Search.js'
import  SingleBook  from '../../widgets/SingleBook/components/SingleBook.js';

function App() {
  const [ shelfState, setShelfState ] = useState({ read: [], currentlyReading: [],  wantToRead: [] });

  useEffect(() => {
    async function fetchData() {
      let result = await getAll();
      let read = result.filter(book => book.shelf === 'read');
      let currentlyReading = result.filter(book => book.shelf === 'currentlyReading');
      let wantToRead = result.filter(book => book.shelf === 'wantToRead');
      setShelfState({read, currentlyReading, wantToRead});
    }
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ shelfState , setShelfState }), 
    [ shelfState,  setShelfState ]
  );
  
  return (
    <SelectorContext.Provider value={contextValue}>
       <div className="app">
        <Routes>
          <Route 
            exact path='/' 
            element={<Library />}
          />
          <Route 
            exact path='/search' 
            element={<Search />}
          /> 
          <Route 
            exact path='/books/:id' 
            element={<SingleBook />}
          />
        </Routes>
      </div>  
    </SelectorContext.Provider>
  );
}

export default App;