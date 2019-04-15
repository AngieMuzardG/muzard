// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "The cookie Factory",
    about: "Cambio de la imagen a marca de galletas dulces",
}, {
    figure: "media/foto-02.jpg",
    title: "MG Eventos",
    about: "Creadora de MG, Eventos sociales y saludables",
}, {
    figure: "media/foto-03.jpg",
    title: "Nidal",
    about: "Mudador portatil para emergencias",
}, {
    figure: "media/foto-04.jpg",
    title: "Sako",
    about: "Mochila transformable en colchoneta para descansar",
}, {
    figure: "media/foto-05.jpg",
    title: "La Ruta Saludable",
    about: "Practicante en empresa, La Ruta Saludable",
}, {
    figure: "media/foto-06.jpg",
    title: "Vibra",
    about: "Creadora de juego interactivo entre pabres e hijos",
}, {
    figure: "media/foto-07.jpg",
    title: "Lavish",
    about: "Parte del equipo representantes de Lavish Chile ",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
