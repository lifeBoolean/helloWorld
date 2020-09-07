// window.onload = function() {
window.addEventListener("load", function() {    
    var btnPrint = document.getElementById("btn-print");

    btnPrint.onclick = function() {
        var x = prompt("x");
        var y = prompt("y");
        var x = parseInt(x);
        var y = parseInt(y);

        btnPrint.value = x+y;
    }

    btnSpan.onclick = function() {
        btnSpan.innerText = "ok";
    }
});
