import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://fir-login-efbcc-default-rtdb.firebaseio.com/'
    }
)