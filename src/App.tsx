import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { Toaster } from "./components/import_shadcn/toaster"
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'false' ? false : true);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    localStorage.getItem('darkMode') === 'false' ? localStorage.setItem('darkMode', 'true') : localStorage.setItem('darkMode', 'false');
    setDarkMode(!darkMode);
    console.log(darkMode)
  };

  


  return (
    <div className="bg-background text-foreground h-screen">
      <BrowserRouter>
        <Header onClick={toggleDarkMode} />
        <Toaster />
        <Routes>
          <Route path="/badminton" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
