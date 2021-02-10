function dateToISO(date) {
    const internalDate = new Date(date);
    return `${internalDate.getFullYear()}-${addNumberPrefix(internalDate.getMonth())}-${addNumberPrefix(internalDate.getDate())}`
}

function addNumberPrefix(number) {
    return number < 10 ? `0${number}` : number;
}

exports.dateToISO = dateToISO;