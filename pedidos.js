let pedidos=[
    {
        id:1,
        nombre:"ps5",
        precio:750,
        peso:14.5,   
        cantidad:2,
        foto:"img/unnamed.jpg"
    },
    {
        id:2,
        nombre:"XBOX Serie X",
        precio:700,
        peso:13.1,   
        cantidad:1,
        foto:"img/foto2.jpg"
    },
    {
        id:3,
        nombre:"Nintendo Switch",
        precio:409,
        peso:4.75,   
        cantidad:90,
        foto:"img/foto1.jpg"
    },
    {
        id:4,
        nombre:"poly station",
        precio:90000,
        peso:800,   
        cantidad:32,
        foto:"https://i.ytimg.com/vi/d0SYZ18zq84/maxresdefault.jpg"
    },
    {
        id:5,
        nombre:"LA PULSERITA",
        precio:1000000,
        peso:0.20,   
        cantidad:8,
        foto:"img/la pulserita.jpg"
    },
    {
        id:6,
        nombre:"el fierrogolpeador de parejas felices",
        precio:14020,
        peso:9,   
        cantidad:8,
        foto:"img/ElFierro.png"
    },
    {
        id:7,
        nombre:"la zapatilla kamikaz",
        precio:450,
        peso:1,   
        cantidad:20,
        foto:"img/LaZapatillaKamikaze.png"
    },
    {
        id:8,
        nombre:"el repeleperras",
        precio:101,
        peso:1.4,   
        cantidad:2,
        foto:"img/larepeleperras.jpg"
    },
    {
        id:9,
        nombre:"santo grial",
        precio:400000000000000000,
        peso:0.75,   
        cantidad:1,
        foto:"img/santoGrial.jpg"
    },
    {
        id:10,
        nombre:"evangelion unidad-01",
        precio:1500000,
        peso:143300,   
        cantidad:1,
        foto:"img/chogoqui.jpg"
    },

    {
        id:11,
        nombre:"elefente guerrero psiquico ancestral",
        precio:7,
        peso:12000,   
        cantidad:2,
        foto:"img/elefante_g.jpg"
    },
    {
        id:12,
        nombre:"entrada a los viernes de la jungla",
        precio:20,
        peso:0.0001,   
        cantidad:130,
        foto:"img/viernes_jungla.jpg"}
];
let contenedorPadre=document.getElementById("padre");
pedidos.forEach(function(pedido){
    //aqui se crean los elementos
    let columna=document.createElement("div");
    columna.classList.add("col");
    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card");
    cuerpo.classList.add("h-100");
    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.classList.add("img-fluid");
    imagen.classList.add("h-100");
    imagen.src=pedido.foto;
    let bodyT=document.createElement("div");
    bodyT.classList.add("card-body");
    let h5=document.createElement("h5");
    h5.classList.add("card-title")
    h5.textContent=`${pedido.nombre}`
    let p1=document.createElement("p");
    p1.classList.add("card-text")
    p1.classList.add("mt-3")
    p1.textContent=`precio: ${pedido.precio} USD`
    let p2=document.createElement("p");
    p2.classList.add("card-text")
    p2.textContent=`peso: ${pedido.peso} Lb`
    let p3=document.createElement("p");
    p3.classList.add("card-text")
    p3.textContent=`cantidad: ${pedido.cantidad}`
    let btnDelete=document.createElement("button");
    btnDelete.classList.add("btn")
    btnDelete.classList.add("btn-danger")
    btnDelete.textContent="eliminar";
    btnDelete.classList.add("me-4")
    let btnPut=document.createElement("button");
    btnPut.classList.add("btn")
    btnPut.classList.add("btn-info")
    btnPut.classList.add("ml-3")
    btnPut.textContent="editar";
    let iconE=document.createElement("i")
    iconE.classList.add("fas")
    iconE.classList.add("fa-trash-alt")
    iconE.classList.add("ms-2")
    let iconP=document.createElement("i")
    iconP.classList.add("fas")
    iconP.classList.add("fa-edit")
    iconP.classList.add("ms-2")
    
    //aqui se pone quien esta dentro de quien
    contenedorPadre.appendChild(columna);
    columna.appendChild(cuerpo);
    cuerpo.appendChild(imagen);
    cuerpo.appendChild(bodyT);
    bodyT.appendChild(h5);
    bodyT.appendChild(p1);
    bodyT.appendChild(p2);
    bodyT.appendChild(p3);
    bodyT.appendChild(btnDelete);
    bodyT.appendChild(btnPut);
    btnDelete.appendChild(iconE);
    btnPut.appendChild(iconP);
});