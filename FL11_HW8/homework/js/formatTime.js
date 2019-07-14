function formatTime(a) {
	var d, h, m;
	d = Math.floor(a / 1440);
	if(d === 0) {
		h = Math.floor(a / 60);
		else {
			m = a % 60;
		} if (h === 0) {
			m = a;
		} 
	} else {
		h = Math.floor((a - d * 1440) / 60);
		if (h === 0) {
			m = a - d * 1440;
		} else {
			m = a % 60;
		}
	}
	return d + ' day(s) ' + h + ' hour(s) ' + m + ' minute(s)';
}