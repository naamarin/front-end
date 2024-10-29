import Styles from './tabs.module.css'
import fetchDatabase from '../../services/fetchDataBase'

function Tab() {
    let DB = fetchDatabase();
    const container = document.getElementById('grid-container');
    const data = DB;
    data.forEach(tab => {
        const tabDiv = document.createElement('div');
        tabDiv.innerHTML = `
                <h2>${tab.text}</h2>
            `;
        tabDiv.style.backgroundColor = tab.color;
        container.appendChild(tabDiv);
    });


    return (
        <div id="grid-container" className={Styles.tab}></div>
    )
}

export default Tab;