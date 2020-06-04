const fetchData1 = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData1(API)
    .then(data => {
        console.log(data.info.count);https://rickandmortyapi.com/api/character/
        return fetchData1(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData1(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))