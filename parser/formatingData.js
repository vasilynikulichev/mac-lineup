const fs = require('fs');
const path = require('path');

function dateToISO(date) {
    const internalDate = new Date(date);

    if (internalDate === undefined) {
        return date;
    }

    return `${internalDate.getFullYear()}-${addNumberPrefix(internalDate.getMonth())}-${addNumberPrefix(internalDate.getDate())}`
}

function addNumberPrefix(number) {
    return number < 10 ? `0${number}` : number;
}

async function dataTransformation() {
    let formatedData = {
        macServer: [],
        PowerBook: [],
        PowerMacintosh: [],
        iBook: [],
        eMac: [],
        Xserve: [],
        imacGN: [],
        imacPro: [],
        imac17: [],
        imac20: [],
        imac21: [],
        imac24: [],
        imac27: [],
        macbookPro17: [],
        macbookAir: [],
        macbookPro13: [],
        macbookPro15and16: [],
        macbook: [],
        macMini: [],
        macPro: [],
        unknown: [],
    };
    let data = await fs.promises.readFile(path.join(__dirname, 'data.json')).then((res) => JSON.parse(res));

    data.forEach((item) => {
        item.intro = dateToISO(item.intro);
        item.disc = dateToISO(item.disc);

        switch (true) {
            case item.title.indexOf('Mac Server') !== -1:
                formatedData.macServer.push(item);
                break;
            case item.title.indexOf('PowerBook') !== -1:
                formatedData.PowerBook.push(item);
                break;
            case item.title.indexOf('Power Macintosh') !== -1:
                formatedData.PowerMacintosh.push(item);
                break;
            case item.title.indexOf('iBook') !== -1:
                formatedData.iBook.push(item);
                break;
            case item.title.indexOf('eMac') !== -1:
                formatedData.eMac.push(item);
                break;
            case item.title.indexOf('Xserve') !== -1:
                formatedData.Xserve.push(item);
                break;
            case item.title.indexOf('iMac G') !== -1:
                formatedData.imacGN.push(item);
                break;
            case item.title.indexOf('iMac Pro') !== -1:
                formatedData.imacPro.push(item);
                break;
            case item.title.indexOf('iMac 17') !== -1:
                formatedData.imac17.push(item);
                break;
            case item.title.indexOf('iMac 20') !== -1:
                formatedData.imac20.push(item);
                break;
            case item.title.indexOf('iMac 21') !== -1:
                formatedData.imac21.push(item);
                break;
            case item.title.indexOf('iMac 24') !== -1:
                formatedData.imac24.push(item);
                break;
            case item.title.indexOf('iMac 27') !== -1:
                formatedData.imac27.push(item);
                break;
            case item.title.indexOf('MacBook Pro 17') !== -1:
                formatedData.macbookPro17.push(item);
                break;
            case item.title.indexOf('MacBook Air') !== -1:
                formatedData.macbookAir.push(item);
                break;
            case item.title.indexOf('MacBook Pro 13') !== -1:
                formatedData.macbookPro13.push(item);
                break;
            case item.title.indexOf('MacBook Pro 15') !== -1 || item.title.indexOf('MacBook Pro 16') !== -1:
                formatedData.macbookPro15and16.push(item);
                break;
            case item.title.indexOf('MacBook') !== -1:
                formatedData.macbook.push(item);
                break;
            case item.title.indexOf('Mac mini') !== -1:
                formatedData.macMini.push(item);
                break;
            case item.title.indexOf('Mac Pro') !== -1:
                formatedData.macPro.push(item);
                break;
            default:
                formatedData.unknown.push(item);
        }
    });

    fs.promises.writeFile(path.join(__dirname, 'formatedData.json'), JSON.stringify(formatedData, null, 2));
}


dataTransformation();