import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('My name is Giovanni Giorgio');
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'National Pollution Control Day'
    },
    {
      id: 2,
      title: 'International Day for the abolition of slavery'
    },
    {
      id: 3,
      title: 'International Volunteer Day'
    }
  ]);

  const handleClick = () => {
    setTitle('But everybody calls me Giorgio');
    setEvents((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          title: "New Year's Eve"
        }
      ];
    });
  };

  return (
    <div className='App'>
      <h1>{title}</h1>
      <button onClick={handleClick}>Change Title</button>
      <ul>
        {events.map((event) => (
          <div key={event.id}>
            <h2>
              #{event.id} {event.title}
            </h2>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
