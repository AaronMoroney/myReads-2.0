import { Route, Routes} from 'react-router-dom'

import '../../App.css';
import Library from '../../widgets/Library/components/Library.js';
import Search from '../../widgets/Search/components/Search.js'
import SingleBook from '../../widgets/SingleBook/components/SingleBook.js';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Library />}/>
        <Route exact path='/search' element={<Search />}/> 
        <Route exact path='/books/:id' element={<SingleBook />}/>
      </Routes>
    </div>
  );
}

export default App;