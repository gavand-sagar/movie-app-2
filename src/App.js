import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<MovieList/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route/>
        </Routes>
    </>
  )
  
}

export default App;
