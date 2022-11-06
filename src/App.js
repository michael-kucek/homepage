import './App.css';
import MainLayout from './Components/Layout/MainLayout';
import Search from './Components/Search';

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
      <br />
      <MainLayout/>

    </div>
  );
}

export default App;
