import {http} from './http'

async function fetchDatabase() {
    try {
        const response = await http.get('/tabs');
        const data = response.data;
        return data;
        console.log("Database Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

export default fetchDatabase;