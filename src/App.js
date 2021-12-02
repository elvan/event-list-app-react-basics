import { useState } from 'react';
import './App.css';

function App() {
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

  const handleDeleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className='App'>
      <ul>
        {events.map((event) => (
          <div key={event.id}>
            <h2>
              #{event.id} {event.title}
            </h2>
            <button onClick={() => handleDeleteEvent(event.id)}>
              Delete Event
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
