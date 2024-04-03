import { Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';

import '../../App.css';
import { SelectorContext } from '../../features/book/context/SelectorContext.js';
import  Library  from '../../widgets/Library/components/Library.js';
import  Search from '../../widgets/Search/components/Search.js'
import  SingleBook  from '../../widgets/SingleBook/components/SingleBook.js';
import { getAll } from '../../BooksAPI.js';

function App() {
  const [shelfState, setShelfState] = useState([]);

  /*
  *  Runs on component app first paint only 
  */ 
 
  useEffect(() => {
    async function fetchData() {
      let result = await getAll();
      setShelfState(result);
    }
    fetchData();
  }, []);

  return (
    <SelectorContext.Provider value={{shelfState, setShelfState}}>
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