const infoDivs = [
    {id: 'idprimerDiv', url: 'https://www.ticketek.com.ar/ciro-y-los-persas/teatro-el-circulo', texto: '🎫 4 DE MAYO - ROSARIO - SINFONICO'},
    {id: 'idsegundoDiv', url: 'https://www.ticketek.com.ar/ciro-y-los-persas/anfiteatro-municipal', texto: '🎫 6 DE MAYO - ROSARIO'},
    {id: 'idtercerDiv', url: 'https://www.entradaweb.com.ar/index.php?r=site/detalles&d=88d99135', texto: '🎫 7 DE JUNIO - MENDOZA - SINFONICO'},
    {id: 'idcuartoDiv', url: 'https://www.tuentrada.com/eventos/detalle/Ciro-Arena-Maipu/741139795609', texto: '🎫 9 DE JUNIO - MENDOZA'},
    {id: 'idquintoDiv', url: 'https://ventas.autoentrada.com/events/suenos-un-viaje-en-el-tiempo-ciro-y-los-persas?fbclid=PAAaZmkIn9i2fY830syArWtQ1fHWFLso663OaRilIQJCw8B1M5v3a_QU_jc8o', texto: '🎫 2 DE AGOSTO - CORDOBA - SINFONICO'},
    {id: 'idsextoDiv', url: 'https://www.edenentradas.com.ar/sitio/contenido/funcion?cf=FUNC021735&cv=3&fbclid=PAAaajVPzvaRKtLBbhgdy8uLD9INQAsqcCTzFxgZsDB1mBlgMppX7cUrCQulc', texto: '🎫 4 DE AGOSTO - CORDOBA'},
    {id: 'idseptimoDiv', url: 'https://venta.enterticket.es/buy/?id=25966', texto: '🎫 14 DE SEPTIEMBRE - LONDRES'},
    {id: 'idoctavoDiv', url: 'https://venta.enterticket.es/buy/?id=25968', texto: '🎫 15 DE SEPTIEMBRE - PARIS'},
    {id: 'idnovenoDiv', url: 'https://venta.enterticket.es/buy/?id=25859', texto: '🎫 21 DE SEPTIEMBRE - BARCELONA'},
    {id: 'iddecimoDiv', url: 'https://venta.enterticket.es/buy/?id=25858', texto: '🎫 23 DE SEPTIEMBRE - VALENCIA'},
    {id: 'idonceavoDiv', url: 'https://venta.enterticket.es/buy/?id=25857', texto: '🎫 24 DE SEPTIEMBRE - MALLORCA'},
    {id: 'iddoceavoDiv', url: 'https://venta.enterticket.es/buy/?id=25853', texto: '🎫 28 DE SEPTIEMBRE - ALICANTE'},
    {id: 'idterceavoDiv', url: 'https://venta.enterticket.es/buy/?id=25855', texto: '🎫 30 DE SEPTIEMBRE - MALAGA'},
    {id: 'idcatorceavoDiv', url: 'https://venta.enterticket.es/buy/?id=25856', texto: '🎫 1 DE OCTUBRE - MADRID'}
];

const contenedor = document.getElementById('madre');
let contador = 0;

var titulo = document.createElement("h1");
titulo.innerHTML = "Tour Europa";

for (let i = 0; i < infoDivs.length; i++) 
{
  const div = document.createElement('div');
  div.id = infoDivs[i].id;
  div.classList.add('ancho', 'fondo');
  div.style.cursor = 'pointer';
  div.onclick = function() 
  {
    window.open(infoDivs[i].url, '_blank');
  };

  if (i === 6) 
  {
    contenedor.insertBefore(titulo, div[i]);
  }

  const letraCentrada = document.createElement('div');
  letraCentrada.classList.add('letraCentrada');

  const texto = document.createElement('p');
  texto.classList.add('pClass');
  texto.textContent = infoDivs[i].texto;

  const orden = document.createElement('div');
  orden.classList.add('orden');

  const imagen = document.createElement('img');
  imagen.src = '/images/download.png';
  imagen.alt = 'velez';
  imagen.classList.add('contenedorCircular');

  orden.appendChild(imagen);
  letraCentrada.appendChild(texto);
  div.appendChild(letraCentrada);
  div.appendChild(orden);
  contenedor.appendChild(div);

}// fin del for

const botoncitos = document.createElement('div');
const botonVolver = document.createElement('button');
botoncitos.classList.add('botoncitos');
botonVolver.id = 'volver';
botonVolver.type = 'submit';
botonVolver.textContent = 'volver';
botoncitos.appendChild(botonVolver);
contenedor.appendChild(botoncitos);

botonVolver.addEventListener('click', function() 
{
    window.location.href = "/index.html";
});