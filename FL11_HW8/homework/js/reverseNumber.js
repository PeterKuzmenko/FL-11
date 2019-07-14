function reverseNumber(a) {
	var num, q, poly, i;
	poly = Math.abs(0);
	q = 0;
	i = 1;
	num = a;
	a = Math.abs(a);
	while (Math.abs(a) / i >= 1) {
		q ++;
		i *= 10;
	}
	for (i = q - 1; i >= 0; i--) {  
		poly += a % 10 * Math.pow(10,i);
		a = Math.floor(a / 10);
	}
	if(num >= 0) {
		return poly;		
	} else {
		return -poly;
	}
}