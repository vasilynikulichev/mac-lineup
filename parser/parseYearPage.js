const HTMLParser = require('node-html-parser');
const path = require('path');
const fs = require('fs');

function parseYearPage(html) {
    const root = HTMLParser.parse(html);

    const titles = root.querySelectorAll('#contentcenter_specs_externalnav_2 a');
    const rows = root.querySelectorAll('#contentcenter_specs_internalnav_2');

    return Array.from(rows, (row, index) => {
        const { text: title } = titles[index];
        const tds = row.querySelectorAll('td');
        let [, intro, , disc, , order, , model, , family] = [...tds].map((td) => td.text);
        return { title, intro, disc, order, model, family };
    });
};

exports.parseYearPage = parseYearPage;
