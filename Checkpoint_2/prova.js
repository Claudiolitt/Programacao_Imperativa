var z = 0;
for (var i = 20; i<50;i+=10) {
    z+=i;}
    console.log(z);

let valor = 5;
let fatorial = 1;
for (let i = valor; i > 1; i--) {
    fatorial*=i;}
console.log("Fatorail ="+fatorial)

let x = 5;
let y =x++ + ++x;
console.log(y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1;
console.log(x);
console.log(y);

d = 1 ;
f = ++d;
console.log(f);

function soletrar(texto) {
    console.log(texto.replace('-','').toLocaleUpperCase().split("")/*.join(",")*/);
}
soletrar("digital-house");
soletrar("ctd");

for (var i=0;i<50;i+=10){
    console.log(i);
}
console.log(i);

if (f==d) {
    console.log("amor")
}

function soma (a=1,b=3) {
    return a + b;
}
console.log(soma());
console.log(soma(3));
console.log(soma(1,2));