a1=a2=b1=b2=c1=c2=0;
alert("Ok vamos a resolver este ejercicio de ecuaciones simultaneas");
alert("Vamos a usar el metodo de Cramer")
a1 = parseFloat(prompt("Indique el coeficiente de (x) en la primera ecuacion"));
b1 = parseFloat(prompt("Indique el coeficiente de (y) en la primera ecuacion"));
c1 = parseFloat(prompt("Indique el valor del termino independiente de la primera ecuacion"));

a2 = parseFloat(prompt("Indique el coeficiente de (x) en la segunda ecuacion"));
b2 = parseFloat(prompt("Indique el coeficiente de (y) en la segunda ecuacion"));
c2 = parseFloat(prompt("Indique el valor del termino independiente de la segunda ecuacion"));

determinante = (a1 * b2) - (a2 * b1);

x = (((c1*b2) - (c2*b1)) / determinante);
y = (((a1*c2)- (a2*c1)) / determinante);

alert("El valor de x = " + x);
alert("El valor de y = " + y);
