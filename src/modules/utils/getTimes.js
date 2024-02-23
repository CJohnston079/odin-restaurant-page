const getTimes = function () {
	const times = [];
	for (let i = 12; i < 20; i += 1) {
		if (i >= 14 && i < 17) {
			continue;
		}
		times.push(i + ":00");
		times.push(i + ":30");
	}
	return times;
};

export default getTimes;
