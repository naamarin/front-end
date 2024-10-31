import { useEffect, useState } from 'react';
import Styles from './tabs.module.css';
import { getTabs, deleteTab, updateTabText } from '../../services/fetchDataBase'; 
import Colors from '../Colors/colors';

function Tab({refresh}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const DB = await getTabs();
            setData(DB);
        }

        fetchData();
    }, [refresh]);

    const handleColorChange = async () => {
        const updatedData = await getTabs(); // Re-fetch the updated data
        setData(updatedData); // Update the state with the new data
    };

    const handleDeleteTab = async (id) => {
        await deleteTab(id); // Call the deleteTab function
        setData((prevData) => prevData.filter(tab => tab.id !== id)); // Update state to remove the deleted tab
    };

    return (
        <div id="grid-container" className={Styles.tab}>
            {data && data.length > 0 ? (
                data.map((tab, index) => (
                    <div
                        id="inner-tab"
                        key={index}
                        className={Styles.note}
                        style={{ backgroundColor: tab.color }}
                    >
                        <button
                            className={Styles.closeButton}
                            onClick={() => handleDeleteTab(tab.id)} // Call handleDeleteTab on button click
                        >
                            X
                        </button>
                        <h2 className={Styles.centerText}>{tab.text}</h2>
                        <div className={Styles.colorsContainer}>
                            <Colors id={tab.id} onColorChange={handleColorChange} />
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Tab;
