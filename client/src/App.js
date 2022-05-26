import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignInPage from './pages/signin';
import HomePage from './pages/homepage';
import Navbar from './components/Navbar';

const App = () => {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem('access_token'))
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }
  }, [accessToken]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;

// https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=ya29.a0ARrdaM_Gx8g5jXX2CmC6eXXVL5b9r_MFt8YoZFPiAYn2Y9G1xa1nuIzWJ0dYUbbb6BonKgDutzWvB8F0BEn1OzligwH9JFe2m6HOgKvSQPCqFFVzfyQ1uIbVfHBzN6ACE8W_5_R0nHEJZZE9wmgK6eVpx_RB
