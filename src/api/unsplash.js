import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID J37Hh6vZKt9nkvc-vriwr5rpAhA1spgJaObJahrCjV4"
    }
});