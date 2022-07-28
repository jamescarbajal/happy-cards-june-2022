import './App.css';
import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { UserProvider } from './contexts/UserContext';
import CardForm from './components/CardForm';
import AuthChecker from './components/AuthChecker';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderFooter />}>
              <Route index element={<Home />} />
              <Route path="/Login" element = {<Login />} />
                <Route path="/CardForm" element = {<CardForm />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </UserProvider>
    </ThemeProvider>
  );
}

export default App;
