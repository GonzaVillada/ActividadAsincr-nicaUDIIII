function fibonacci (num) //el parámetro que recibe determmina hasta que número queremos calcular de la seciencia 
{
const secuenciaDeFibonacci = [0,1] //le damos los valores iniciales ya conocidos para poder calcular los siguientes
for (let i=2; i<= num; i++) // utilizamos la estructura de control for para poder ejecutar el fragmento de codigo las veces que sean necesarias para calcular la cantidad de valores que deseemos de la secuencia
{
secuenciaDeFibonacci[i]=secuenciaDeFibonacci[i-1]+secuenciaDeFibonacci[i-2] //cada numero de la serie se calcula sumando los dos anteriores
}
return secuenciaDeFibonacci; // luego de calcular los valores devolvemos el valor
}

console.log(fibonacci(7)); // mostramos por consola el resultado de ejecutar la funcion hasta llegar a la posicion 7 del array.