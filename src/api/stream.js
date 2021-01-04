import axios from 'axios';


export default axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        'Authorization': 'jwt ' + localStorage.getItem("idToken"),
        'Content-Type': 'application/json'

    }
})