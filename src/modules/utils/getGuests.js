const getGuests = function(guests=2) {
    const guestOptions = ['1 person'];

    if (guests < 2) {
        return guestOptions;
    }

    for (let i = 2; i <= guests; i += 1) {
        guestOptions.push(`${i} people`);
    }

    return guestOptions;
}

export default getGuests;