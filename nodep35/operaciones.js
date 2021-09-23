function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function division(a,b){
    if (b==0){
        errorDiv();
    }else{
        return a/b;
    }   
}
function multiplicacion(a,b){
    return a*b;
}
function errorDiv(){
    console.log("No se puede dividir entre 0");
}
const NUMEROE = 2.718;

exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.division= division;
exports.NUMEROE = NUMEROE
