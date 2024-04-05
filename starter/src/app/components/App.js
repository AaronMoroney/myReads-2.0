import { Route, Routes} from 'react-router-dom'
import { useEffect, useState, useMemo} from 'react';

import '../../css/App.css';
import { SelectorContext } from '../../shared/context/SelectorContext.js';
import { useBookShelves } from '../../widgets/Library/hooks/useLibrary.js';
import { getAll } from '../../shared/api/BooksAPI.js';
import  Library  from '../../widgets/Library/components/Library.js';
import  Search from '../../widgets/Search/components/Search.js'
import  SingleBook  from '../../widgets/SingleBook/components/SingleBook.js';

function App() {
  const [shelfState, setShelfState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await getAll();
      setShelfState(result);
    }
    fetchData();
  }, []);

  const { read, wantToRead,  currentlyReading, } = useBookShelves(shelfState);

  const contextValue = useMemo(() => ({ read,  wantToRead,   currentlyReading, setShelfState }), 
    [read, currentlyReading, wantToRead, setShelfState]
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