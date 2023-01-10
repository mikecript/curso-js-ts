const numeros = [3,6,8,2,66,787,88,909,33,22,11,14,65767,11,44,7,9,3,6,1,5,0,3,7,23];


const numerosPares = numeros.filter((valor) => (valor % 2 === 0))
.map((valor) => (valor * 2)).reduce((acumulador, valor) => acumulador + valor)



console.log(numerosPares)
