
let contar = (["mexicano", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano","mexicano", "peruano", "argentino"]);
function counter(contar) {
  let contM = 0;
  let contA = 0;
  let contV = 0;
  let contP = 0;
  for (i = 0; i < contar.length; i++) {
    switch (contar[i]) {
      case ("mexicano"):
        contM = contM + 1;
        break
      case ("argentino"):
        contA = contA + 1;
        break
      case ("venezolano"):
        contV = contV + 1;
        break
      case ("peruano"):
        contP = contP + 1;
        break
    }
  }
  console.log("Cantidad argentinos: ",contA," Cantidad Mexicanos: " ,contM, "Cantidad venezolanos : ",contV, "Cantidad peruanos ",contP)
}

counter(contar)
