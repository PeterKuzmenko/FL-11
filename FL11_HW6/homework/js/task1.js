let a1, b1, c1, a2, b2, c2, flag;
flag = false;
a1 = +prompt('Введіть абсцису для точки A');
a2 = +prompt('Введіть ординату для точки A');
b1 = +prompt('Введіть абсцису для точки B');
b2 = +prompt('Введіть ординату для точки B');
c1 = +prompt('Введіть абсцису для точки C');
c2 = +prompt('Введіть ординату для точки C');
if(b1-c1===c1-a1 && b2-c2===c2-a2 || a1-c1===c1-b1 && a2-c2===c2-b2) {
	flag = true;
} else {
	flag = false;
}
console.log(flag);