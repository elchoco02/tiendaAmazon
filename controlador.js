//botones importantes
let boton=document.getElementById("boton");
let btnlimpiar=document.getElementById("btnlimpiar");
btnlimpiar.addEventListener("click",limpiarCarrito);
boton.addEventListener("click",capturarDatos);

let btnConvertir=document.getElementById("btnConvertir");
btnConvertir.addEventListener("click",pasarValores);
//informacion nesecaria de la consola
let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;

let cantidad=document.getElementById("cantidad").value;
//elementos de la ventana modal
let fotocarrito=document.getElementById("fotoC");
let tituloC=document.getElementById("tituloC");
let line1=document.getElementById("line1");
let line2=document.getElementById("line2");
//elementos informacion de la ventana
let precioUnitarioCarrito=document.getElementById("precioUnitarioCarrito");;
let pesoUnitarioCarrito=document.getElementById("pesoUnitarioCarrito");
let pesoTotalCarrito=document.getElementById("pesoTotalCarrito");
let costoCasilleroCarrito=document.getElementById("costoCasilleroCarrito");
let costoImpuesto=document.getElementById("costoImpuesto");
let costoTotal=document.getElementById("costoTotal");

function capturarDatos() {
    let consola=document.getElementById("consola").value;
    
    let cantidad=document.getElementById("cantidad").value;
    let dirrecion=document.getElementById("comentarios");

    let cantidadC=document.getElementById("cantidadC");
    cantidadC.textContent=`cantidad: ${cantidad}`;

    btnConvertir.classList.add("visible");
    btnConvertir.classList.remove("invisible");

    line1.classList.add("visible");
    line2.classList.add("visible");
    line1.classList.remove("invisible");
    line2.classList.remove("invisible");
    
    let pill=document.getElementById("pill");
    pill.textContent=cantidad;
    pill.classList.remove("invisible");
    pill.classList.remove("visible");
    seleccionarConsola(consola);

    let precioTotal=(calculaImpuesto(precioConsola,cantidad))+(calcularCasillleroCosto(pesoConsola,cantidad))

    fotocarrito.src=fotoConsola;

    tituloC.textContent=nombreConsola;

    precioUnitarioCarrito.textContent=`$${precioConsola} USD`;

    pesoUnitarioCarrito.textContent=`peso unitario: ${pesoConsola} Lb`;

    pesoTotalCarrito.textContent=`peso total: ${pesoConsola*cantidad} Lb`

    costoCasilleroCarrito.textContent=`costo casillero= $${(calcularCasillleroCosto(pesoConsola,cantidad))} USD`
    
    costoImpuesto.textContent=`costo venta(impuesto): $${calculaImpuesto(precioConsola,cantidad)} USD`

    costoTotal.textContent=`Costo total: $${precioTotal} USD`;
    
    btnConvertir.textContent="convertir COP"
}
//convertidor de valores
function pasarValores(){
    let consola=document.getElementById("consola").value;
    
    let cantidad=document.getElementById("cantidad").value;
    let dirrecion=document.getElementById("comentarios");
    let cantidadC=document.getElementById("cantidadC");
    cantidadC.textContent=`cantidad: ${cantidad}`;

    btnConvertir.classList.add("visible");
    btnConvertir.classList.remove("invisible");

    line1.classList.add("visible");
    line2.classList.add("visible");
    line1.classList.remove("invisible");
    line2.classList.remove("invisible");
    
    let pill=document.getElementById("pill");
    pill.textContent=cantidad;
    pill.classList.remove("invisible");
    pill.classList.remove("visible");
    seleccionarConsola(consola);
    precioUnitarioCarrito.textContent=`$${convertirdolarapesos(precioConsola)} COP`;

    pesoUnitarioCarrito.textContent=`peso unitario: ${(pesoConsola)} Lb`;

    pesoTotalCarrito.textContent=`peso total: ${pesoConsola*cantidad} Lb`;

    costoCasilleroCarrito.textContent=`costo casillero= $${convertirdolarapesos(calcularCasillleroCosto(pesoConsola,cantidad))} COP`
    
    costoImpuesto.textContent=`costo venta(impuesto): $${convertirdolarapesos(calculaImpuesto(precioConsola,cantidad))} COP`

    let precioTotal=convertirdolarapesos(calcularCasillleroCosto(pesoConsola,cantidad))+convertirdolarapesos(calculaImpuesto(precioConsola,cantidad))

    costoTotal.textContent=`Costo total: $${(precioTotal)} COP`;

    btnConvertir.textContent="listo todo esta en pesos colombia"

    btnConvertir.addEventListener("click",capturarDatos)
}
//selecionar la informacion de consola segun la escogida por el usuario
function seleccionarConsola(opcion) {   
    let consolas={
        nombres:Array("PS5","XBOX Serie X","Nintendo Switch","poly station","la pulserita","el fierrogolpeador de parejas felices","la zapatilla kamikaze","la repeleperras","santo grial","elefente guerrero psiquico ancestral","artorias figura (The Abysswalker)","entrada a los viernes de la jungla","evangelion unidad 01"),
        precios:Array(750,700,409,90000,1000000,14020,450,101,400000000000000000,7,120,20,1500000),
        pesos:Array(14.2,13.1,4.75,800,0.20,9,1,1.4,0.75,12000,0.3,0.0001,143300),
        fotos:Array("img/unnamed.jpg","img/foto2.jpg","img/foto1.jpg","https://i.ytimg.com/vi/d0SYZ18zq84/maxresdefault.jpg","img/la pulserita.jpg","img/ElFierro.png","img/LaZapatillaKamikaze.png","img/larepeleperras.jpg","img/santoGrial.jpg","img/elefante_g.jpg","img/artorias.png","img/viernes.jpg","img/chogoqui.jpg")
    }
    if (opcion==1) {
        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];
    }
    else if (opcion==2) {
        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];
    }
    else if (opcion==3) {
        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];
    }
    else if (opcion==4) {
        nombreConsola=consolas.nombres[3];
        precioConsola=consolas.precios[3];
        pesoConsola=consolas.pesos[3];
        fotoConsola=consolas.fotos[3];
    }
    else if (opcion==5) {
        nombreConsola=consolas.nombres[4];
        precioConsola=consolas.precios[4];
        pesoConsola=consolas.pesos[4];
        fotoConsola=consolas.fotos[4];
    }
    else if (opcion==6) {
        nombreConsola=consolas.nombres[5];
        precioConsola=consolas.precios[5];
        pesoConsola=consolas.pesos[5];
        fotoConsola=consolas.fotos[5];
    }
    else if (opcion==7) {
        nombreConsola=consolas.nombres[6];
        precioConsola=consolas.precios[6];
        pesoConsola=consolas.pesos[6];
        fotoConsola=consolas.fotos[6];
    }
    else if (opcion==8) {
        nombreConsola=consolas.nombres[7];
        precioConsola=consolas.precios[7];
        pesoConsola=consolas.pesos[7];
        fotoConsola=consolas.fotos[7];
    }
    else if (opcion==9) {
        nombreConsola=consolas.nombres[8];
        precioConsola=consolas.precios[8];
        pesoConsola=consolas.pesos[8];
        fotoConsola=consolas.fotos[8];
    }
    else if (opcion==10) {
        nombreConsola=consolas.nombres[9];
        precioConsola=consolas.precios[9];
        pesoConsola=consolas.pesos[9];
        fotoConsola=consolas.fotos[9];
    }
    else if (opcion==11) {
        nombreConsola=consolas.nombres[10];
        precioConsola=consolas.precios[10];
        pesoConsola=consolas.pesos[10];
        fotoConsola=consolas.fotos[10];
    }
    else if (opcion==12) {
        nombreConsola=consolas.nombres[11];
        precioConsola=consolas.precios[11];
        pesoConsola=consolas.pesos[11];
        fotoConsola=consolas.fotos[11];
    }
    else if (opcion==13) {
        nombreConsola=consolas.nombres[12];
        precioConsola=consolas.precios[12];
        pesoConsola=consolas.pesos[12];
        fotoConsola=consolas.fotos[12];
    }
    else if (opcion==14) {
        nombreConsola=consolas.nombres[13];
        precioConsola=consolas.precios[13];
        pesoConsola=consolas.pesos[13];
        fotoConsola=consolas.fotos[13];
    }
    else if (opcion==15) {
        nombreConsola=consolas.nombres[14];
        precioConsola=consolas.precios[14];
        pesoConsola=consolas.pesos[14];
        fotoConsola=consolas.fotos[14];
    }
    else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;
    }
}
function calcularCasillleroCosto(peso,cantidad) {
    let costoCasillero=0;
    let pesoT=peso*cantidad;
    if (pesoT<=20) {
        costoCasillero=85;
    }
    else{
        let diferenciap=pesoT-20;
        costoCasillero=85+(diferenciap*2);
    }
    return costoCasillero;
}
function calculaImpuesto(costoC,cantidad) {
    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;
    let valorCompra=costoC*cantidad;
    let valorTotal=valorCompra+IMPUESTO_PAIS+VALOR_SEGURO;
    return valorTotal;  
}
function convertirdolarapesos(precioDolares) {
    const TRM=3932;
    let convercion=TRM*precioDolares;
    return convercion;
}
function limpiarCarrito(){
    fotocarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=true";
    tituloC.textContent="este carrito esta vacio";

    let precioUnitarioCarrito=document.getElementById("precioUnitarioCarrito");
    precioUnitarioCarrito.textContent=null

    let pesoUnitarioCarrito=document.getElementById("pesoUnitarioCarrito");
    pesoUnitarioCarrito.textContent=null

    let pesoTotalCarrito=document.getElementById("pesoTotalCarrito");
    pesoTotalCarrito.textContent=null

    let costoCasilleroCarrito=document.getElementById("costoCasilleroCarrito");
    costoCasilleroCarrito.textContent=null
    
    let costoImpuesto=document.getElementById("costoImpuesto");
    costoImpuesto.textContent=null
    
    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=null

    let pill=document.getElementById("pill");
    pill.textContent=null;
    pill.classList.add("invisible");
    pill.classList.add("visible");

    
    line1.classList.remove("visible");
    line2.classList.remove("visible");
    line1.classList.add("invisible");
    line2.classList.add("invisible");

    btnConvertir.classList.remove("visible");
    btnConvertir.classList.add("invisible");
}