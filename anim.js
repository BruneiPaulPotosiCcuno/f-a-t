// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hey tú, gracias por aparecer en mi vida", time: 5 },
  { text: "Todo el tiempo que llevamos conociéndonos", time: 11 },
  { text: "Me doy cuenta que eres y serás", time: 17 },
  { text: "Siempre alguien especial para mi.", time: 22 },
  { text: "Agradezco al destino por dejarme tenerte en mi vida", time: 28 },
  { text: "Aunque todo suene muy cursi, es la verdad", time: 34 },
  { text: "Tu amistad ilumina mis días", time: 41 },
  { text: "Y tus momentos me llenan de energia", time: 47 },
  { text: "No hay nada que cambie lo que vivo", time: 54 },
  { text: "Porque contigo todo es bien bonito", time: 60 },
  { text: "Y aunque a veces no lo digo", time: 66 },
  { text: "Siempre aprecio cada momento contigo", time: 72 },
  { text: "Las risas, las conversaciones, los silencios", time: 79 },
  { text: "Todo tiene un valor gigante", time: 85 },
  { text: "Tú me enseñas a ver la vida de otra manera", time: 91 },
  { text: "Y me haces sentir que todo estara bien", time: 98 },
  { text: "No importa lo que venga", time: 105 },
  { text: "Porque sé que siempre estaras ahi", time: 111 },
  { text: "Gracias por cada palabra por cada gesto", time: 117 },
  { text: "Por hacerme sentir querido y valorado", time: 123 },
  { text: "Por ser tu, simplemente", time: 129 },
  { text: "Espero que siempre sepas lo importante que eres para mi", time: 135 },
  { text: "Y que este detalle nunca se desvanezca", time: 141 },
  { text: "Porque en ti encontre una amistad que no tiene precio", time: 147 },
  { text: "Una conexion que trasciende", time: 153 },
  { text: "Y que con el tiempo solo crecera", time: 159 },
  { text: "Gracias por todo.", time: 165 },
  { text: "TQM CAROLINA <3", time: 170 },
  { text: "Muestrame una chichi", time: 174 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);