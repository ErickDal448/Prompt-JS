var BtnNumWords = document.querySelector(".BtnNumWords") 
var BtnSearch = document.querySelector(".BtnSearch") 
var BtnTittle = document.querySelector(".BtnTittle") 

BtnNumWords.addEventListener("click" , () => {
    msg = prompt("Ingrese el texto");
    
    // Divide el mensaje en palabras con split
    if (msg) {
        msg = msg.trim(); // Elimina los espacios al inicio y al final del texto
        var numWords = msg.split(" ").length;
        alert("El texto tiene " + numWords + " palabras.");
    }
})
BtnSearch.addEventListener("click" , () => {
    msg = prompt("Ingrese el texto");
    if (msg) {
        msg = msg.trim(); // Elimina los espacios al inicio y al final del texto
        var word = prompt("Ingrese la palabra o letra que desea buscar");

        if (word) {
            word = word.trim(); // Elimina los espacios al inicio y al final del texto
            // cuenta las veces que la variable word concuerda con el msg, distingue en mayusculas y minusculas por el
            // (word, "g") en caso contrario se usuaria el "gi" 
            var count = (msg.match(new RegExp(word, "g")) || []).length;
            if(word.length == 1){
                alert("La letra '" + word + "' aparece " + count + " veces en el texto.");
            }
            else{
                alert("La palabra '" + word + "' aparece " + count + " veces en el texto.");
            }
        }
    }

})
BtnTittle.addEventListener("click" , () => {
    msg = prompt("Ingrese el texto");
    
    if (msg) {
        msg = msg.trim(); // Elimina los espacios al inicio y al final del texto
        var title = msg.toLowerCase().split(' ').map(function(word) {
            // Condicion de que si tiene mas de una letra le cambie el formato, caso contrario 
            // muestra el word como el formato original
            return  (word.length > 1) ? (word.charAt(0).toUpperCase() + word.slice(1)) : word;
        }).join(' ');
        alert("Mensaje original:\n " + msg + "\nMensaje en formato de título:\n " + title);
    }
})

