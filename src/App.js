import './App.css';
import Search from './Components/Search';
import TwitchHolder from './Components/Twitch/TwitchHolder';

function App() {
  const date = new Date()
  
  return (
    <div className='App'>
        <p>
          {date.toDateString()}
        </p>
        <p>
          {date.getHours() < 17
            ? 'Daytime'
            : 'Night'
          }
        </p>
       <Search></Search>
       <br/>
       <TwitchHolder></TwitchHolder>
    </div>
  );
}

export default App;
