function toggleCuriosity() {
  let curiosidades = document.getElementById("Curiosity");

  if(curiosidades.style.display == "none") {
    curiosidades.style.display = "flex";
  }
  else {
    curiosidades.style.display = "none";
  }
}