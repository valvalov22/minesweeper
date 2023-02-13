import React, { useContext, useState } from 'react';
import { Button as PlayButton, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { NameContext } from '../components/App';
import './pages.scss';
import Header from '../components/Header';

const Home = () => {
  const {inputValue, setInputValue} = useContext(NameContext);
  const [diff, setDiff] = useState(0);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const startGame = () => {
      if (diff === 1) {
          navigate('/gameeasy')
      }
      if (diff === 2) {
        navigate('/gamemedium')
      }
      if (diff === 3) {
        navigate('/gamehard')
      }
  }

  return (
    <div>
      <Header />
        <Form className='form'>
          <Form.Control type="text" placeholder="Введите имя" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          {
            error ? <div className="error">Обязательное поле</div> : null
          }
          <div className='radio'>
            <p><input type="radio" checked={diff === 1 ? true : false} onChange={() => setDiff(1)} />Простой(8x8, 10 мин)</p>
            <p><input type="radio" checked={diff === 2 ? true : false} onChange={() => setDiff(2)} />Средний(16х16, 40 мин)</p>
            <p><input type="radio" checked={diff === 3 ? true : false} onChange={() => setDiff(3)} />Сложный(32х16, 100 мин)</p>
          </div>
          <div className="foot">
            <PlayButton className='playbutton' variant="warning" onClick={inputValue !== '' & inputValue !== null ? () => startGame() : () => setError('zx') }>PLAY</PlayButton>
            <Link className='leaderboard' to='/leaderboard'>🏆</Link>
          </div>
        </Form>
    </div>
  )
}

export default Home