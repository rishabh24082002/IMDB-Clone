import './App.css';

import Home from './Pages/Home';
import CategoryMovie from './Pages/CategoryMovie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from './constants/routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovie />} />
          {/* <Route path={`${routePath.movies}/:type`} element={<Movies />} /> */}
          {/* <Route path={`${routePath.movie}/:id`} element={<Movie />} /> */}
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
