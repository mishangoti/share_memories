import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import { gapi } from 'gapi-script';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  // const navigate = useNavigate();
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  )
};

export default App;