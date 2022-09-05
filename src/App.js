import './App.css';
import './index.css';
import { GlobalProvider } from "utils/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from 'pages/Home';
import About from 'pages/About';
import Users from 'pages/Users';
import Detail from 'pages/Detail';
import Api from 'pages/Api';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="api" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
