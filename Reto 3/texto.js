
    // FUNCIONALIDAD LETRA ESCRIBIÉNDOSE
    window.addEventListener("DOMContentLoaded", function () {
        var title = document.getElementById("bienvenido-title");
        var text =  "¡Bienvenido a sueños del Mar!";
        var i = 0;
        var typingEffect = setInterval(function () {
          if (i <= text.length) {
            title.innerText = text.substr(0, i); // Mostrar los primeros i caracteres
            i++;
          } else {
            clearInterval(typingEffect);
          }
        }, 200); // Velocidad de escritura (ms)
      });