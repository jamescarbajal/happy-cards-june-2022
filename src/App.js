import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MovieList from './components/MovieList';
import CardForm from './components/CardForm';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>

    <div className="App">
      {/* <Home /> */}
      <CardForm />
    </div>

    </ThemeProvider>
  );
}

export default App;
