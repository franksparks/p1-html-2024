// Definimos el modelo
const index = {};

// Obtenemos los artículos del DOM
const articles = document.querySelectorAll("#apuntes article");

// Obtenemos el elemento donde queremos colocar el índice
const nav = document.getElementById("index");

// Generamos un elemento ul que contendrá la lista de artículos/temáticas
const list = document.createElement("ul");

// Obtenemos las temáticas de las sesiones para inyectarlos al índice
articles.forEach((article) => {
  // Introducimos en el índice una entrada por artículo
  const heading = article.querySelector("h2").innerText;
  const listItem = document.createElement("li");
  listItem.textContent = heading;

  // Generamos un elemento que contendrá la lista de sesiones
  const subList = document.createElement("ul");

  const subHeadings = article.querySelectorAll("fieldset");
  subHeadings.forEach((subHeading) => {
    const subListItem = document.createElement("li");

    const subSectionId = subHeading.id;

    // Añadiremos la id de la sesion a la URL para ser redirigidos.
    const anchor = document.createElement("a");
    anchor.textContent = subHeading.children[0].innerText;
    anchor.href = `#${subSectionId}`;

    subListItem.appendChild(anchor);
    subList.appendChild(subListItem);

    subList.classList.add("remove-bullet");
  });

  // Cargamos la lista de sesiones al artículo
  listItem.appendChild(subList);
  listItem.classList.add("remove-bullet");
  list.appendChild(listItem);

  // Actualizamos el DOM con las sesiones
  nav.appendChild(list);

  // Actualizamos el índice en el modelo.
  index[heading] = subHeadings;
});
