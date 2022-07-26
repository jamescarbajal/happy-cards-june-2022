import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MovieList from './components/MovieList';
import CardForm from './components/CardForm';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Route, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>

    <div>
      <Home />
    </div>

    </ThemeProvider>
  );
}

export default App;
