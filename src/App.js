import './App.css';

function App() {
  let name = 'John';

  const handleClick = () => {
    name = 'Jane';
    console.log(name);
  };

  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
