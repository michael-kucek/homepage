import { useState } from 'react';
import './App.css';

function App() {
  const date = new Date()
  const [term, setTerm] = useState('')
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          {date.toDateString()}
        </p>
        <p>
          {date.getHours() < 17
            ? 'Daytime'
            : 'Night'
          }
        </p>
        <input type='text' name='search' placeholder='Search' onChange={e => setTerm(e.target.value)}></input>
        <button onClick={() => console.log(term)}>Search</button>
      </header>
    </div>
  );
}

export default App;
