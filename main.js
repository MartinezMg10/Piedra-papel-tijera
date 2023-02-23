const Jugar = document.getElementById("jugar");
const Intentos = document.getElementById("intentos");
const Piedra = document.getElementById("button-piedra");
const Papel = document.getElementById("button-papel");
const Tijera = document.getElementById("button-tijera");
const Usuario = document.getElementById("usuario");
const Npc = document.getElementById("npc");
const Empate = document.getElementById("empate");
const seleccionHumano = document.getElementById("seleccion-humano");
const seleccionNpc = document.getElementById("seleccion-npc");







Jugar.addEventListener("click", () => {
  let oportunidades = prompt("Cuantas veces quieres jugar");
  Intentos.value = oportunidades;

    Piedra.addEventListener("click", () => {
      value = "Piedra";
      oportunidades = Intentos.value;
      oportunidades = parseInt(oportunidades);

      if (oportunidades >= 1) {

        let min = 1;
        let max = 3;
        let npc = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(npc);
        if(npc === 1){
            npc ="piedra"
        }else if(npc === 2){
            npc ="papel"
        }else{
            npc ="tijera"
        }

        seleccionNpc.value = npc
        seleccionHumano.value = value

      if (npc ==="papel") {
        Npc.value = parseInt(Npc.value)+1
        Intentos.value = Intentos.value - 1;
      } else if (npc ==="tijera") {
        Usuario.value = parseInt(Usuario.value)+1
        Intentos.value = Intentos.value - 1;
      } else if(npc === "piedra") {
        Empate.value = parseInt(Empate.value)+1
        Intentos.value = Intentos.value - 1;

      }
    }
    });


    Papel.addEventListener("click", () => {
      value = "Papel";
      oportunidades = Intentos.value;
      oportunidades = parseInt(oportunidades);

      if (oportunidades >= 1) {

        let min = 1;
        let max = 3;
        let npc = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(npc);
        if(npc === 1){
            npc ="piedra"
        }else if(npc === 2){
            npc ="papel"
        }else{
            npc ="tijera"
        }

        seleccionNpc.value = npc
        seleccionHumano.value = value

        if (npc ==="tijera") {
            Npc.value = parseInt(Npc.value)+1
            Intentos.value = Intentos.value - 1;
          } else if (npc ==="piedra") {
            Usuario.value = parseInt(Usuario.value)+1
            Intentos.value = Intentos.value - 1;
          } else if(npc ==="papel") {
            Empate.value = parseInt(Empate.value)+1
        Intentos.value = Intentos.value - 1;

          }
        }
    });


    Tijera.addEventListener("click", () => {
      value = "Tijera";
      oportunidades = Intentos.value;
      oportunidades = parseInt(oportunidades);

      if (oportunidades >= 1) {

        let min = 1;
        let max = 3;
        let npc = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(npc);
        if(npc === 1){
            npc ="piedra"
        }else if(npc === 2){
            npc ="papel"
        }else{
            npc ="tijera"
        }

        seleccionNpc.value = npc
        seleccionHumano.value = value
        

        if (npc ==="piedra") {
            Npc.value = parseInt(Npc.value)+1
            Intentos.value = Intentos.value - 1;
          } else if (npc ==="papel") {
            Usuario.value = parseInt(Usuario.value)+1
            Intentos.value = Intentos.value - 1;
          } else if(npc ==="tijera") {
            Empate.value = parseInt(Empate.value)+1
        Intentos.value = Intentos.value - 1;

          }
        }
    });
  }
);

let value = 0;

/*  */

/* for(let i=oportunidades; i>=1;i--){

} */

/*   if(Intentos >= 1){

    let piedra = 1
    let npc = Math.floor(Math.random()*(max-min+1)+min);
    if(npc == 2){
       return Npc.value+=1
    }else if(npc == 3){
       return Usuario.value+=1
    }else{
     return  Empate.value+=1
    }
}
}) */
