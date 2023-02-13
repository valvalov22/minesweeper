import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Leaderboard from '../../pages/Leaderboard';
import Game from '../Game';

export const NameContext = createContext();

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
        <NameContext.Provider value={{ inputValue, setInputValue }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gameeasy" element={<Game MAX_COLS={8} MAX_ROWS={8} NO_OF_BOMBS={10} />} />
                <Route path="/gamemedium" element={<Game MAX_COLS={16} MAX_ROWS={16} NO_OF_BOMBS={40}  />} />
                <Route path="/gamehard" element={<Game MAX_COLS={32} MAX_ROWS={16} NO_OF_BOMBS={100} />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </NameContext.Provider>
    </div>
  )
}

export default App