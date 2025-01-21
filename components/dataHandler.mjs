export default class DataHandler {
   static async fetchData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        // console.log(data);
        
        return data
        
    } catch (error) {
        console.log("Error", error);
        
    }
}
}
