/////////////////////////////////////////////////////////////////////////  El elemento asociado al id “descripcion”. Utilice el método getElementById()

    var des = document.getElementById("descripcion");
    console.log(des);

/////////////////////////////////////////////////////////////////////////  El elemento asociado al id “descripcion”. Utilice el método querySelector()

    var descrip = document.querySelector("#descripcion");
    console.log(descrip);

/////////////////////////////////////////////////////////////////////////  todos los elementos li en forma de lista. Utilice el método querySelectorAll()

    var lis = document.querySelectorAll("li");
    console.log(lis);

/////////////////////////////////////////////////////////////////////////  la cantidad de elementos listados con li con el siguiente mensaje.
    console.log(`Hay ${lis.length} elementos en la lista.`);

/////////////////////////////////////////////////////////////////////////  Genere una lista de todos los elementos li y recorra la lista con ayuda de un ciclo.
    lis.forEach((li, index) => {
        console.log(`Elemento ${index + 1}: ${li.textContent}`);
    });

///////////////////////////////////////////////////////////////////////// Crear un nuevo elemento de párrafo

    var newP= document.createElement("p");

///////////////////////////////////////////////////////////////////////// Agregar el texto al párrafo
    newP.textContent = "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad deReading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programasfinalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seisprogramas tuvieron que interactuar con los 12 jueces manteniendo una conversaciónmediante un computador durante cinco minutos en donde se plantean una serie de preguntascon el fin de determinar si es un computador o un humano. En la edición del 2008 ningunologré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programaElbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";

///////////////////////////////////////////////////////////////////////// Agregar el nuevo párrafo al final del cuerpo del documento
    document.body.appendChild(newP);

///////////////////////////////////////////////////////////////////////// Crear un nuevo elemento de enlace

    var newE = document.createElement("a");
    newE.href = "#";
    newE.innerHTML = "Enlace principal";

///////////////////////////////////////////////////////////////////////// Agregar el nuevo enlace al final del cuerpo del documento
    document.body.appendChild(newE);

///////////////////////////////////////////////////////////////////////// Crear un nuevo elemento de título

    var tittle = document.createElement("h2");
    tittle.innerHTML = "Meses del año";

///////////////////////////////////////////////////////////////////////// Agregar el título al final del cuerpo del documento
    document.body.appendChild(tittle);

///////////////////////////////////////////////////////////////////////// Crear un nuevo elemento de lista no ordenada

    var listas = document.createElement("ul");

///////////////////////////////////////////////////////////////////////// Crear un arreglo con los meses del año

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

///////////////////////////////////////////////////////////////////////// Recorrer el arreglo y agregar cada mes a la lista
    meses.forEach(function (mes) {
        var li = document.createElement("li");
        li.innerHTML = mes;
        listas.appendChild(li);
    });

///////////////////////////////////////////////////////////////////////// Agregar la lista al final del cuerpo del documento
    document.body.appendChild(listas);