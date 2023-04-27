import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
