let a, b, c, typeTriangle;
a = +prompt('Введіть довжину сторони AB');
b = +prompt('Введіть довжину сторони BC');
c = +prompt('Введіть довжину сторони AC');
if(a+b>c && b+c>a && a+c>b) {
	if(a===b && b===c){
		typeTriangle = 'Eequivalent';
	} else if(a===b || b===c || a===c){
		typeTriangle = 'Isosceles';
	} else {
		typeTriangle = 'Normal';
	}
	console.log(typeTriangle + ' triangle');
} else {
	console.log('Triangle doesn\'t exist');
}
