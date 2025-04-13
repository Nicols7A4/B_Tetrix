document.addEventListener("DOMContentLoaded", function () {
  let bton = document.getElementById("bton");

  if (bton) {
    bton.addEventListener("click", function () {
      alert("Button clicked!");
    });
  } else {
    console.error("El elemento con ID 'bton' no existe.");
  }
});
