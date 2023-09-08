const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    resolverBtn = document.getElementById("resolver"),
    diametro = document.getElementById("diametro"),
    outPut = document.getElementById("salida"),
    container = document.getElementById("canvasCont");

resolverBtn.addEventListener("click", () => {

    if (diametro.value > 1000) {
        alert("El diametro debe ser menor a 1000. Lo sentimos.")
    } else {
        limpiarCanvas();
        outPut.innerText = "";

        let radio = diametro.value / 2;

        ctx.beginPath();
        ctx.arc(container.clientWidth/2, radio, radio, 0, 2 * Math.PI);
        ctx.fillStyle = "#F5B041";

        ctx.fill();
        ctx.closePath();

        outPut.innerText = "Radio: " + radio;
    }
});

function limpiarCanvas() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 1000);

    ctx.closePath();
}

function ajustarCanvas() {
    canvas.width = container.clientWidth;
    canvas.height = 1000;

}

ajustarCanvas();
window.addEventListener('resize', ajustarCanvas);
