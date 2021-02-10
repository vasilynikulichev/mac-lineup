const axios = require('axios');
const { promises: fs } = require('fs');
const path = require('path');
const { parseYearPage } = require('./parseYearPage');

function fetchYearPage(year) {
    const url = `https://everymac.com/systems/by_year/macs-released-in-${year}.html`;

    return axios.get(url).then(resp => resp.data);
}

(async() => {
    let res = [];
    for (let i = 1998; i <= 2020; i++) {
        res.push(...await fetchYearPage(i).then(parseYearPage))
    }
    fs.writeFile('./data.json', JSON.stringify(res, null, 2));
})();
