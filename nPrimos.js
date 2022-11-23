/*
    Un programa que imprima los primeros 10 números primos
    (número primo es el que es divisible únicamente sobre sí mismo y 1).
*/

const esPrimo = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
};

for (let i = 2; i < 10; i++) {
    if(esPrimo(i) == true) console.log(i);
}