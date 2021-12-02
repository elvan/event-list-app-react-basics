import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('John');

  const handleClick = () => {
    console.log(name);
    setName('James');
    console.log(name);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
