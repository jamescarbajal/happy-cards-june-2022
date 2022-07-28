import './App.css';
import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />} />
            <Route path="login" element = <Login />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
