import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './pages.scss';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://63e8e4035f3e35d898f72c5e.mockapi.io/users?sortBy=time&page=1&limit=10')
      .then(res => setUsers(res.data))

    // fetch('https://63e8e4035f3e35d898f72c5e.mockapi.io/users?sortBy=time&page=1&limit=10')
    // .then(res => res.json()).then(json => {
    //   setUsers(json); 
    // })
  }, [])

  console.log(users);

  return (
    <div>
      <Header />
      <div className="leaderboard">Таблица лидеров:</div>
      <ListGroup numbered variant='flush'>
        {users.map((user, index) => {
          return <ListGroupItem key={user.id}>Имя: {user.userName}, Время: {user.time}</ListGroupItem>
        })}
      </ListGroup>
    </div>
  )
}

export default Leaderboard