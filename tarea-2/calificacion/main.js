let nota = parseInt(prompt("Ingrese su nota: "));

if(nota >= 90){
    console.log("Excelente");
}
    else if (nota>=75 && nota<89){
        console.log("Bien");
        }
        else if(nota>=60 && nota<74){
            console.log("Suficiente");
        }
        else if(nota<60){
            console.log("No ha obtenido nota aprobatoria");
        }
    
console.log(`Su nota ha sido ${nota}`);