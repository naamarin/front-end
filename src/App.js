import './App.css';
import Tab from './components/tabs/tabs';
import { postTab } from './services/fetchDataBase';

function App() {
  const handlePostTab = async (id) => {
    await postTab(); // Call the deleteTab function
  };
  return (
    <>
      <header>
        <button className='add-tab' onClick={handlePostTab}>+ Add new tab</button>
      </header>
      <div className="grid-container">
        <Tab />
      </div>
    </>
  );
}

export default App;
