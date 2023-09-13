
import './App.css';
import GenreMovieList from './components/GenreMovieList';
import Header from './components/Header';
import Production from './components/Production';
import Slide from './components/Slide';

function App() {
  return (
    <div>
    <Header/>
    <Slide/>
    <Production/>
    <GenreMovieList/>
    </div>
  );
}

export default App;
