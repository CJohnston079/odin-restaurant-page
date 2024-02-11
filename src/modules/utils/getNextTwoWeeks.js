function getNextTwoWeeks() {
    let dates = [];
    let today = new Date();

    for (let i = 0; i < 14; i++) {
        let date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
    }

    return dates;
}

export default getNextTwoWeeks;