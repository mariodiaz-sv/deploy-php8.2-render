document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const nombreInput = document.getElementById("nombre");
  const promedioInput = document.getElementById("promedio");
  const resultados = document.getElementById("resultados");

  //const API_URL = "http://localhost:8000";//desplegar en local
  const API_URL = "https://php8-2-notas-1-0.onrender.com";//para desplegar en render
  

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const promedio = promedioInput.value.trim();

    if (!nombre || !promedio) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, promedio }),
      });

      const result = await res.json();
      if (result.success) {
        nombreInput.value = "";
        promedioInput.value = "";
        cargarDatos();
      }
    } catch (err) {
      alert("Error al guardar los datos.");
      console.error(err);
    }
  });

  async function cargarDatos() {
    try {
      const res = await fetch(API_URL);
      const datos = await res.json();
      resultados.innerHTML = "";
      datos.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${index + 1}.</strong> ${item.nombre} - Promedio: ${item.promedio}`;
        resultados.appendChild(div);
      });
    } catch (err) {
      console.error("Error al cargar datos:", err);
    }
  }

  cargarDatos();
});
