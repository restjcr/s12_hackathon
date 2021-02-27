// let siete = document.querySelector('#siete');
// let salida = document.querySelector('#output');
// let sumar = document.querySelector();


// siete.addEventListener('click', (e) => {
//     e.preventDefault();
//     salida.textContent=siete.textContent;
// });

let botonesList = document.querySelector('#botones');
let salida = document.querySelector('#output');
let valor;
let operandoa;
let operandob;
let miOperador;
// let operador;

botonesList.addEventListener('click', capturarBotonNumero);

function capturarBotonNumero(e){
        if(e.target.classList.contains('boton')){
            switch(e.target.getAttribute('id')){
                case 'uno': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'dos': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'tres': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'cuatro': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'cinco': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'seis': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'siete': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'ocho': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'nueve': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'cero': 
                valor=e.target.textContent;
                pintarValor();
                break;
                case 'limpiar': 
                resetear();
                break;
                case 'suma': 
                aplicarOperador('+');
                guardarOperando();
                operar('sumar');
                break;
                case 'resta': 
                aplicarOperador('-');
                guardarOperando();
                operar('restar');
                break;
                case 'multiplicacion': 
                aplicarOperador('*');
                guardarOperando();
                operar('multiplicar');
                break;
                case 'division': 
                aplicarOperador('/');
                guardarOperando();
                operar('dividir');
                break;
                case 'potencia': 
                aplicarOperador('^');
                guardarOperando();
                operar('elevar');
                break;
                case 'resto': 
                aplicarOperador('%');
                guardarOperando();
                operar('resto');
                break;
                case 'resultado':
                resolver();
                break;
            }
        }
}

function pintarValor(){
    salida.textContent=salida.textContent+valor;
}


function aplicarOperador(operador){
    salida.textContent=salida.textContent+operador;
    miOperador=operador;
}

// function operar(operacion){
//     switch(operacion){
//         case 'sumar':

//     }
// }


function guardarOperando(){
    operandoa = salida.textContent;
    limpiar();
}

function resolver(){
    operandob = salida.textContent;

    let res=0;

    switch(miOperador){
        case '+':
            res=parseFloat(operandoa)+parseFloat(operandob);
            break;
        case '-':
            res=parseFloat(operandoa)-parseFloat(operandob);
            break;
        case '*':
            res=parseFloat(operandoa)*parseFloat(operandob);
            break;
        case '/':
            res=parseFloat(operandoa)/parseFloat(operandob);
            break;
        case '%':
            res=parseFloat(operandoa)%parseFloat(operandob);
            break;
        case '^':
            res=Math.pow(parseFloat(operandoa),parseFloat(operandob));
            break;
            
    }

    resetear();
    salida.textContent=res;
    
    
}

function limpiar(){
    salida.textContent='';
}

function resetear(){
    salida.textContent='';
    operandoa=0;
    operandob=0;
    miOperador='';
}