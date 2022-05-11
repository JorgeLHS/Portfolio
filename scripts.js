document.getElementById('distancia').addEventListener('submit', calcular)
function calcular(e) {

    let punto1 = document.getElementById('x1').value
    let punto2 = document.getElementById('y1').value

    let punto3 = document.getElementById('x2').value
    let punto4 = document.getElementById('y2').value

    var solution = 0;
    var solution = Math.sqrt(Math.pow(punto3 - punto1,2) + Math.pow(punto4 - punto2,2));



    alert("la solucion es: " + solution);

    console.log(solution);

    e.preventDefault();

}