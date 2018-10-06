import Axios from 'axios';

const config = Axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default config;