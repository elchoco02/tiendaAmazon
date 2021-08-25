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
//capturar los datos de la venta
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

    fotocarrito.src=fotoConsola;

    tituloC.textContent=nombreConsola;

    let precioUnitarioCarrito=document.getElementById("precioUnitarioCarrito");
    precioUnitarioCarrito.textContent=`$${precioConsola} USD`;

    let pesoUnitarioCarrito=document.getElementById("pesoUnitarioCarrito");
    pesoUnitarioCarrito.textContent=`peso unitario: ${pesoConsola} Lb`;

    let pesoTotalCarrito=document.getElementById("pesoTotalCarrito");
    pesoTotalCarrito.textContent=`peso total: ${pesoConsola*cantidad} Lb`

    let costoCasilleroCarrito=document.getElementById("costoCasilleroCarrito");
    costoCasilleroCarrito.textContent=`costo casillero= $${calcularCasillleroCosto(pesoConsola,cantidad)} USD`
    
    let costoImpuesto=document.getElementById("costoImpuesto");
    costoImpuesto.textContent=`costo venta(impuesto): $${calculaImpuesto(precioConsola,cantidad)} USD`

    let precioTotal=(calculaImpuesto(precioConsola,cantidad))+(calcularCasillleroCosto(pesoConsola,cantidad))

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo total: $${precioTotal} USD`;
    
}
//convertidor de valores
function pasarValores(){

    seleccionarConsola(consola);

    let consola=document.getElementById("consola").value;
    
    
    let precioUnitarioCarrito=document.getElementById("precioUnitarioCarrito");
    precioUnitarioCarrito.textContent=`$${convertirdolarapesos(precioConsola)} COP`;

    let costoCasilleroCarrito=document.getElementById("costoCasilleroCarrito");
    costoCasilleroCarrito.textContent=`costo casillero= $${convertirdolarapesos(casillero)} COP`
    let casillero=calcularCasillleroCosto(pesoConsola,cantidad);

    let costoImpuesto=document.getElementById("costoImpuesto");
    costoImpuesto.textContent=`costo venta(impuesto): $${convertirdolarapesos(impuesto)} COP`
    let impuesto=calculaImpuesto(precioConsola,cantidad);

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo total: $${convertirdolarapesos(precioTotal)} COP`;    
    
    let precioTotal=(calculaImpuesto(precioConsola,cantidad))+(calcularCasillleroCosto(pesoConsola,cantidad))

}
//selecionar la informacion de consola segun la escogida por el usuario
function seleccionarConsola(opcion) {   
    let consolas={
        nombres:Array("PS5","XBOX Serie X","Nintendo Switch","poly station","la pulserita"),
        precios:Array(750,700,409,90000,1000000),
        pesos:Array(14.2,13.1,4.75,800,0.20),
        fotos:Array("img/unnamed.jpg","img/foto2.jpg","img/foto1.jpg","https://i.ytimg.com/vi/d0SYZ18zq84/maxresdefault.jpg","img/la pulserita.jpg")
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