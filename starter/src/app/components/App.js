import { Link, Route, Routes} from 'react-router-dom'

import '../../App.css';
import Library from '../../widgets/Library/components/Library.js';
import Search from '../../features/search/components/Search.js';

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);
  return (
    <div className="app">
      <Routes>
        <Route 
          exact path='/' 
            element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Library />
                </div>
              </div>
            </div> 
          }/>
        <Route 
          exact path='/search' 
            element={
              <Search />
          }/>
      </Routes>
      <div className="open-search">
        <Link
          to="/search"
        >
        Add a book
        </Link>
      </div> 
    </div>
  );
}

export default App;





