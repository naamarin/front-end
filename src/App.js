// import './App.css';
// import Tab from './components/tabs/tabs';
// import { postTab } from './services/fetchDataBase';

// function App() {
//   const handlePostTab = async (id) => {
//     await postTab(); // Call the deleteTab function
//   };

//   return (
//     <>
//       <header>
//         <button className='add-tab' onClick={handlePostTab}>+ Add new tab</button>
//       </header>
//       <div className="grid-container">
//         <Tab />
//       </div>
//     </>
//   );
// }

// export default App;
import './App.css';
import Tab from './components/tabs/tabs';
import { postTab } from './services/fetchDataBase';
import { useState } from 'react';

function App() {
    const [refresh, setRefresh] = useState(false); // State variable to trigger re-fetch

    const handlePostTab = async () => {
        await postTab(); // Call the postTab function
        setRefresh(prev => !prev); // Toggle the refresh state to trigger re-fetch
    };

    return (
        <>
            <header>
                <button className='add-tab' onClick={handlePostTab}>+ Add new tab</button>
            </header>
                <Tab refresh={refresh} /> 
        </>
    );
}

export default App;
