function celsiusVersFahrenheit(c){
    return c * 9 / 5 + 32;
}

function decrireTemperature(c){
    if( c < 10){
        return 'froid'
    }
    else if (c <= 25) {
        return 'doux'
    }
    else{
        return 'chaud'
    }
}

console.log(celsiusVersFahrenheit(22))
console.log(celsiusVersFahrenheit(-5))

console.log(decrireTemperature(-5))
console.log(decrireTemperature(25))
console.log(decrireTemperature(34))
